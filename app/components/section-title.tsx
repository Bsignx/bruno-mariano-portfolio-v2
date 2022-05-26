import type { ReactNode } from "react";

import { styled } from "~/styles";

const Title = styled("h2", {
  color: "$hiContrast",
  fontSize: "$5",
  fontWeight: "$semibold",
  lineHeight: "100%",

  "@tabletUp": {
    fontSize: "$6",
  },
});

type SectionTitleProps = {
  children: ReactNode;
};

export const SectionTitle = ({ children }: SectionTitleProps) => (
  <Title>{children}</Title>
);

const HighlightTitleNumber = styled("span", {
  fontSize: "$5",
  background: "$highlight",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
});

SectionTitle.HighlightTitleNumber = HighlightTitleNumber;
