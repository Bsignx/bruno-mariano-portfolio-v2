import type { ReactNode } from "react";

import { styled } from "~/styles";

const Title = styled("h1", {
  color: "$hiContrast",
  fontSize: "$6",
  fontWeight: "$semibold",
  lineHeight: "100%",
});

type SectionTitleProps = {
  children: ReactNode;
};

export const SectionTitle = ({ children }: SectionTitleProps) => (
  <Title>{children}</Title>
);

const HighlightTitleNumber = styled("span", {
  color: "highlight",
  fontSize: "$5",
});

SectionTitle.HighlightTitleNumber = HighlightTitleNumber;
