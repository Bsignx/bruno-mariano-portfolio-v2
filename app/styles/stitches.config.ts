import {
  gray,
  grayDark,
  blackA,
  indigo,
  whiteA,
  indigoA,
  indigoDark,
  indigoDarkA,
  cyan,
  cyanDark,
  slate,
  slateDark,
  green,
  greenDark,
  red,
  redDark,
  yellow,
  yellowDark,
} from "@radix-ui/colors";
import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

export type { VariantProps } from "@stitches/react";

const colorsTokens = {
  black: "$black12",
  white: "$white12",

  // Brand Solid
  brand1: "$cyan1",
  brand2: "$cyan2",
  brand3: "$cyan3",
  brand4: "$cyan4",
  brand5: "$cyan5",
  brand6: "$cyan6",
  brand7: "$cyan7",
  brand8: "$cyan8",
  brand9: "$cyan9",
  brand10: "$cyan10",
  brand11: "$cyan11",
  brand12: "$cyan12",

  // Brand Alpha
  brandA1: "$cyanA1",
  brandA2: "$cyanA2",
  brandA3: "$cyanA3",
  brandA4: "$cyanA4",
  brandA5: "$cyanA5",
  brandA6: "$cyanA6",
  brandA7: "$cyanA7",
  brandA8: "$cyanA8",
  brandA9: "$cyanA9",
  brandA10: "$cyanA10",
  brandA11: "$cyanA11",
  brandA12: "$cyanA12",

  // Background Solid
  background1: "$slate12",
  background2: "$slate11",
  background3: "$slate10",
  background4: "$slate9",
  background5: "$slate8",
  background6: "$slate7",
  background7: "$slate6",
  background8: "$slate5",
  background9: "$slate4",
  background10: "$slate3",
  background11: "$slate2",
  background12: "$slate1",

  // Text Solid
  text1: "$slate12",
  text2: "$slate11",
  text3: "$slate10",
  text4: "$slate9",
  text5: "$slate8",
  text6: "$slate7",
  text7: "$slate6",
  text8: "$slate5",
  text9: "$slate4",
  text10: "$slate3",
  text11: "$slate2",
  text12: "$slate1",

  // Gray Solid Renamed
  gray1: "$slate1",
  gray2: "$slate2",
  gray3: "$slate3",
  gray4: "$slate4",
  gray5: "$slate5",
  gray6: "$slate6",
  gray7: "$slate7",
  gray8: "$slate8",
  gray9: "$slate9",
  gray10: "$slate10",
  gray11: "$slate11",
  gray12: "$slate12",

  // Semantic

  brand: "#05a2c2",
  heading: "$brand11",
  text: "$brand12",
  textHover: "$brand11",
  textInvert: "$brand1",

  buttonText: "$brand11",
  buttonNormal: "$brand4",
  buttonHover: "$brand5",
  buttonFocus: "$brand6",

  hiContrast: "$slate12",
  loContrast: "$slate1",
  canvas: "hsl(0 0% 15%)",
  panel: "$slate3",
  transparentPanel: "hsl(0 100% 100% / 97%)",
  shadowLight: "hsl(206 22% 7% / 35%)",
  shadowDark: "hsl(206 22% 7% / 20%)",

  success1: "$green9",
  success2: "$green10",
  valid1: "$green9",
  valid2: "$green10",
  error1: "$red9",
  error2: "$red10",
  bug1: "$red9",
  bug2: "$red10",
  warning1: "$yellow9",
  warning2: "$yellow10",
  pending1: "$yellow9",
  pending2: "$yellow10",
};

const colorsTokensLightTheme = {
  textAbsolute: "$slate12",
  anchor: "$brand9",
  anchorHover: "$brand10",
  focusOutline: "$cyanA10",
  background: "#F0F3FB",
  backgroundInvert: "$brand11",
  backgroundSection: "$brand4",
};

const colorsTokensDarkTheme = {
  textAbsolute: "$slate1",
  anchor: "$brand10",
  anchorHover: "$brand11",
  focusOutline: "$cyanA10",
  background: "#0F1413",
  backgroundInvert: "$brand12",
  backgroundSection: "$brand2",
};

