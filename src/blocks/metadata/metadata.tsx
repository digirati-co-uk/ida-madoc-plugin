import {blockConfigFor, useRouteContext} from "@madoc.io/types";
import React, {useState} from 'react';
import {Hooks} from "@madoc.io/types";
import {MetaDataWrapper, MetaDataAccordian, Btn, MetaItemData, MetaItem, MetaLabel} from './metadata.style';
import {LocaleString} from "@madoc.io/types";
import { Database, ChevronDown } from '@styled-icons/entypo';

export function IDAManifestMetadata() {
    const {manifestId} = useRouteContext();
    const {data: manifestResponse} = Hooks.useApiManifest(manifestId);
    const manifest = manifestResponse?.manifest;
    const metadata = manifest?.metadata;

    const [expanded, setExpanded] = useState(false);
    if (!metadata || !metadata.length) {
        return null;
    }

    return (
        <MetaDataWrapper expanded={expanded}>
            <Btn onClick={() => setExpanded(!expanded)}>
                <ChevronDown />    SHOW METADATA
            </Btn>
            <MetaDataAccordian>
                {metadata && metadata.length
                    ? metadata.map((metadataItem: { label: any; value: any; }, idx: number) => {
                        if (!metadataItem) {
                            return null; // null items.
                        }
                        return (
                            <MetaItem key={idx}>
                                <Database />
                                <MetaLabel>
                                    <LocaleString enableDangerouslySetInnerHTML>{metadataItem.label}</LocaleString> :
                                </MetaLabel>
                                <MetaItemData>
                                    <LocaleString enableDangerouslySetInnerHTML>{metadataItem.value}</LocaleString>
                                </MetaItemData>
                            </MetaItem>
                        );
                    })
                    : 'No metadata to display'}
            </MetaDataAccordian>
        </MetaDataWrapper>
    );
}

blockConfigFor(IDAManifestMetadata, {
    type: 'ida.IDAManifestMetadata',
    label: 'Dropdown Manifest Metadata',
    anyContext: ['manifest', 'canvas'],
    requiredContext: ['manifest'],
    editor: {},
    defaultProps: {},
});
