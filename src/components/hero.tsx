import { motion } from 'framer-motion';
import {
  AiFillGithub as GithubIcon,
  AiFillLinkedin as LinkedinIcon,
} from 'react-icons/ai';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { animateOnScrollVariants, useAnimateOnScroll } from '../helpers';
import { styled, theme } from '../styles/stitches.config';
import type { Portfolio } from '../types';
import { Cta } from './cta';
import AnimatedAvatar from './animated-avatar';

const Container = styled(motion.section, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '$20',
  zIndex: 1,

  '@tabletUp': {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const InfoContainer = styled('div', {});

const Title = styled('h1', {
  color: '$hiContrast',
  fontSize: '$7',
  fontWeight: '$semibold',
  lineHeight: '100%',

  span: {
    background: '$highlight',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
    fontSize: '4rem',
  },

  '@tabletUp': {
    fontSize: '$8',
  },

  '@desktopUp': {
    fontSize: '$10',

    span: {
      fontSize: '4.5rem',
    },
  },
});

const Subtitle = styled('h2', {
  color: '$hiContrast',
  fontSize: '$5',
  fontWeight: '$medium',
  marginTop: '$4',

  '@tabletUp': {
    fontSize: '$5',
    marginTop: '$2',
  },

  '@desktopUp': {
    fontSize: '$6',
  },
});

const Description = styled('p', {
  color: '$hiContrast',
  fontSize: '$3',
  fontWeight: '$regular',
  marginTop: '$4',
  marginBottom: '$6',
});

const CallToActionContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  svg: {
    marginLeft: '$4',
  },
});

const SocialLink = styled('a', {
  '&:hover': {
    filter: 'opacity(0.8)',
  },
});

const ThreeCanvas = styled(Canvas, {
  display: 'none',
  filter:
    'contrast(1.1) drop-shadow(-1px -1px 2px #3F5EFB) drop-shadow(1px 1px 2px #FC466B)',

  '@tabletUp': {
    display: 'block',
  },

  '> div': {
    width: '110% !important',
    height: '110% !important',
  },
});

type HeroProps = {
  portfolio: Portfolio;
};

export const Hero = ({
  portfolio: {
    heroTitle,
    heroButtonName,
    heroDescription,
    heroResumeAttachment,
    heroSubtitle,
  },
}: HeroProps) => {
  const { controls, ref } = useAnimateOnScroll();

  return (
    <Container
      id="hero"
      variants={animateOnScrollVariants}
      animate={controls}
      initial="hidden"
      custom={{
        delay: 0.5,
      }}
      ref={ref}
    >
      <InfoContainer>
        <Title>
          {heroTitle}
          <span>.</span>
        </Title>
        <Subtitle>{heroSubtitle}</Subtitle>
        <Description>{heroDescription}</Description>
        <CallToActionContainer>
          <Cta
            href={heroResumeAttachment.url}
            target="_blank"
            rel="noopener noreferrer"
            title={heroButtonName}
          >
            {heroButtonName}
          </Cta>
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

      <ThreeCanvas
        camera={{ position: [2, 0, 12.25], fov: 15 }}
        style={{
          width: '40%',
          height: '60vh',
        }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <AnimatedAvatar position={[0.025, -0.9, 0]} />
        </Suspense>
        <OrbitControls />
      </ThreeCanvas>
    </Container>
  );
};
