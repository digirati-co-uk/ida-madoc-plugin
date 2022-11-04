import '@madoc.io/types';
import {MyTestBlock} from "./blocks/MyTestBlock";
import {CustomCanvasHeader} from "./blocks/custom-ida-hero/custom-canvas-header";
import {CustomManifestHeader} from "./blocks/custom-ida-hero/custom-manifest-header";
import {IDAManifestMetadata} from "./blocks/metadata/metadata";

export function hookRoutes() {
  return [
    // {
    //   path: '/test-plugin',
    //   component: TestPluginPage,
    //   exact: true,
    // },
  ];
}

export function hookComponents() {
  return {
    // AllCollections: ListCollectionsReplacement,
  };
}

export function hookBlocks() {
  return {
    MyTestBlock,
    CustomCanvasHeader,
    CustomManifestHeader,
    IDAManifestMetadata
    // AllMaps,
  };
}

export const projectTemplates = [
//  kitchenSinkTemplate
];

// All themes.
export const themes = [
//  exampleTheme
];
