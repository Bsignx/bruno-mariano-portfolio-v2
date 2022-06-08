import { styled } from "~/styles";

export const HighlightInfo = styled("div", {
  color: "$hiContrast",
  fontWeight: "$bold",
  fontSize: "$2",
  border: "none",
  position: "relative",
  pd: "$2 $4",
  display: "inline-block",
  mb: "$3",
  mr: "$3",
  textTransform: "uppercase",

  "&::before": {
    content: "",
    position: "absolute",
    inset: "0",
    borderRadius: "0.5rem",
    padding: "0.1rem",
    background: "linear-gradient(120deg, #FC466B 2.39%, #3F5EFB 87.83%)",
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
  },
});
