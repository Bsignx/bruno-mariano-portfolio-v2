import { CSSProperties } from '@stitches/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { styled, theme as styleTheme } from '../styles/stitches.config';

type props = {
  triggerStyles?: CSSProperties;
};

export const ToggleLanguage = ({ triggerStyles }: props) => {
  const { locale, locales, push, pathname, asPath } = useRouter();

  const handleChangeLanguage = (localTarget: string) => {
    push(pathname, asPath, { locale: localTarget });
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        style={{
          background: 'transparent',
          ...triggerStyles,
        }}
        asChild
      >
        <FlagButton aria-label="change language">
          <Image
            src={`/images/flags/${locale}.png`}
            width={24}
            height={24}
            alt={`flag of ${locale}`}
          />
        </FlagButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          style={{
            zIndex: `${styleTheme.zIndices.popover}`,
            marginTop: '0.5rem',
          }}
        >
          {locales?.map(
            (localeLocal) =>
              localeLocal !== locale && (
                <DropdownMenu.Item>
                  <FlagButton
                    aria-label={
                      localeLocal === locale
                        ? `current language ${localeLocal}`
                        : `change language to ${localeLocal}`
                    }
                    onClick={() => handleChangeLanguage(localeLocal)}
                  >
                    <Image
                      src={`/images/flags/${localeLocal}.png`}
                      width={24}
                      height={24}
                      alt={`flag of ${localeLocal}`}
                    />
                  </FlagButton>
                </DropdownMenu.Item>
              )
          )}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

const FlagButton = styled('button', {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
});
