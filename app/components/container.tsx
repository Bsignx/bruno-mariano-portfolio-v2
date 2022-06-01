import { styled } from "~/styles";

export const Container = styled("div", {
  maxWidth: "75rem",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0 2rem",
  position: "relative",
  overflow: "hidden",

  "@desktopUp": {
    overflow: "initial",
  },
});
