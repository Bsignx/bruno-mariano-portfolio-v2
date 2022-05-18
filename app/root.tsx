import type {
  HeadersFunction,
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

import type { Theme } from "./helpers";
import { getThemeSession } from "./helpers";
import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from "./helpers";
import { getEnv } from "./utils";
import { darkTheme, lightTheme, ClientStyleContext } from "./styles";

export const headers: HeadersFunction = () => ({
  "Accept-CH": "Sec-CH-Prefers-Color-Scheme",
});

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix with Stitches",
  viewport: "width=device-width,initial-scale=1",
});

export type LoaderData = {
  theme: Theme | null;
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