const spaceTokens = {
  0: "0",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  42: "10.5rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem",
};

const sizesTokens = {
  ...spaceTokens,
  min: "min-content",
  max: "max-content",
  full: "100%",
};

const radiiTokens = {
  0: "0",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  round: "50%",
  full: "9999px",
  pill: "9999px",
};

const zIndicesTokens = {
  1: "100",
  2: "200",
  3: "300",
  4: "400",
  5: "500",
  hide: -1,
  max: "999",
  auto: "auto",
  base: "0",
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
  "0": "0.25rem",
  "1": "8px",
  "2": "0.75rem",
  "3": "1rem",
  "4": "1.25rem",
  "5": "1.5rem",
  "6": "2rem",
  "7": "2.5rem",
  "8": "3rem",
  "9": "3.5rem",
  "10": "4rem",
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
  1: ".25rem",
  2: ".5rem",
  3: ".75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",

  normal: "normal",
  none: 1,
  shorter: 1.25,
  short: 1.375,
  base: 1.5,
  tall: 1.625,
  taller: "2",
};

const letterSpacingsTokens = {
  tighter: "-0.05rem",
  tight: "-0.025rem",
  normal: "0",
  wide: "0.025rem",
  wider: "0.05rem",
  widest: "0.1rem",
};

const mediaTokens = {
  tabletUp: "(min-width: 768px)",
  desktopUp: "(min-width: 1024px)",
  largeDesktopUp: "(min-width: 1680px)",
};

const utilsFunctions = {
  pd: (value: Stitches.PropertyValue<"padding">) => ({
    padding: value,
  }),
  pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
    paddingTop: value,
  }),
  pr: (value: Stitches.PropertyValue<"paddingRight">) => ({
    paddingRight: value,
  }),
  pb: (value: Stitches.PropertyValue<"paddingBottom">) => ({
    paddingBottom: value,
  }),
  pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
    paddingLeft: value,
  }),
  px: (value: Stitches.PropertyValue<"paddingLeft">) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: Stitches.PropertyValue<"paddingTop">) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  m: (value: Stitches.PropertyValue<"margin">) => ({
    margin: value,
  }),
  mt: (value: Stitches.PropertyValue<"marginTop">) => ({
    marginTop: value,
  }),
  mr: (value: Stitches.PropertyValue<"marginRight">) => ({
    marginRight: value,
  }),
  mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
    marginBottom: value,
  }),
  ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
    marginLeft: value,
  }),
  mx: (value: Stitches.PropertyValue<"marginLeft">) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: Stitches.PropertyValue<"marginTop">) => ({
    marginTop: value,
    marginBottom: value,
  }),

  ta: (value: Stitches.PropertyValue<"textAlign">) => ({ textAlign: value }),

  fd: (value: Stitches.PropertyValue<"flexDirection">) => ({
    flexDirection: value,
  }),
  fw: (value: Stitches.PropertyValue<"flexWrap">) => ({ flexWrap: value }),

  ai: (value: Stitches.PropertyValue<"alignItems">) => ({
    alignItems: value,
  }),
  ac: (value: Stitches.PropertyValue<"alignContent">) => ({
    alignContent: value,
  }),
  jc: (value: Stitches.PropertyValue<"justifyContent">) => ({
    justifyContent: value,
  }),
  as: (value: Stitches.PropertyValue<"alignSelf">) => ({ alignSelf: value }),
  fg: (value: Stitches.PropertyValue<"flexGrow">) => ({ flexGrow: value }),
  fs: (value: Stitches.PropertyValue<"flexShrink">) => ({
    flexShrink: value,
  }),
  fb: (value: Stitches.PropertyValue<"flexBasis">) => ({ flexBasis: value }),

  bc: (value: Stitches.PropertyValue<"backgroundColor">) => ({
    backgroundColor: value,
  }),

  br: (value: Stitches.PropertyValue<"borderRadius">) => ({
    borderRadius: value,
  }),
  btrr: (value: Stitches.PropertyValue<"borderTopRightRadius">) => ({
    borderTopRightRadius: value,
  }),
  bbrr: (value: Stitches.PropertyValue<"borderBottomRightRadius">) => ({
    borderBottomRightRadius: value,
  }),
  bblr: (value: Stitches.PropertyValue<"borderBottomLeftRadius">) => ({
    borderBottomLeftRadius: value,
  }),
  btlr: (value: Stitches.PropertyValue<"borderTopLeftRadius">) => ({
    borderTopLeftRadius: value,
  }),

  bs: (value: Stitches.PropertyValue<"boxShadow">) => ({ boxShadow: value }),

  lh: (value: Stitches.PropertyValue<"lineHeight">) => ({
    lineHeight: value,
  }),

  ox: (value: Stitches.PropertyValue<"overflowX">) => ({ overflowX: value }),
  oy: (value: Stitches.PropertyValue<"overflowY">) => ({ overflowY: value }),

  pe: (value: Stitches.PropertyValue<"pointerEvents">) => ({
    pointerEvents: value,
  }),
  us: (value: Stitches.PropertyValue<"userSelect">) => ({
    WebkitUserSelect: value,
    userSelect: value,
  }),

  userSelect: (value: Stitches.PropertyValue<"userSelect">) => ({
    WebkitUserSelect: value,
    userSelect: value,
  }),

  size: (value: Stitches.PropertyValue<"width">) => ({
    width: value,
    height: value,
  }),

  appearance: (value: Stitches.PropertyValue<"appearance">) => ({
    WebkitAppearance: value,
    appearance: value,
  }),
  backgroundClip: (value: Stitches.PropertyValue<"backgroundClip">) => ({
    WebkitBackgroundClip: value,
    backgroundClip: value,
  }),
};

