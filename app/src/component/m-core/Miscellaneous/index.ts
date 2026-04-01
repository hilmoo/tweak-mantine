import type { MantineDemo } from "@mantinex/demo";

import { usage as usageCollapse } from "./Collapse";
import { transition as transitionCollapse } from "./Collapse";
import { nested as nestedCollapse } from "./Collapse";
import { horizontal as horizontalCollapse } from "./Collapse";
import { usage as usageDivider } from "./Divider";
import { labels as labelsDivider } from "./Divider";
import { sizes as sizesDivider } from "./Divider";
import { orientation as orientationDivider } from "./Divider";
import { variants as variantsDivider } from "./Divider";
import { usage as usageFocusTrap } from "./FocusTrap";
import { initial as initialFocusTrap } from "./FocusTrap";
import { usage as usagePaper } from "./Paper";
import { usage as usageScrollArea } from "./ScrollArea";
import { horizontal as horizontalScrollArea } from "./ScrollArea";
import { scrollTo as scrollToScrollArea } from "./ScrollArea";
import { scrollPosition as scrollPositionScrollArea } from "./ScrollArea";
import { maxHeight as maxHeightScrollArea } from "./ScrollArea";
import { scrollIntoView as scrollIntoViewScrollArea } from "./ScrollArea";
import { autosizePopover as autosizePopoverScrollArea } from "./ScrollArea";
import { scrollbars as scrollbarsScrollArea } from "./ScrollArea";
import { boundaries as boundariesScrollArea } from "./ScrollArea";
import { startScrollPosition as startScrollPositionScrollArea } from "./ScrollArea";
import { custom as customTransition } from "./Transition";
import { delay as delayTransition } from "./Transition";

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
  category: "Miscellaneous",
  pages: [
    {
      pageName: "Collapse",
      demo: [
        {
          demoName: "Collapse.demo.usage",
          demoComponent: usageCollapse,
        },
        {
          demoName: "Collapse.demo.transition",
          demoComponent: transitionCollapse,
        },
        {
          demoName: "Collapse.demo.nested",
          demoComponent: nestedCollapse,
        },
        {
          demoName: "Collapse.demo.horizontal",
          demoComponent: horizontalCollapse,
        },
      ],
    },
    {
      pageName: "Divider",
      demo: [
        {
          demoName: "Divider.demo.usage",
          demoComponent: usageDivider,
        },
        {
          demoName: "Divider.demo.labels",
          demoComponent: labelsDivider,
        },
        {
          demoName: "Divider.demo.sizes",
          demoComponent: sizesDivider,
        },
        {
          demoName: "Divider.demo.orientation",
          demoComponent: orientationDivider,
        },
        {
          demoName: "Divider.demo.variants",
          demoComponent: variantsDivider,
        },
      ],
    },
    {
      pageName: "FocusTrap",
      demo: [
        {
          demoName: "FocusTrap.demo.usage",
          demoComponent: usageFocusTrap,
        },
        {
          demoName: "FocusTrap.demo.initial",
          demoComponent: initialFocusTrap,
        },
      ],
    },
    {
      pageName: "Paper",
      demo: [
        {
          demoName: "Paper.demo.usage",
          demoComponent: usagePaper,
        },
      ],
    },
    {
      pageName: "ScrollArea",
      demo: [
        {
          demoName: "ScrollArea.demo.usage",
          demoComponent: usageScrollArea,
        },
        {
          demoName: "ScrollArea.demo.horizontal",
          demoComponent: horizontalScrollArea,
        },
        {
          demoName: "ScrollArea.demo.scrollTo",
          demoComponent: scrollToScrollArea,
        },
        {
          demoName: "ScrollArea.demo.scrollPosition",
          demoComponent: scrollPositionScrollArea,
        },
        {
          demoName: "ScrollArea.demo.maxHeight",
          demoComponent: maxHeightScrollArea,
        },
        {
          demoName: "ScrollArea.demo.scrollIntoView",
          demoComponent: scrollIntoViewScrollArea,
        },
        {
          demoName: "ScrollArea.demo.autosizePopover",
          demoComponent: autosizePopoverScrollArea,
        },
        {
          demoName: "ScrollArea.demo.scrollbars",
          demoComponent: scrollbarsScrollArea,
        },
        {
          demoName: "ScrollArea.demo.boundaries",
          demoComponent: boundariesScrollArea,
        },
        {
          demoName: "ScrollArea.demo.startScrollPosition",
          demoComponent: startScrollPositionScrollArea,
        },
      ],
    },
    {
      pageName: "Transition",
      demo: [
        {
          demoName: "Transition.demo.custom",
          demoComponent: customTransition,
        },
        {
          demoName: "Transition.demo.delay",
          demoComponent: delayTransition,
        },
      ],
    },
  ],
};
