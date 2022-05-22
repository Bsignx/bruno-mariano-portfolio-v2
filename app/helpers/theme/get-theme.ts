import { createCookieSessionStorage } from "@remix-run/node";

import { getEnvServer } from "~/utils/env.server";
import { THEME, isTheme } from "~/helpers/theme";

const themeStorage = createCookieSessionStorage({
  cookie: {
    name: "app-theme",
    secrets: [getEnvServer("SESSION_SECRET")],
    sameSite: "lax",
    path: "/",
    expires: new Date("2100-12-12"),
    httpOnly: true,
  },
});

/**
 * Abstract out the themeStorage cookie
 * into multiple themeSession helper functions
 */
export async function getThemeSession(request: Request) {
  const session = await themeStorage.getSession(request.headers.get("Cookie"));

  return {
    getTheme: () => {
      const themeValue = session.get("theme");
      return isTheme(themeValue) ? themeValue : THEME.DARK;
    },
    setTheme: (theme: THEME) => session.set("theme", theme),
    commit: () => themeStorage.commitSession(session),
  };
}
