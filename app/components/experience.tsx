import { motion } from "framer-motion";
import { useState } from "react";

import {
  animateOnScrollVariants,
  animateOpacityVariants,
  useAnimateOnScroll,
} from "~/helpers";
import { styled } from "~/styles";
import type { Portfolio } from "~/types";
import { SectionTitle } from "./section-title";
import { Heading3, Paragraph } from "./typography";

const Container = styled(motion.section, {
  maxWidth: "500px",
  margin: "0 auto $24",

  "@tabletUp": {
    margin: "0 auto $40",
  },
});

const ExperiencesContainer = styled("div", {
  display: "flex",
  marginTop: "$8",
  flexDirection: "column",
  alignItems: "center",

  "@tabletUp": {
    flexDirection: "row",
    alignItems: "initial",
  },
});

const ExperienceContainer = styled(motion.article, {});

const ButtonsContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mb: "$6",

  "@tabletUp": {
    mr: "$6",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "initial",
    mb: "0",
  },
});

const JobButton = styled("button", {
  background: "transparent",
  border: "none",
  color: "$hiContrast",
  fontWeight: "$medium",
  fontSize: "$3",
  cursor: "pointer",
  pd: "0 $3",
  position: "relative",
  whiteSpace: "nowrap",

  "&:hover": {
    filter: "opacity(0.8)",
  },

  "@tabletUp": {
    pd: "$1 $3",
    "& + button": {
      marginTop: "$1",
    },
  },
});

const HighlightMark = styled("span", {
  display: "none",
  position: "absolute",
  background: "$highlight",
  borderRadius: "0.25rem",
  width: "calc(100% - 1.5rem)",
  height: "0.125rem",
  top: "1.5rem",
  left: "0.75rem",

  "@tabletUp": {
    width: "0.125rem",
    height: "$5",
    top: "0.0625rem",
    left: "0",
  },

  variants: {
    active: {
      true: {
        display: "inline-block",
      },
    },
  },
});

const HighlightText = styled("span", {
  fontSize: "$3",
  fontWeight: "$regular",

  background: "$highlight",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
});

const PeriodWorked = styled("p", {
  fontSize: "$2",
  color: "$loContrast",
  mt: "$1",
  mb: "$4",
});

const JobDescriptionCotainer = styled("div", {
  mt: "$4",
  color: "$loContrast",
  display: "flex",
});

type ExperienceProps = {
  portfolio: Portfolio;
};

export const Experience = ({
  portfolio: { experienceTitle, experienceJob },
}: ExperienceProps) => {
  const [activeExperienceIndex, setActiveExperienceIndex] = useState(0);

  const { controls, ref } = useAnimateOnScroll();

  return (
    <Container
      id="experience"
      variants={animateOnScrollVariants}
      animate={controls}
      initial="hidden"
      ref={ref}
    >
      <SectionTitle>
        <SectionTitle.HighlightTitleNumber>
          02.
        </SectionTitle.HighlightTitleNumber>{" "}
        {experienceTitle}
      </SectionTitle>

      <ExperiencesContainer>
        <ButtonsContainer>
          {experienceJob.map(({ id, companyName }, index) => (
            <JobButton key={id} onClick={() => setActiveExperienceIndex(index)}>
              <HighlightMark
                aria-hidden={index !== activeExperienceIndex}
                aria-label="activated content"
                active={index === activeExperienceIndex}
              />
              {companyName}
            </JobButton>
          ))}
        </ButtonsContainer>
        {experienceJob.map(
          ({ jobTitle, companyName, jobDescription, periodWorked }, index) =>
            index === activeExperienceIndex && (
              <ExperienceContainer
                key={jobTitle + companyName}
                variants={animateOpacityVariants}
                initial="hidden"
                animate="visible"
              >
                <Heading3>
                  {jobTitle} - <HighlightText>{companyName}</HighlightText>
                </Heading3>

                <PeriodWorked>{periodWorked}</PeriodWorked>

                {jobDescription.map((description, index) => (
                  <JobDescriptionCotainer
                    key={`${companyName}-${jobTitle}-${index}`}
                  >
                    <Paragraph
                      css={{
                        textJustify: "inter-word",
                        textAlign: "justify",
                      }}
                    >
                      {description}
                    </Paragraph>
                  </JobDescriptionCotainer>
                ))}
              </ExperienceContainer>
            )
        )}
      </ExperiencesContainer>
    </Container>
  );
};
