import '@madoc.io/types';
import {CustomCanvasHeader} from "./blocks/custom-ida-hero/custom-canvas-header";
import {CustomManifestHeader} from "./blocks/custom-ida-hero/custom-manifest-header";
import {IDAManifestMetadata} from "./blocks/metadata/metadata";
import {FeedbackBtn} from "./blocks/feedback-btn/feedback-btn";

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
    CustomCanvasHeader,
    CustomManifestHeader,
    IDAManifestMetadata,
    FeedbackBtn,
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
