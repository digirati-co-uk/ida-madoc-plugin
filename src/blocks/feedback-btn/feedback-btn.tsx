import {blockConfigFor } from "@madoc.io/types";
import React from 'react';
import { Button } from '../components/Button/Button';

export function FeedbackBtn() {
  return <Button> Something not quite right? Send us feedback</Button>;
}

blockConfigFor(FeedbackBtn, {
  type: 'ida.feedback-button',
  label: 'IDA Feedback Button',
  defaultProps: {},
  editor: {},
});
