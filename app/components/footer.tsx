import type { Portfolio } from "~/types";
import { Paragraph } from "./typography";

type FooterProps = {
  portfolio: Portfolio;
};

export const Footer = ({ portfolio: { footerTitle } }: FooterProps) => (
  <Paragraph
    css={{
      textAlign: "center",
      mb: "$8",
      fontSize: "$2",
    }}
  >
    {footerTitle}
  </Paragraph>
);
