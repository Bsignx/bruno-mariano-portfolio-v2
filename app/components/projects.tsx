import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import {
  animateOnScrollVariants,
  animateOpacityVariants,
  useAnimateOnScroll,
} from "~/helpers";
import { styled } from "~/styles";
import type { Portfolio } from "~/types";
import { HighlightInfo } from "./highlight-info";
import { FolderIcon, GithubIcon, LinkIcon } from "./icons";
import { SectionTitle } from "./section-title";
import { Heading3, Paragraph } from "./typography";

const Container = styled(motion.section, {
  mb: "$24",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "@tabletUp": {
    mb: "$40",
  },
});

const ProjectsContainer = styled("div", {
  marginTop: "$8",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr))",
  gridGap: "$6",
  mb: "$8",
});

const ProjectContainer = styled(motion.article, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  background: "$background2",
  boxShadow: "0 0.25rem 0.25rem rgba(0, 0, 0, 0.25)",
  pd: "$6",
  borderRadius: "0.5rem",
  height: "18.75rem",

  "@tabletUp": {
    height: "16.75rem",
  },
});

const IconsContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const ExternarLinksContainer = styled("div", {
  "a:hover": {
    filter: "opacity(0.8)",
  },

  "svg:last-child": {
    ml: "$4",
  },
});

const TechsContainer = styled("div", {
  marginTop: "$6",
});

const ShowMoreButton = styled("button", {
  fontSize: "$3",
  pd: "$4 $8",
  color: "$white",
  background: "$highlight",
  fontWeight: "$bold",
  cursor: "pointer",
  border: "none",
  borderRadius: "1.5625rem",

  "&:disabled": {
    opacity: "0.5",
    pointerEvents: "none",
  },

  "&:hover": {
    filter: "opacity(0.8)",
  },
});

type ProjectsProps = {
  portfolio: Portfolio;
};

export const Projects = ({
  portfolio: { projectsTitle, projectsButtonName, project },
}: ProjectsProps) => {
  const [projects] = useState(project);
  const [itemsToShow, setItemsToShow] = useState(6);
  const [expanded, setExpanded] = useState(false);

  const { controls, ref } = useAnimateOnScroll();

  const handleShowMore = () => {
    setItemsToShow(projects.length);
    setExpanded(true);
  };

  const handleShowLess = () => {
    setItemsToShow(6);
    setExpanded(false);
  };

  return (
    <Container
      id="projects"
      variants={animateOnScrollVariants}
      animate={controls}
      initial="hidden"
      ref={ref}
    >
      <SectionTitle>
        <SectionTitle.HighlightTitleNumber>
          03.
        </SectionTitle.HighlightTitleNumber>{" "}
        {projectsTitle}
      </SectionTitle>
      <ProjectsContainer>
        <AnimatePresence>
          {projects
            .slice(0, itemsToShow)
            .map(
              ({
                id,
                description,
                repositoryUrl,
                websiteUrl,
                title,
                techUsedName,
              }) => (
                <ProjectContainer
                  key={id + title}
                  variants={animateOpacityVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <div>
                    <IconsContainer>
                      <FolderIcon aria-label="folder" />
                      <ExternarLinksContainer>
                        {repositoryUrl && (
                          <a
                            href={repositoryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <GithubIcon aria-label="github link" />
                          </a>
                        )}

                        {websiteUrl && (
                          <a
                            href={websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <LinkIcon aria-label="website link" />
                          </a>
                        )}
                      </ExternarLinksContainer>
                    </IconsContainer>
                    <Heading3
                      css={{
                        my: "$4",
                      }}
                    >
                      {title}
                    </Heading3>
                    <Paragraph
                      css={{
                        textJustify: "inter-word",
                        textAlign: "justify",
                      }}
                    >
                      {description}
                    </Paragraph>
                  </div>
                  <TechsContainer>
                    {techUsedName.map((tech) => (
                      <HighlightInfo
                        css={{
                          pd: "$2 $4",
                          fontSize: "$2",
                        }}
                        key={tech}
                      >
                        {tech}
                      </HighlightInfo>
                    ))}
                  </TechsContainer>
                </ProjectContainer>
              )
            )}
        </AnimatePresence>
      </ProjectsContainer>

      <ShowMoreButton onClick={expanded ? handleShowLess : handleShowMore}>
        {expanded ? "Show less" : "Show more"}
      </ShowMoreButton>
    </Container>
  );
};
