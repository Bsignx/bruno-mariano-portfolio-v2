import {
  AboutMe,
  Contact,
  Container,
  Experience,
  Footer,
  Hero,
  Menu,
  Projects,
} from "~/components";
import { styled, traverseUpLeft, traverseUpRight } from "~/styles";
import type { Portfolio } from "~/types";

const FirstCircle = styled("div", {
  background: "radial-gradient(closest-side,#FC466B,rgba(233, 168, 2, 0))",
  animation: `${traverseUpLeft} 10s ease-in-out infinite alternate`,
  zIndex: -1,

  mixBlendMode: "multiply",
  position: "absolute",
  width: "25rem",
  height: "25rem",
  borderRadius: "40rem",

  "@tabletUp": {
    width: "31.25rem",
    height: "31.25rem",
  },
});

const SecondCircle = styled("div", {
  background: "radial-gradient(closest-side,#3F5EFB,rgba(233, 168, 2, 0))",
  animation: `${traverseUpRight} 12s ease-in-out infinite alternate`,
  zIndex: -1,

  mixBlendMode: "multiply",
  position: "absolute",
  width: "25rem",
  height: "25rem",
  borderRadius: "40rem",

  "@tabletUp": {
    width: "31.25rem",
    height: "31.25rem",
  },
});

const CirclesContainer = styled("div", {
  position: "absolute",
  top: "8rem",
  right: 0,
  left: 0,
});

const CircleContainer = styled("div", {
  position: "absolute",
  top: 0,
  overflow: "visible",
  opacity: 0.3,
  left: 0,

  "@tabletUp": {
    left: "6rem",
  },
});

type HomeTemplateProps = {
  portfolio: Portfolio;
};

export const HomeTemplate = ({ portfolio }: HomeTemplateProps) => {
  return (
    <Container>
      <CirclesContainer>
        <CircleContainer>
          <FirstCircle />
        </CircleContainer>

        <CircleContainer
          css={{
            top: "7rem",
            left: "6rem",
            "@tabletUp": {
              left: "16rem",
            },
          }}
        >
          <SecondCircle />
        </CircleContainer>
      </CirclesContainer>

      <Menu />
      <main>
        <Hero portfolio={portfolio} />
        <AboutMe portfolio={portfolio} />
        <Experience portfolio={portfolio} />
        <Projects portfolio={portfolio} />
        <Contact portfolio={portfolio} />
        <Footer portfolio={portfolio} />
      </main>
    </Container>
  );
};
