import { motion } from "framer-motion";

import { animateOnScrollVariants, useAnimateOnScroll } from "~/helpers";
import { styled } from "~/styles";
import type { Portfolio } from "~/types";
import { Cta } from "./cta";
import { SectionTitle } from "./section-title";
import { Paragraph } from "./typography";

const Container = styled(motion.section, {
  margin: "0 auto $24",
  textAlign: "center",

  "@tabletUp": {
    margin: "0 auto $40",
  },
});

type ContactProps = {
  portfolio: Portfolio;
};

export const Contact = ({
  portfolio: { contactButton, contactTitle, contactDescription, contactEmail },
}: ContactProps) => {
  const { controls, ref } = useAnimateOnScroll();

  return (
    <Container
      id="contact"
      variants={animateOnScrollVariants}
      animate={controls}
      initial="hidden"
      ref={ref}
    >
      <SectionTitle>
        <SectionTitle.HighlightTitleNumber>
          04.
        </SectionTitle.HighlightTitleNumber>{" "}
        {contactTitle}
      </SectionTitle>
      <Paragraph
        css={{
          maxWidth: "29.125rem",
          margin: "$8 auto $14",
        }}
      >
        {contactDescription}
      </Paragraph>
      <Cta
        href={`
          mailto:${contactEmail}?subject=Hi%20there!
      `}
      >
        {contactButton}
      </Cta>
    </Container>
  );
};