export const { createTheme, styled, globalCss, getCssText, config } =
  createStitches({
    theme: {
      colors: {
        ...gray,
        ...whiteA,
        ...indigo,
        ...indigoA,
        ...yellow,
        ...red,
        ...cyan,
        ...green,
        ...slate,
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

export const lightTheme = createTheme("light");

export const darkTheme = createTheme("dark", {
  colors: {
    ...grayDark,
    ...blackA,
    ...indigoDark,
    ...indigoDarkA,
    ...cyanDark,
    ...slateDark,
    ...greenDark,
    ...redDark,
    ...yellowDark,
    ...colorsTokensDarkTheme,
  },
});

globalCss({
  body: {
    color: "$text",
    backgroundColor: "$background",
    padding: "0",
    margin: "0",
    overflowX: "hidden",
    boxSizing: "border-box",
    fontFamily: "$fontDefault",
    borderColor: "$brand",
    borderStyle: "solid",
    borderWidth: "0 5px 0 5px",
    fontSize: "$0",
    lineHeight: "$taller",
    "@tablet": {
      fontSize: "$1",
    },
    "@desktop": {
      fontSize: "$2",
    },
  },
  h1: { m: "$0", lineHeight: "$taller", fontSize: "2rem" },
  h2: { m: "$0", lineHeight: "$taller", fontSize: "1.75rem" },
  h3: { m: "$0", lineHeight: "$taller", fontSize: "1.5rem" },
  h4: { m: "$0", lineHeight: "$taller", fontSize: "1.2rem" },
  h5: { m: "$0", lineHeight: "$taller", fontSize: "1.1rem" },
  h6: { m: "$0", lineHeight: "$taller", fontSize: "1rem" },
  p: {
    fontFamily: "$fontText",
    color: "$text",
  },
  a: {
    textDecoration: "none",
    // color should be defined in Anchor/Link
  },
  hr: {
    display: "block",
    height: "1px",
    border: "0",
    backgroundColor: "$background10",
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  button: { border: "$none" },
  img: { userSelect: "none" },
  svg: { display: "block" },
  "pre, code": {
    margin: 0,
    fontFamily: "$fontMono",
  },
})();
