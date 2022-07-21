import { motion } from 'framer-motion';

import { animateOnScrollVariants, useAnimateOnScroll } from '../helpers';
import type { Portfolio } from '../types';
import { Paragraph } from './typography';

type FooterProps = {
  portfolio: Portfolio;
};

export const Footer = ({ portfolio: { footerTitle } }: FooterProps) => {
  const { controls, ref } = useAnimateOnScroll();

  return (
    <Paragraph
      as={motion.p}
      variants={animateOnScrollVariants}
      animate={controls}
      initial="hidden"
      ref={ref}
      css={{
        textAlign: 'center',
        mb: '$8',
        fontSize: '$2',
      }}
    >
      {footerTitle}
    </Paragraph>
  );
};
