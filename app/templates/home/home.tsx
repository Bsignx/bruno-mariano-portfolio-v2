import { Container, Menu } from "~/components";
import { styled } from "~/styles";

const GlassmorphismBase = styled("div", {
  minHeight: "100vh",
  backdropFilter: "blur(1.875rem)",

  "@tabletUp": {
    backdropFilter: "blur(6.25rem)",
  },
});

export const HomeTemplate = () => {
  return (
    <GlassmorphismBase>
      <Container>
        <Menu />
      </Container>
    </GlassmorphismBase>
  );
};
