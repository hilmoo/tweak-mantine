import type { MantineDemo } from "@mantinex/demo";

import { configurator as configuratorAlert } from "./Alert";
import { configurator as configuratorLoader } from "./Loader";
import { customType as customTypeLoader } from "./Loader";
import { cssLoader as cssLoaderLoader } from "./Loader";
import { size as sizeLoader } from "./Loader";
import { icon as iconNotification } from "./Notification";
import { configurator as configuratorNotification } from "./Notification";
import { usage as usageProgress } from "./Progress";
import { compound as compoundProgress } from "./Progress";
import { tooltips as tooltipsProgress } from "./Progress";
import { transition as transitionProgress } from "./Progress";
import { segments as segmentsProgress } from "./Progress";
import { vertical as verticalProgress } from "./Progress";
import { usage as usageRingProgress } from "./RingProgress";
import { configurator as configuratorRingProgress } from "./RingProgress";
import { label as labelRingProgress } from "./RingProgress";
import { tooltip as tooltipRingProgress } from "./RingProgress";
import { sectionsProps as sectionsPropsRingProgress } from "./RingProgress";
import { rootColor as rootColorRingProgress } from "./RingProgress";
import { transitions as transitionsRingProgress } from "./RingProgress";
import { sectionGap as sectionGapRingProgress } from "./RingProgress";
import { startAngle as startAngleRingProgress } from "./RingProgress";
import { usage as usageSemiCircleProgress } from "./SemiCircleProgress";
import { emptySegmentColor as emptySegmentColorSemiCircleProgress } from "./SemiCircleProgress";
import { labelPosition as labelPositionSemiCircleProgress } from "./SemiCircleProgress";
import { transitions as transitionsSemiCircleProgress } from "./SemiCircleProgress";
import { orientations as orientationsSemiCircleProgress } from "./SemiCircleProgress";
import { batteryIndicator as batteryIndicatorSemiCircleProgress } from "./SemiCircleProgress";
import { skillRating as skillRatingSemiCircleProgress } from "./SemiCircleProgress";
import { configurator as configuratorSkeleton } from "./Skeleton";
import { content as contentSkeleton } from "./Skeleton";

interface DataResult {
  category: string;
  pages: PageData[];
}

interface PageData {
  pageName: string;
  demo: DemoData[];
}

interface DemoData {
  demoName: string;
  demoComponent: MantineDemo;
}

export const data: DataResult = {
  category: "Feedback",
  pages: [
    {
      pageName: "Alert",
      demo: [
        {
          demoName: "Alert.demo.configurator",
          demoComponent: configuratorAlert,
        },
      ],
    },
    {
      pageName: "Loader",
      demo: [
        {
          demoName: "Loader.demo.configurator",
          demoComponent: configuratorLoader,
        },
        {
          demoName: "Loader.demo.customType",
          demoComponent: customTypeLoader,
        },
        {
          demoName: "Loader.demo.cssLoader",
          demoComponent: cssLoaderLoader,
        },
        {
          demoName: "Loader.demo.size",
          demoComponent: sizeLoader,
        },
      ],
    },
    {
      pageName: "Notification",
      demo: [
        {
          demoName: "Notification.demo.icon",
          demoComponent: iconNotification,
        },
        {
          demoName: "Notification.demo.configurator",
          demoComponent: configuratorNotification,
        },
      ],
    },
    {
      pageName: "Progress",
      demo: [
        {
          demoName: "Progress.demo.usage",
          demoComponent: usageProgress,
        },
        {
          demoName: "Progress.demo.compound",
          demoComponent: compoundProgress,
        },
        {
          demoName: "Progress.demo.tooltips",
          demoComponent: tooltipsProgress,
        },
        {
          demoName: "Progress.demo.transition",
          demoComponent: transitionProgress,
        },
        {
          demoName: "Progress.demo.segments",
          demoComponent: segmentsProgress,
        },
        {
          demoName: "Progress.demo.vertical",
          demoComponent: verticalProgress,
        },
      ],
    },
    {
      pageName: "RingProgress",
      demo: [
        {
          demoName: "RingProgress.demo.usage",
          demoComponent: usageRingProgress,
        },
        {
          demoName: "RingProgress.demo.configurator",
          demoComponent: configuratorRingProgress,
        },
        {
          demoName: "RingProgress.demo.label",
          demoComponent: labelRingProgress,
        },
        {
          demoName: "RingProgress.demo.tooltip",
          demoComponent: tooltipRingProgress,
        },
        {
          demoName: "RingProgress.demo.sectionsProps",
          demoComponent: sectionsPropsRingProgress,
        },
        {
          demoName: "RingProgress.demo.rootColor",
          demoComponent: rootColorRingProgress,
        },
        {
          demoName: "RingProgress.demo.transitions",
          demoComponent: transitionsRingProgress,
        },
        {
          demoName: "RingProgress.demo.sectionGap",
          demoComponent: sectionGapRingProgress,
        },
        {
          demoName: "RingProgress.demo.startAngle",
          demoComponent: startAngleRingProgress,
        },
      ],
    },
    {
      pageName: "SemiCircleProgress",
      demo: [
        {
          demoName: "SemiCircleProgress.demo.usage",
          demoComponent: usageSemiCircleProgress,
        },
        {
          demoName: "SemiCircleProgress.demo.emptySegmentColor",
          demoComponent: emptySegmentColorSemiCircleProgress,
        },
        {
          demoName: "SemiCircleProgress.demo.labelPosition",
          demoComponent: labelPositionSemiCircleProgress,
        },
        {
          demoName: "SemiCircleProgress.demo.transitions",
          demoComponent: transitionsSemiCircleProgress,
        },
        {
          demoName: "SemiCircleProgress.demo.orientations",
          demoComponent: orientationsSemiCircleProgress,
        },
        {
          demoName: "SemiCircleProgress.demo.batteryIndicator",
          demoComponent: batteryIndicatorSemiCircleProgress,
        },
        {
          demoName: "SemiCircleProgress.demo.skillRating",
          demoComponent: skillRatingSemiCircleProgress,
        },
      ],
    },
    {
      pageName: "Skeleton",
      demo: [
        {
          demoName: "Skeleton.demo.configurator",
          demoComponent: configuratorSkeleton,
        },
        {
          demoName: "Skeleton.demo.content",
          demoComponent: contentSkeleton,
        },
      ],
    },
  ],
};
