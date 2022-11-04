import { blockConfigFor } from "@madoc.io/types";
import React, { useState } from 'react';
import { Hooks } from "@madoc.io/types";
import { MetaDataWrapper, MetaDataAccordian, Btn, MetaItemData, MetaItem, MetaLabel } from './metadata.style';
import { useTranslation } from 'react-i18next';
import { LocaleString } from "@madoc.io/types";

export function IDAManifestMetadata() {
  const { data } = Hooks.useApiManifest();
  const manifest = data?.manifest;
  const metadata = manifest?.metadata;

  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();
  if (!metadata || !metadata.length) {
    return null;
  }

  return (
    <MetaDataWrapper expanded={expanded}>
      <Btn onClick={() => setExpanded(!expanded)}>
       SHOW METADATA
      </Btn>
      <MetaDataAccordian>
        {metadata && metadata.length
          ? metadata.map((metadataItem: { label: any; value: any; }, idx: number) => {
              if (!metadataItem) {
                return null; // null items.
              }
              return (
                <MetaItem key={idx}>
                  <MetaLabel>
                    <LocaleString enableDangerouslySetInnerHTML>{metadataItem.label}</LocaleString> :
                  </MetaLabel>
                  <MetaItemData>
                    <LocaleString enableDangerouslySetInnerHTML>{metadataItem.value}</LocaleString>
                  </MetaItemData>
                </MetaItem>
              );
            })
          : t('No metadata to display')}
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
