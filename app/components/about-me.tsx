import type { Portfolio } from "~/types";
import { styled } from "~/styles";
import { SectionTitle } from "./section-title";
import { Paragraph } from "./typography";

const Container = styled("section", {
  maxWidth: "40.625rem",
  margin: "$24 auto",
});

const SkillsContainer = styled("div", {
  mt: "$6",
});

const Skill = styled("div", {
  color: "$hiContrast",
  fontWeight: "$bold",
  fontSize: "$2",
  border: "none",
  position: "relative",
  pd: "$2 $6",
  display: "inline-block",
  mb: "$3",
  mr: "$3",

  "&::before": {
    content: "",
    position: "absolute",
    inset: "0",
    borderRadius: "0.5rem",
    padding: "0.125rem",
    background: "linear-gradient(120deg, #FC466B 2.39%, #3F5EFB 87.83%)",
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
  },
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
        <Skill key={skill}>{skill}</Skill>
      ))}
    </SkillsContainer>
  </Container>
);
