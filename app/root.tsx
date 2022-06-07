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
} from "@remix-run/react";
import { useContext, useEffect } from "react";

import type { THEME } from "./helpers";
import { getThemeSession } from "./helpers";
import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from "./helpers";
import { getEnv } from "./utils";
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

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  name: "Bruno Mariano",
  title: "Bruno Mariano - Front-end developer",
  description:
    "Personal website of Bruno Mariano. Front-end developer with a passion for web development.",
  url: "https://brunomariano.me",
  route: "",
  color: "#0F1413",
  ogImageAlt: "Website of Bruno Mariano",
  ogImageUrl: "images/coverage.jpg?v=3",
  twiterImageUrl: "images/coverage.jpg?v=3",
  fbAppId: "221593320168073",
  locale: "pt_BR",
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
  const data = useLoaderData<LoaderData>();
  const clientStyleData = useContext(ClientStyleContext);

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
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: clientStyleData.sheet }}
          suppressHydrationWarning
        />
      </head>

      <DocumentBody>
        {children}
        <div id="menu-mobile" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)};`,
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
  const data = useLoaderData<LoaderData>();

  return (
    <ThemeProvider specifiedTheme={data.theme}>
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
