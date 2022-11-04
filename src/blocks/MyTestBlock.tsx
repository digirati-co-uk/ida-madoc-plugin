import React from 'react';
import { blockConfigFor } from "@madoc.io/types";

export const MyTestBlock = ({ text }: { text: string }) => {
    return <div>My new block. {text}</div>;
};

blockConfigFor(MyTestBlock, {
    type: 'ida.MyTestBlock',
    label: 'IDA Plugin',
    requiredContext: [],
    editor: {
        text: { type: 'text-field' },
    },
    anyContext: [],
    defaultProps: {
        text: '',
    },
});
