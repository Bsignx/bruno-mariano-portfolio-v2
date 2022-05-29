import { useState } from "react";
import { styled } from "~/styles";
import type { Portfolio } from "~/types";
import { HighlightInfo } from "./highlight-info";
import { FolderIcon, GithubIcon, LinkIcon } from "./icons";
import { SectionTitle } from "./section-title";
import { Heading3, Paragraph } from "./typography";

const Container = styled("section", {
  mb: "$24",
  maxWidth: "68.75rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const ProjectsContainer = styled("div", {
  marginTop: "$8",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr))",
  gridGap: "$6",
  mb: "$8",
});

const ProjectContainer = styled("article", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  background: "$background2",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  pd: "$6",
  borderRadius: "0.5rem",
  height: "16.75rem",
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

  const handleShowMore = () => {
    setItemsToShow(projects.length);
    setExpanded(true);
  };

  const handleShowLess = () => {
    setItemsToShow(6);
    setExpanded(false);
  };

  return (
    <Container>
      <SectionTitle>
        <SectionTitle.HighlightTitleNumber>
          03.
        </SectionTitle.HighlightTitleNumber>{" "}
        {projectsTitle}
      </SectionTitle>
      <ProjectsContainer>
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
              <ProjectContainer key={id}>
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
                  <Paragraph>{description}</Paragraph>
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
      </ProjectsContainer>

      <ShowMoreButton onClick={expanded ? handleShowLess : handleShowMore}>
        {expanded ? "Show less" : "Show more"}
      </ShowMoreButton>
    </Container>
  );
};
