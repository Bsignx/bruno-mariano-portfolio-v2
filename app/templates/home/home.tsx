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
import { styled } from "~/styles";
import type { Portfolio } from "~/types";

const GlassmorphismBase = styled("div", {
  minHeight: "100vh",
  backdropFilter: "blur(1.875rem)",

  "@tabletUp": {
    backdropFilter: "blur(6.25rem)",
  },
});

type HomeTemplateProps = {
  portfolio: Portfolio;
};

export const HomeTemplate = ({ portfolio }: HomeTemplateProps) => {
  return (
    <>
      <Menu /> {/* fix */}
      <GlassmorphismBase>
        <Container>
          <main>
            <Hero portfolio={portfolio} />
            <AboutMe portfolio={portfolio} />
            <Experience portfolio={portfolio} />
            <Projects portfolio={portfolio} />
            <Contact portfolio={portfolio} />
            <Footer portfolio={portfolio} />
          </main>
        </Container>
      </GlassmorphismBase>
    </>
  );
};
