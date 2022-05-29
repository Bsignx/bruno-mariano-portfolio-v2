import type { Portfolio } from "~/types";
import { styled } from "~/styles";
import { SectionTitle } from "./section-title";
import { Paragraph } from "./typography";
import { HighlightInfo } from "./highlight-info";

const Container = styled("section", {
  maxWidth: "40.625rem",
  margin: "$24 auto",
});

const SkillsContainer = styled("div", {
  mt: "$8",
});

type AboutMeProps = {
  portfolio: Portfolio;
};

export const AboutMe = ({
  portfolio: { aboutTitle, aboutDescription, aboutTechName },
}: AboutMeProps) => (
  <Container id="#about-me">
    <SectionTitle>
      <SectionTitle.HighlightTitleNumber>01.</SectionTitle.HighlightTitleNumber>{" "}
      {aboutTitle}
    </SectionTitle>
    <Paragraph
      css={{
        mt: "$6",
        textAlign: "justify",
      }}
    >
      {aboutDescription}
    </Paragraph>
    <SkillsContainer>
      {aboutTechName.map((skill) => (
        <HighlightInfo key={skill}>{skill}</HighlightInfo>
      ))}
    </SkillsContainer>
  </Container>
);
