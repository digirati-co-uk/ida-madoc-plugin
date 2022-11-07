import { blockConfigFor } from "@madoc.io/types";
import React from 'react';
import { SubHeading, Divider, HeroHeading, Wrapper, Actions } from './custom-ida-hero.style';
import { LocaleString } from "@madoc.io/types";
import { Hooks } from "@madoc.io/types";
import { useRouteContext } from "@madoc.io/types";
import {TextButton} from "../components/Button/Button";

export function CustomCanvasHeader(props: { subHeading?: string }) {
    const { canvasId } = useRouteContext();
    const { data: canvasResponse } = Hooks.useApiCanvas(canvasId);
    const canvas = canvasResponse?.canvas;


  if (!canvas?.id) {
    return <HeroHeading>...</HeroHeading>;
  }

  return (
    <Wrapper>
      <HeroHeading>
        <LocaleString>{canvas?.label}</LocaleString>
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

blockConfigFor(CustomCanvasHeader, {
  type: 'ida.CustomCanvasHeader',
  label: 'IDA Canvas header',
  anyContext: ['canvas'],
  requiredContext: ['canvas'],
  defaultProps: {
    subHeading: '',
  },
  editor: {
    subHeading: { label: 'Enter a subheading', type: 'text-field' },
  },
});
