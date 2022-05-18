import type { ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { getThemeSession, isTheme } from "~/helpers";

export const action: ActionFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);
  const requestText = await request.text();
  const form = new URLSearchParams(requestText);
  const theme = form.get("theme");

  if (!isTheme(theme))
    return json({
      success: false,
      message: `Theme value of "${theme}" is not a valid theme.`,
    });

  themeSession.setTheme(theme);

  return json(
    { success: true },
    { headers: { "Set-Cookie": await themeSession.commit() } }
  );
};

export const loader = () => redirect("/", { status: 404 });

export default function SetTheme() {
  return <div>Sorry this is hidden</div>;
}
