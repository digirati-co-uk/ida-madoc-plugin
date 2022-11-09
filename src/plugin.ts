import '@madoc.io/types';
import {CustomCanvasHeader} from "./blocks/custom-ida-hero/custom-canvas-header";
import {CustomManifestHeader} from "./blocks/custom-ida-hero/custom-manifest-header";
import {IDAManifestMetadata} from "./blocks/metadata/metadata";
import {TopicHero} from "./blocks/custom-ida-hero/topic-hero";
import {TopicAggHero} from "./blocks/custom-ida-hero/topic-agg-hero";
import {FeedbackBtn} from "./blocks/feedback-btn/feedback-btn";
import {idaTheme} from "./themes/ida-theme";

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
    TopicHero,
    TopicAggHero,
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
    idaTheme
];
