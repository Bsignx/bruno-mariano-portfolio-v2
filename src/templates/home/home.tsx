import { motion } from 'framer-motion';

import { AboutMe } from '../../components/about-me';
import { Contact } from '../../components/contact';
import { Container } from '../../components/container';
import { Experience } from '../../components/experience';
import { Footer } from '../../components/footer';
import { Hero } from '../../components/hero';
import { Menu } from '../../components/menu';
import { Projects } from '../../components/projects';
import { animateOnScrollVariants, useAnimateOnScroll } from '../../helpers';
import {
  styled,
  traverseUpLeft,
  traverseUpRight,
} from '../../styles/stitches.config';
import type { Portfolio } from '../../types';

const FirstCircle = styled('div', {
  background: 'radial-gradient(closest-side,#FC466B,rgba(233, 168, 2, 0))',
  animation: `${traverseUpLeft} 10s ease-in-out infinite alternate`,
  zIndex: -1,

  mixBlendMode: 'multiply',
  position: 'absolute',
  width: '25rem',
  height: '25rem',
  borderRadius: '40rem',

  '@tabletUp': {
    width: '31.25rem',
    height: '31.25rem',
  },
});

const SecondCircle = styled('div', {
  background: 'radial-gradient(closest-side,#3F5EFB,rgba(233, 168, 2, 0))',
  animation: `${traverseUpRight} 12s ease-in-out infinite alternate`,
  zIndex: -1,

  mixBlendMode: 'multiply',
  position: 'absolute',
  width: '25rem',
  height: '25rem',
  borderRadius: '40rem',

  '@tabletUp': {
    width: '31.25rem',
    height: '31.25rem',
  },
});

const CirclesContainer = styled(motion.div, {
  position: 'absolute',
  top: '8rem',
  right: 0,
  left: 0,
  display: 'block',

  '@tabletUp': {
    display: 'none',
  },
});

const CircleContainer = styled('div', {
  position: 'absolute',
  top: 0,
  overflow: 'visible',
  opacity: 0.4,
  left: 0,

  '@tabletUp': {
    left: '6rem',
  },
});

type HomeTemplateProps = {
  portfolio: Portfolio;
};

export const HomeTemplate = ({ portfolio }: HomeTemplateProps) => {
  const { controls, ref } = useAnimateOnScroll();

  return (
    <>
      <Menu />
      <Container>
        <CirclesContainer
          variants={animateOnScrollVariants}
          animate={controls}
          initial="hidden"
          ref={ref}
        >
          <CircleContainer>
            <FirstCircle />
          </CircleContainer>

          <CircleContainer
            css={{
              top: '7rem',
              left: '2rem',
              '@tabletUp': {
                left: '12rem',
              },
            }}
          >
            <SecondCircle />
          </CircleContainer>
        </CirclesContainer>

        <Hero portfolio={portfolio} />

        <AboutMe portfolio={portfolio} />
        <Experience portfolio={portfolio} />
        <Projects portfolio={portfolio} />
        <Contact portfolio={portfolio} />
        <Footer portfolio={portfolio} />
      </Container>
    </>
  );
};
