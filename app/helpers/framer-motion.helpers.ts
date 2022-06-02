import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const animateOnScrollVariant = {
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
