import {
  AiFillGithub as GithubIcon,
  AiFillLinkedin as LinkedinIcon,
} from "react-icons/ai";

import { styled, theme } from "~/styles";
import type { Portfolio } from "~/types";

const Container = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "@tabletUp": {
    flexDirection: "row",
    alignItems: "initial",
  },
});

const InfoContainer = styled("div", {
  marginTop: "$24",

  "@tabletUp": {
    marginTop: "$32",
  },
});

const Title = styled("h1", {
  color: "$hiContrast",
  fontSize: "$7",
  fontWeight: "$semibold",
  lineHeight: "100%",

  span: {
    background: "$highlight",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
    fontSize: "4rem",
  },

  "@tabletUp": {
    fontSize: "$8",
  },

  "@desktopUp": {
    fontSize: "$10",

    span: {
      fontSize: "4.5rem",
    },
  },
});

const Subtitle = styled("h2", {
  color: "$hiContrast",
  fontSize: "$5",
  fontWeight: "$medium",
  marginTop: "$4",

  "@tabletUp": {
    fontSize: "$5",
    marginTop: "$2",
  },

  "@desktopUp": {
    fontSize: "$6",
  },
});

const Description = styled("p", {
  color: "$hiContrast",
  fontSize: "$3",
  fontWeight: "$regular",
  marginTop: "$4",
  marginBottom: "$6",
});

const ResumeLink = styled("a", {
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

const CallToActionContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  svg: {
    marginLeft: "$4",
  },
});

const SocialLink = styled("a", {
  "&:hover": {
    filter: "opacity(0.8)",
  },
});

const HeroImage = styled("img", {
  marginTop: "$8",
  display: "none",
  marginLeft: "$6",
  alignSelf: "flex-start",

  "@tabletUp": {
    display: "block",
    width: "25rem",
  },

  "@desktopUp": {
    width: "28.125rem",
  },
});

type HeroProps = {
  portfolio: Portfolio;
};

export const Hero = ({
  portfolio: {
    heroImage,
    heroTitle,
    heroButtonName,
    heroDescription,
    heroResumeAttachment,
    heroSubtitle,
  },
}: HeroProps) => {
  return (
    <Container>
      <InfoContainer>
        <Title>
          {heroTitle}
          <span>.</span>
        </Title>
        <Subtitle>{heroSubtitle}</Subtitle>
        <Description>{heroDescription}</Description>
        <CallToActionContainer>
          <ResumeLink
            href={heroResumeAttachment.url}
            target="_blank"
            rel="noopener noreferrer"
            title={heroButtonName}
          >
            {heroButtonName}
          </ResumeLink>
          <SocialLink
            href="https://github.com/Bsignx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon
              size={28}
              color={`${theme.colors.hiContrast}`}
              aria-label="see profile on github"
            />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/dev-bruno-mariano/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon
              size={28}
              color={`${theme.colors.hiContrast}`}
              aria-label="see profile on linkedin"
            />
          </SocialLink>
        </CallToActionContainer>
      </InfoContainer>
      <HeroImage src={heroImage.url} alt="3d illustration of bruno mariano" />
    </Container>
  );
};
