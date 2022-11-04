import { blockConfigFor } from "@madoc.io/types";
import React from 'react';
import { SubHeading, Divider, HeroHeading, Wrapper, Actions } from './custom-ida-hero.style';
import { TextButton } from '../components/Button/Button';
import { Hooks } from "@madoc.io/types";
import { LocaleString } from "@madoc.io/types";

export function CustomManifestHeader(props: { subHeading?: string }) {
  const { data: manifestResponse } = Hooks.useApiManifest();
  const manifest = manifestResponse?.manifest;

  if (!manifest?.id) {
    return <HeroHeading>...</HeroHeading>;
  }

  return (
    <Wrapper>
      <HeroHeading>
        <LocaleString>{manifest?.label}</LocaleString>
      </HeroHeading>
      <Actions>
        <TextButton>
          Bookmark this
        </TextButton>
        <TextButton>
      Share this page
        </TextButton>
      </Actions>
      <Divider />
      <SubHeading>{props.subHeading}</SubHeading>
    </Wrapper>
  );
}

blockConfigFor(CustomManifestHeader, {
  type: 'ida.CustomManifestHeader',
  label: 'IDA manifest header',
  anyContext: ['manifest'],
  requiredContext: ['manifest'],
  defaultProps: {
    subHeading: '',
  },
  editor: {
    subHeading: { label: 'Enter a subheading', type: 'text-field' },
  },
});
