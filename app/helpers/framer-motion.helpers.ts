import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const svgVariants = {
  hidden: {
    rotate: -90,
  },
  visible: {
    rotate: 0,
    transition: {
      duration: 1,
    },
  },
};

export const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const animateOpacityVariants = {
  visible: (custom = { delay: 0, duration: 1 }) => ({
    opacity: 1,
    transition: {
      duration: custom.duration,
      delay: custom.delay,
      ease: "easeIn",
    },
  }),
  hidden: { opacity: 0 },
};

export const animateOnScrollVariants = {
  visible: (custom = { delay: 0 }) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: custom.delay },
  }),
  hidden: { opacity: 0, y: -20 },
};

export const useAnimateOnScroll = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return { ref, controls };
};
