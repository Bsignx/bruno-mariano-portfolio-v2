import { useState } from "react";
import {
  HiMenuAlt2 as OpenMenuIcon,
  HiOutlineX as CloseMenuICon,
} from "react-icons/hi";

import { styled, theme as styleTheme } from "~/styles";
import { useTheme, THEME } from "~/helpers";
import { ButtonToggleTheme } from "./button-toggle-theme";

const Container = styled("div", {
  display: "flex",
  pd: "$8 0 0 0",
  ai: "flex-end",
  justifyContent: "space-between",
});

const OpenMenuIconWrapper = styled("div", {
  color: "$hiContrast",
  cursor: "pointer",

  svg: {
    width: "$10",
    height: "$10",
  },
  "&:hover": {
    filter: "opacity(0.8)",
  },

  variants: {
    hide: {
      true: {
        display: "none",
      },
    },
  },
});

const Logo = styled("p", {
  color: "$hiContrast",
  fontSize: "$6",

  fontWeight: "$semibold",

  span: {
    color: "highlight",
    fontSize: "$8",
  },
  "@tabletUp": {
    paddingBottom: "0.25rem",
  },
});

const MenuNav = styled("nav", {
  display: "none",
});

const MenuLink = styled("a", {
  color: "$hiContrast",
  fontSize: "$3",
  textDecoration: "none",
  fontWeight: "medium",

  "&:hover": {
    filter: "opacity(0.8)",
  },
  "& + &": {
    marginLeft: "$6",
  },

  variants: {
    mobile: {
      true: {
        "& + &": {
          marginLeft: "0",
          marginTop: "$6",
        },
        fontSize: "$4",
        fontWeight: "$medium",
      },
    },
  },
});

const MobileMenuNav = styled("nav", {
  display: "flex",
  fd: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  zIndex: "$overlay",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  height: "100vh",
  overflow: "hidden",
  transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
  background: "$background",

  variants: {
    visible: {
      true: {
        opacity: 1,
        pointerEvents: "all",
        visibility: "visible",
      },
    },
    hide: {
      true: {
        opacity: 0,
        pointerEvents: "none",
        visibility: "hidden",
      },
    },
  },
});

const CloseMenuIconWrapper = styled("div", {
  color: "$hiContrast",
  cursor: "pointer",
  position: "absolute",
  top: 0,
  right: 0,
  margin: "$4",

  svg: {
    width: "$9",
    height: "$9",
  },
  "&:hover": {
    filter: "opacity(0.8)",
  },

  variants: {
    hide: {
      true: {
        display: "none",
      },
    },
  },
});

const MENU_ITEMS = [
  {
    name: "About-me",
    path: "#about-me",
  },
  {
    name: "Experience",
    path: "#experience",
  },
  {
    name: "Projects",
    path: "#projects",
  },
  {
    name: "Contact",
    path: "#contact",
  },
];

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container
      as="header"
      css={{
        zIndex: isOpen
          ? styleTheme.zIndices.overlay
          : `calc(${styleTheme.zIndices.overlay} - 1)`,
      }}
    >
      <OpenMenuIconWrapper
        onClick={() => setIsOpen(true)}
        hide={{
          "@initial": false,
          "@tabletUp": true,
        }}
      >
        <OpenMenuIcon aria-label="open menu" />
      </OpenMenuIconWrapper>

      <Logo>
        bm<span>.</span>
      </Logo>

      <MenuNav
        css={{
          "@tabletUp": {
            display: "flex",
            alignItems: "center",
            "& > :last-child": {
              marginLeft: "$4",
            },
          },
        }}
      >
        {MENU_ITEMS.map(({ name, path }) => (
          <MenuLink key={name} href={path}>
            {name}
          </MenuLink>
        ))}
        <ButtonToggleTheme />
      </MenuNav>

      <MobileMenuNav aria-hidden={!isOpen} visible={isOpen} hide={!isOpen}>
        <CloseMenuIconWrapper onClick={() => setIsOpen(false)}>
          <CloseMenuICon aria-label="close menu" />
        </CloseMenuIconWrapper>
        {MENU_ITEMS.map(({ name, path }) => (
          <MenuLink
            key={name}
            href={path}
            mobile
            css={{
              transform: isOpen ? "translateY(0)" : "translateY(3rem)",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {name}
          </MenuLink>
        ))}
      </MobileMenuNav>
    </Container>
  );
};
