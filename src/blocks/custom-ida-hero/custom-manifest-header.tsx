import {blockConfigFor, useRouteContext} from "@madoc.io/types";
import React from 'react';
import { HeroText, Divider, HeroHeading, Wrapper, Actions } from './custom-ida-hero.style';
import { TextButton } from '../components/Button/Button';
import { Hooks } from "@madoc.io/types";
import { LocaleString } from "@madoc.io/types";

export function CustomManifestHeader(props: { subHeading?: string }) {
  const { manifestId } = useRouteContext();
  const { data: manifestResponse } = Hooks.useApiManifest(manifestId);
  const manifest = manifestResponse?.manifest;

  if (!manifest?.id) {
 return null;
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
      <HeroText>{props.subHeading}</HeroText>
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
