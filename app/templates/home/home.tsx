import { Container, Hero, Menu } from "~/components";
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
    <GlassmorphismBase>
      <Container>
        <Menu />
        <main>
          <Hero portfolio={portfolio} />
        </main>
      </Container>
    </GlassmorphismBase>
  );
};
