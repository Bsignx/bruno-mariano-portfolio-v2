import type {
  HeadersFunction,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import { useContext, useEffect } from "react";

import type { THEME } from "./helpers";
import { getThemeSession } from "./helpers";
import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from "./helpers";
import { getEnv, gtag } from "./utils";
import { darkTheme, lightTheme, ClientStyleContext } from "./styles";

export const headers: HeadersFunction = () => ({
  "Accept-CH": "Sec-CH-Prefers-Color-Scheme",
});

export const links: LinksFunction = () => [
  {
    rel: "shortcut icon",
    href: "/icons/favicon.ico?v=1",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/icons/favicon-32x32.png?v=1",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/icons/favicon-16x16.png?v=1",
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/icons/apple-touch-icon.png?v=1",
  },
  {
    rel: "mask-icon",
    href: "/icons/safari-pinned-tab.svg?v=1",
    color: "#0E1415",
  },
  {
    rel: "manifest",
    href: "/site.webmanifest?v=1",
  },
  {
    href: "https://fonts.gstatic.com",
    rel: "preconnect",
  },
  {
    href: "https://fonts.googleapis.com/css2?family=Kosugi+Maru&family=Sarina&family=Shippori+Antique+B1&family=Space+Mono&display=swap",
    rel: "stylesheet",
  },
  {
    href: "https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
    rel: "stylesheet",
  },
];

// <!-- Primary Meta Tags -->
// <title>Bruno Mariano - Front-end developer</title>
// <meta name="title" content="Bruno Mariano - Front-end developer">
// <meta name="description" content="Personal website of Bruno Mariano. Front-end developer with a passion for web development.">

// <!-- Open Graph / Facebook -->
// <meta property="og:type" content="website">
// <meta property="og:url" content="https://metatags.io/">
// <meta property="og:title" content="Bruno Mariano - Front-end developer">
// <meta property="og:description" content="Personal website of Bruno Mariano. Front-end developer with a passion for web development.">
// <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">

// <!-- Twitter -->
// <meta property="twitter:card" content="summary_large_image">
// <meta property="twitter:url" content="https://metatags.io/">
// <meta property="twitter:title" content="Bruno Mariano - Front-end developer">
// <meta property="twitter:description" content="Personal website of Bruno Mariano. Front-end developer with a passion for web development.">
// <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"></meta>
const themeColor = "#0F1413";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",

  title: "Bruno Mariano - Front-end developer",
  description:
    "Personal website of Bruno Mariano. Front-end developer with a passion for web development.",

  "application-name": "Bruno Mariano - Front-end developer",
  "apple-mobile-web-app-title": "Bruno Mariano - Front-end developer",
  "theme-color": themeColor,
  "msapplication-TileColor": themeColor,
  "msapplication-config": "https://brunomariano.com/browserconfig.xml?v=1",

  "og:site_name": "Bruno Mariano - Front-end developer",
  "og:title": "Bruno Mariano - Front-end developer",
  "og:description":
    "Personal website of Bruno Mariano. Front-end developer with a passion for web development.",
  "og:locale": "pt_BR",
  "og:url": "https://brunomariano.me",
  "og:image":
    "https://res.cloudinary.com/my-portfoiio/image/upload/v1654625685/my-portfolio/coverage_qfcpzk.jpg",
  "og:image:type": "image/jpeg",
  "og:image:alt": "Bruno Mariano - Front-end developer",

  "og:type": "profile",
  "profile:first_name": "Bruno",
  "profile:last_name": "Mariano",
  "profile:gender": "male",
  "profile:username": "brunomariano",

  "twitter:card": "summary_large_image",
  "twitter:site": "@bsignx",
  "twitter:creator": "@bsignx",
  "twitter:title": "Bruno Mariano - Front-end developer",
  "twitter:description":
    "Personal website of Bruno Mariano. Front-end developer with a passion for web development.",
  "twitter:image":
    "https://res.cloudinary.com/my-portfoiio/image/upload/v1654625685/my-portfolio/coverage_qfcpzk.jpg",

  "fb:app_id": "",
});

export type LoaderData = {
  theme: THEME | null;
  ENV: ReturnType<typeof getEnv>;
};

interface DocumentProps {
  children: React.ReactNode;
  title?: string;
}

export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);
  const data: LoaderData = {
    theme: themeSession.getTheme(),
    ENV: getEnv(),
  };

  return json(data);
};

const Document = ({ children, title }: DocumentProps) => {
  const { theme, ENV } = useLoaderData<LoaderData>();
  const location = useLocation();
  const clientStyleData = useContext(ClientStyleContext);

  useEffect(() => {
    if (ENV.GA_TRACKING_ID?.length) {
      gtag.pageview(location.pathname, ENV.GA_TRACKING_ID);
    }
  }, [ENV.GA_TRACKING_ID, location.pathname]);

  // Only executed on client
  useEffect(() => {
    // reset cache to re-apply global styles
    clientStyleData.reset();
  }, [clientStyleData]);

  return (
    <html lang="en">
      <head>
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(theme)} />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: clientStyleData.sheet }}
          suppressHydrationWarning
        />
      </head>

      <DocumentBody>
        {process.env.NODE_ENV === "development" ||
        !ENV.GA_TRACKING_ID ? null : (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${ENV.GA_TRACKING_ID}`}
            />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ENV.GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
              }}
            />
          </>
        )}

        {children}
        <div id="menu-mobile" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)};`,
          }}
        />
      </DocumentBody>
    </html>
  );
};

export function DocumentBody({ children }: { children: React.ReactNode }) {
  const [theme] = useTheme();

  return (
    <body className={theme === "dark" ? darkTheme : lightTheme}>
      {children}
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </body>
  );
}

export default function AppWithProviders() {
  const { theme } = useLoaderData<LoaderData>();

  return (
    <ThemeProvider specifiedTheme={theme}>
      <App />
    </ThemeProvider>
  );
}

export function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function DocumentBoundary({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  const clientStyleData = useContext(ClientStyleContext);

  // Only executed on client
  useEffect(() => {
    // reset cache to re-apply global styles
    clientStyleData.reset();
  }, [clientStyleData]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: clientStyleData.sheet }}
          suppressHydrationWarning
        />
        <Links />
      </head>

      <body className={darkTheme}>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <p>
        [CatchBoundary]: {caught.status} {caught.statusText}
      </p>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title="Error!">
      <p>[ErrorBoundary]: There was an error: {error.message}</p>
    </Document>
  );
}
