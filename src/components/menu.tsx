import { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';
import {
  HiMenuAlt2 as OpenMenuIcon,
  HiOutlineX as CloseMenuICon,
} from 'react-icons/hi';

import { styled, theme as styleTheme } from '../styles/stitches.config';
import { ButtonToggleTheme } from './button-toggle-theme';
import { ToggleLanguage } from './toggle-language';
import { Box } from './box';

const MENU_ITEMS = [
  {
    name: 'About-me',
    path: 'about-me',
  },
  {
    name: 'Experience',
    path: 'experience',
  },
  {
    name: 'Projects',
    path: 'projects',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (element: string, offset = -100) => {
    scroller.scrollTo(element, {
      duration: 600,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset,
    });

    isOpen && setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isOpen]);

  return (
    <Wrapper
      as="header"
      css={{
        zIndex: isOpen
          ? styleTheme.zIndices.overlay
          : `${styleTheme.zIndices.sticky}`,
        backdropFilter: !isOpen ? 'blur(0.5rem)' : 'initial',
      }}
    >
      <Container>
        <OpenMenuIconWrapper
          onClick={() => setIsOpen(true)}
          hide={{
            '@initial': false,
            '@tabletUp': true,
          }}
        >
          <OpenMenuIcon aria-label="open menu" />
        </OpenMenuIconWrapper>

        <LogoLink onClick={() => scrollTo('hero', -154)}>
          <Logo>
            bm<span>.</span>
          </Logo>
        </LogoLink>

        <WrapperWithToggleTheme>
          <MenuNav
            css={{
              '@tabletUp': {
                display: 'block',
              },
            }}
          >
            {MENU_ITEMS.map(({ name, path }) => (
              <MenuLink key={name} onClick={() => scrollTo(path)}>
                {name}
              </MenuLink>
            ))}
          </MenuNav>
          <Box
            css={{
              '@tabletUp': {
                marginLeft: '$12',
              },
            }}
          >
            <ToggleLanguage
              triggerStyles={{
                marginTop: '0.4rem',
              }}
            />
            <ButtonToggleTheme />
          </Box>
        </WrapperWithToggleTheme>

        <MobileMenuNav aria-hidden={!isOpen} visible={isOpen} hide={!isOpen}>
          <CloseMenuIconWrapper onClick={() => setIsOpen(false)}>
            <CloseMenuICon aria-label="close menu" />
          </CloseMenuIconWrapper>
          {MENU_ITEMS.map(({ name, path }) => (
            <MenuLink
              key={name}
              onClick={() => scrollTo(path)}
              mobile
              css={{
                transform: isOpen ? 'translateY(0)' : 'translateY(3rem)',
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              {name}
            </MenuLink>
          ))}
        </MobileMenuNav>
      </Container>
    </Wrapper>
  );
};

const Container = styled('div', {
  maxWidth: '75rem',
  margin: '0 auto',
  display: 'flex',
  pd: '$2 2rem',
  ai: 'flex-end',
  justifyContent: 'space-between',
});

const Wrapper = styled('div', {
  background: '$blurBackground2',
  position: 'sticky',
  top: 0,
});

const OpenMenuIconWrapper = styled('div', {
  color: '$hiContrast',
  cursor: 'pointer',

  svg: {
    width: '$10',
    height: '$10',
  },
  '&:hover': {
    filter: 'opacity(0.8)',
  },

  variants: {
    hide: {
      true: {
        display: 'none',
      },
    },
  },
});

const Logo = styled('p', {
  color: '$hiContrast',
  fontSize: '$6',

  fontWeight: '$semibold',

  span: {
    fontSize: '$8',
    background: '$highlight',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
  },
  '@tabletUp': {
    paddingBottom: '0.25rem',
  },
});

const MenuNav = styled('nav', {
  display: 'none',
});

const MenuLink = styled('a', {
  color: '$hiContrast',
  fontSize: '$3',
  textDecoration: 'none',
  fontWeight: 'medium',
  cursor: 'pointer',

  '&:hover': {
    filter: 'opacity(0.8)',
  },
  '& + &': {
    marginLeft: '$6',
  },

  variants: {
    mobile: {
      true: {
        '& + &': {
          marginLeft: '0',
          marginTop: '$6',
        },
        fontSize: '$4',
        fontWeight: '$medium',
      },
    },
  },
});

const MobileMenuNav = styled('nav', {
  display: 'flex',
  fd: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  zIndex: '$sticky',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  height: '100vh',
  overflow: 'hidden',
  transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
  background: '$blurBackground',
  backdropFilter: 'blur(0.625rem)',

  variants: {
    visible: {
      true: {
        opacity: 1,
        pointerEvents: 'all',
        visibility: 'visible',
      },
    },
    hide: {
      true: {
        opacity: 0,
        pointerEvents: 'none',
        visibility: 'hidden',
      },
    },
  },
});

const CloseMenuIconWrapper = styled('div', {
  color: '$hiContrast',
  cursor: 'pointer',
  position: 'absolute',
  top: 0,
  right: 0,
  margin: '$4',

  svg: {
    width: '$9',
    height: '$9',
  },
  '&:hover': {
    filter: 'opacity(0.8)',
  },

  variants: {
    hide: {
      true: {
        display: 'none',
      },
    },
  },
});

const WrapperWithToggleTheme = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

const LogoLink = styled('a', {
  textDecoration: 'none',
  cursor: 'pointer',
});
