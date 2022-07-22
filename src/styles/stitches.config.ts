import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

export type { VariantProps } from '@stitches/react';

const colorsTokens = {
  black: '#0F1413',
  black2: '#1D2428',
  blackWithOpacity: 'rgba(15, 20, 19, 0.9)',
  white: '#F0F3FB',
  white2: '#EDF0FA',
  whiteWithOpacity: 'rgba(240, 243, 251, 0.9)',
  grayDark: '#DBD3D3',
  grayLight: '#3E4644',
  linear: 'linear-gradient(120deg, #FC466B 2.39%, #3F5EFB 87.83%)',
  blurDark: 'hsla(210deg, 30%, 8%, 0.70)',
  blurLight: 'rgba(0,0,0,0)',
};

const colorsTokensLightTheme = {
  hiContrast: '$black',
  loContrast: '$grayLight',
  highlight: '$linear',
  background: '$white',
  background2: '$white2',
  blurBackground: '$blurLight',
  blurBackground2: '$whiteWithOpacity',
};

const colorsTokensDarkTheme = {
  hiContrast: '$white',
  loContrast: '$grayDark',
  highlight: '$linear',
  background: '$black',
  background2: '$black2',
  blurBackground: '$blurDark',
  blurBackground2: '$blackWithOpacity',
};

const spaceTokens = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  42: '10.5rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
};

const sizesTokens = {
  ...spaceTokens,
  min: 'min-content',
  max: 'max-content',
  full: '100%',
};

const radiiTokens = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  round: '50%',
  full: '9999px',
  pill: '9999px',
};

const zIndicesTokens = {
  1: '100',
  2: '200',
  3: '300',
  4: '400',
  5: '500',
  hide: -1,
  max: '999',
  auto: 'auto',
  base: '0',
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
};

const fontsTokens = {
  fontDefault: `Mulish, Helvetica, Arial, -apple-system, system-ui, sans-serif`,
};

const fontSizesTokens = {
  '0': '0.25rem',
  '1': '8px',
  '2': '0.75rem',
  '3': '1rem',
  '4': '1.25rem',
  '5': '1.5rem',
  '6': '2rem',
  '7': '2.5rem',
  '8': '3rem',
  '9': '3.5rem',
  '10': '4rem',
};

const fontWeightsTokens = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

const lineHeightsTokens = {
  1: '.25rem',
  2: '.5rem',
  3: '.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',

  normal: 'normal',
  none: 1,
  shorter: 1.25,
  short: 1.375,
  base: 1.5,
  tall: 1.625,
  taller: '2',
};

const letterSpacingsTokens = {
  tighter: '-0.05rem',
  tight: '-0.025rem',
  normal: '0',
  wide: '0.025rem',
  wider: '0.05rem',
  widest: '0.1rem',
};

const mediaTokens = {
  tabletUp: '(min-width: 768px)',
  desktopUp: '(min-width: 1024px)',
  largeDesktopUp: '(min-width: 1680px)',
};

const utilsFunctions = {
  pd: (value: Stitches.PropertyValue<'padding'>) => ({
    padding: value,
  }),
  pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
    paddingTop: value,
  }),
  pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
    paddingRight: value,
  }),
  pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
    paddingBottom: value,
  }),
  pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value,
  }),
  px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  m: (value: Stitches.PropertyValue<'margin'>) => ({
    margin: value,
  }),
  mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
    marginTop: value,
  }),
  mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
    marginRight: value,
  }),
  mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
    marginBottom: value,
  }),
  ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
    marginLeft: value,
  }),
  mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: Stitches.PropertyValue<'marginTop'>) => ({
    marginTop: value,
    marginBottom: value,
  }),

  ta: (value: Stitches.PropertyValue<'textAlign'>) => ({ textAlign: value }),

  fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
    flexDirection: value,
  }),
  fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),

  ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
    alignItems: value,
  }),
  ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
    alignContent: value,
  }),
  jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
    justifyContent: value,
  }),
  as: (value: Stitches.PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
  fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
  fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({
    flexShrink: value,
  }),
  fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ flexBasis: value }),

  bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    backgroundColor: value,
  }),

  br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
    borderRadius: value,
  }),
  btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
    borderTopRightRadius: value,
  }),
  bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
    borderBottomRightRadius: value,
  }),
  bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
    borderBottomLeftRadius: value,
  }),
  btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
    borderTopLeftRadius: value,
  }),

  bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({ boxShadow: value }),

  lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({
    lineHeight: value,
  }),

  ox: (value: Stitches.PropertyValue<'overflowX'>) => ({ overflowX: value }),
  oy: (value: Stitches.PropertyValue<'overflowY'>) => ({ overflowY: value }),

  pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({
    pointerEvents: value,
  }),
  us: (value: Stitches.PropertyValue<'userSelect'>) => ({
    WebkitUserSelect: value,
    userSelect: value,
  }),

  userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
    WebkitUserSelect: value,
    userSelect: value,
  }),

  size: (value: Stitches.PropertyValue<'width'>) => ({
    width: value,
    height: value,
  }),

  appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
    WebkitAppearance: value,
    appearance: value,
  }),
  backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
    WebkitBackgroundClip: value,
    backgroundClip: value,
  }),
};

export const {
  createTheme,
  styled,
  globalCss,
  getCssText,
  config,
  theme,
  keyframes,
} = createStitches({
  theme: {
    colors: {
      ...colorsTokens,
      ...colorsTokensLightTheme,
    },
    space: {
      ...spaceTokens,
    },
    sizes: {
      ...sizesTokens,
    },
    radiiTokens: {
      ...radiiTokens,
    },
    zIndices: {
      ...zIndicesTokens,
    },
    fonts: {
      ...fontsTokens,
    },
    fontSizes: {
      ...fontSizesTokens,
    },
    fontWeights: {
      ...fontWeightsTokens,
    },
    lineHeights: {
      ...lineHeightsTokens,
    },
    letterSpacings: {
      ...letterSpacingsTokens,
    },
  },
  media: {
    ...mediaTokens,
  },
  utils: {
    ...utilsFunctions,
  },
});

export type CSS = Stitches.CSS<typeof config>;

export const lightTheme = createTheme('light');

export const darkTheme = createTheme('dark', {
  colors: {
    ...colorsTokensDarkTheme,
  },
});

export const traverseUpLeft = keyframes({
  '0%': {},
  '100%': { transform: 'translateY(-100px) translateX(-150px) rotate(180deg)' },
});

export const traverseUpRight = keyframes({
  '0%': {},
  '100%': { transform: 'translateY(-200px) translateX(150px) rotate(360deg)' },
});

globalCss({
  body: {
    color: '$text',
    backgroundColor: '$background',
    padding: '0',
    margin: '0',
    boxSizing: 'border-box',
    fontFamily: '$fontDefault',
    fontSize: '$3',
    webkitFontSmoothing: 'antialiased',
  },

  'p, h1, h2, h3, h4, h5': {
    margin: '0',
  },
})();
