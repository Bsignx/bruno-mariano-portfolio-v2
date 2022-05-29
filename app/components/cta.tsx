import { styled } from "~/styles";

export const Cta = styled("a", {
  fontSize: "$3",
  pd: "$4 $8",
  color: "$hiContrast",
  backgroundColor: "transparent",
  fontWeight: "$bold",
  cursor: "pointer",
  border: "none",
  position: "relative",
  textDecoration: "none",

  "&::before": {
    content: "",
    position: "absolute",
    inset: "0",
    borderRadius: "1.5625rem",
    padding: "0.1rem",
    background: "linear-gradient(120deg, #FC466B 2.39%, #3F5EFB 87.83%)",
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
  },

  "&:hover": {
    filter: "opacity(0.8)",
  },
});
