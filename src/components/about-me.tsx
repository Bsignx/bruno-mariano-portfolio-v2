import { motion } from 'framer-motion';

import type { Portfolio } from '../types';
import { styled } from '../styles/stitches.config';
import { SectionTitle } from './section-title';
import { Paragraph } from './typography';
import { HighlightInfo } from './highlight-info';
import { animateOnScrollVariants, useAnimateOnScroll } from '../helpers';

const Container = styled(motion.section, {
  maxWidth: '40.625rem',
  margin: '$24 auto',
  zIndex: '1',

  '@tabletUp': {
    margin: '$40 auto',
  },
});

const SkillsContainer = styled('div', {
  mt: '$8',
});

type AboutMeProps = {
  portfolio: Portfolio;
};

export const AboutMe = ({
  portfolio: { aboutTitle, aboutDescription, aboutTechName },
}: AboutMeProps) => {
  const { controls, ref } = useAnimateOnScroll();

  return (
    <Container
      id="about-me"
      variants={animateOnScrollVariants}
      animate={controls}
      initial="hidden"
      custom={{
        delay: 1,
      }}
      ref={ref}
    >
      <SectionTitle>
        <SectionTitle.HighlightTitleNumber>
          01.
        </SectionTitle.HighlightTitleNumber>{' '}
        {aboutTitle}
      </SectionTitle>
      <Paragraph
        css={{
          mt: '$6',
          textAlign: 'justify',
        }}
      >
        {aboutDescription}
      </Paragraph>
      <SkillsContainer>
        {aboutTechName.map((skill) => (
          <HighlightInfo key={skill}>{skill}</HighlightInfo>
        ))}
      </SkillsContainer>
    </Container>
  );
};
