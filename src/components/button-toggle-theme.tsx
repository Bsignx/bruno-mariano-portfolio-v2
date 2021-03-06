import { motion } from 'framer-motion';
import type { ButtonHTMLAttributes } from 'react';
import { useTheme } from 'next-themes';

import { pathVariants, svgVariants } from '../helpers';
import type { CSS } from '../styles/stitches.config';
import { styled } from '../styles/stitches.config';

const ButtonToggleThemeStyled = styled('button', {
  cursor: 'pointer',
  border: 'none',
  background: 'none',
  mt: '0.4rem',
  padding: '$2',
  '&:hover': {
    filter: 'opacity(0.8)',
  },
});

const MoonIcon = () => (
  <motion.svg
    variants={svgVariants}
    initial="hidden"
    animate="visible"
    aria-label="Toggle dark mode"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      variants={pathVariants}
      d="M11.01 3.05001C6.51 3.54001 3 7.36001 3 12C3 14.387 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21C16.63 21 20.45 17.5 20.95 13C21.04 12.21 20.17 11.58 19.41 12.05C18.5937 12.5711 17.6523 12.8631 16.6844 12.8957C15.7165 12.9282 14.7576 12.6999 13.9082 12.2348C13.0587 11.7697 12.3499 11.0848 11.8559 10.2519C11.3618 9.4189 11.1008 8.46846 11.1 7.50001C11.1 6.44001 11.41 5.44001 11.94 4.61001C12.39 3.94001 11.9 2.98001 11.01 3.05001V3.05001Z"
      fill="url(#paint0_linear_26_877)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_26_877"
        x1="3.68859"
        y1="3.04639"
        x2="21.7267"
        y2="13.9024"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FC466B" />
        <stop offset="1" stopColor="#3F5EFB" />
      </linearGradient>
    </defs>
  </motion.svg>
);

const SunIcon = () => (
  <motion.svg
    variants={svgVariants}
    initial="hidden"
    animate="visible"
    aria-label="Toggle light mode"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM2 13H4C4.55 13 5 12.55 5 12C5 11.45 4.55 11 4 11H2C1.45 11 1 11.45 1 12C1 12.55 1.45 13 2 13ZM20 13H22C22.55 13 23 12.55 23 12C23 11.45 22.55 11 22 11H20C19.45 11 19 11.45 19 12C19 12.55 19.45 13 20 13ZM11 2V4C11 4.55 11.45 5 12 5C12.55 5 13 4.55 13 4V2C13 1.45 12.55 1 12 1C11.45 1 11 1.45 11 2ZM11 20V22C11 22.55 11.45 23 12 23C12.55 23 13 22.55 13 22V20C13 19.45 12.55 19 12 19C11.45 19 11 19.45 11 20ZM5.99 4.58C5.89749 4.4873 5.7876 4.41375 5.66662 4.36357C5.54565 4.31339 5.41597 4.28756 5.285 4.28756C5.15403 4.28756 5.02435 4.31339 4.90338 4.36357C4.7824 4.41375 4.67251 4.4873 4.58 4.58C4.4873 4.67251 4.41375 4.7824 4.36357 4.90338C4.31339 5.02435 4.28756 5.15403 4.28756 5.285C4.28756 5.41597 4.31339 5.54565 4.36357 5.66662C4.41375 5.7876 4.4873 5.89749 4.58 5.99L5.64 7.05C6.03 7.44 6.67 7.44 7.05 7.05C7.43 6.66 7.44 6.02 7.05 5.64L5.99 4.58ZM18.36 16.95C18.2675 16.8573 18.1576 16.7837 18.0366 16.7336C17.9157 16.6834 17.786 16.6576 17.655 16.6576C17.524 16.6576 17.3944 16.6834 17.2734 16.7336C17.1524 16.7837 17.0425 16.8573 16.95 16.95C16.8573 17.0425 16.7837 17.1524 16.7336 17.2734C16.6834 17.3944 16.6576 17.524 16.6576 17.655C16.6576 17.786 16.6834 17.9157 16.7336 18.0366C16.7837 18.1576 16.8573 18.2675 16.95 18.36L18.01 19.42C18.4 19.81 19.04 19.81 19.42 19.42C19.5127 19.3275 19.5863 19.2176 19.6364 19.0966C19.6866 18.9757 19.7124 18.846 19.7124 18.715C19.7124 18.584 19.6866 18.4543 19.6364 18.3334C19.5863 18.2124 19.5127 18.1025 19.42 18.01L18.36 16.95ZM19.42 5.99C19.5127 5.89749 19.5863 5.7876 19.6364 5.66662C19.6866 5.54565 19.7124 5.41597 19.7124 5.285C19.7124 5.15403 19.6866 5.02435 19.6364 4.90338C19.5863 4.7824 19.5127 4.67251 19.42 4.58C19.3275 4.4873 19.2176 4.41375 19.0966 4.36357C18.9757 4.31339 18.846 4.28756 18.715 4.28756C18.584 4.28756 18.4543 4.31339 18.3334 4.36357C18.2124 4.41375 18.1025 4.4873 18.01 4.58L16.95 5.64C16.56 6.03 16.56 6.67 16.95 7.05C17.34 7.43 17.98 7.44 18.36 7.05L19.42 5.99ZM7.05 18.36C7.1427 18.2675 7.21625 18.1576 7.26643 18.0366C7.31661 17.9157 7.34244 17.786 7.34244 17.655C7.34244 17.524 7.31661 17.3944 7.26643 17.2734C7.21625 17.1524 7.1427 17.0425 7.05 16.95C6.95749 16.8573 6.8476 16.7837 6.72662 16.7336C6.60565 16.6834 6.47597 16.6576 6.345 16.6576C6.21403 16.6576 6.08435 16.6834 5.96338 16.7336C5.8424 16.7837 5.73251 16.8573 5.64 16.95L4.58 18.01C4.19 18.4 4.19 19.04 4.58 19.42C4.97 19.8 5.61 19.81 5.99 19.42L7.05 18.36Z"
      fill="url(#paint0_linear_9_48)"
      variants={pathVariants}
    />
    <defs>
      <linearGradient
        id="paint0_linear_9_48"
        x1="1.84365"
        y1="1.00001"
        x2="23.9456"
        y2="14.2997"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FC466B" />
        <stop offset="1" stopColor="#3F5EFB" />
      </linearGradient>
    </defs>
  </motion.svg>
);

type ButtonToggleThemeProps = {
  css?: CSS;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonToggleTheme = ({ css, ...rest }: ButtonToggleThemeProps) => {
  const { theme, setTheme } = useTheme();
  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ButtonToggleThemeStyled
      type="button"
      onClick={handleChangeTheme}
      css={css}
      {...rest}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </ButtonToggleThemeStyled>
  );
};
