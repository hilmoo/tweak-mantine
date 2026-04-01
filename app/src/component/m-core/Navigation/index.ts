import type { MantineDemo } from "@mantinex/demo";

import { usage as usageAnchor } from "./Anchor";
import { decoration as decorationAnchor } from "./Anchor";
import { textProps as textPropsAnchor } from "./Anchor";
import { usage as usageBreadcrumbs } from "./Breadcrumbs";
import { usage as usageBurger } from "./Burger";
import { lineWidth as lineWidthBurger } from "./Burger";
import { usage as usageNavLink } from "./NavLink";
import { active as activeNavLink } from "./NavLink";
import { nested as nestedNavLink } from "./NavLink";
import { autoContrast as autoContrastNavLink } from "./NavLink";
import { configurator as configuratorPagination } from "./Pagination";
import { siblings as siblingsPagination } from "./Pagination";
import { boundaries as boundariesPagination } from "./Pagination";
import { usage as usagePagination } from "./Pagination";
import { composition as compositionPagination } from "./Pagination";
import { icons as iconsPagination } from "./Pagination";
import { links as linksPagination } from "./Pagination";
import { withContent as withContentPagination } from "./Pagination";
import { autoContrast as autoContrastPagination } from "./Pagination";
import { withPages as withPagesPagination } from "./Pagination";
import { size as sizePagination } from "./Pagination";
import { startValue as startValuePagination } from "./Pagination";
import { usage as usageStepper } from "./Stepper";
import { configurator as configuratorStepper } from "./Stepper";
import { icons as iconsStepper } from "./Stepper";
import { iconSizeConfigurator as iconSizeConfiguratorStepper } from "./Stepper";
import { iconsOnly as iconsOnlyStepper } from "./Stepper";
import { orientation as orientationStepper } from "./Stepper";
import { iconPosition as iconPositionStepper } from "./Stepper";
import { loading as loadingStepper } from "./Stepper";
import { stepColor as stepColorStepper } from "./Stepper";
import { stylesApi3 as stylesApi3Stepper } from "./Stepper";
import { stylesApi2 as stylesApi2Stepper } from "./Stepper";
import { allowStepSelect as allowStepSelectStepper } from "./Stepper";
import { allowNextStepsSelect as allowNextStepsSelectStepper } from "./Stepper";
import { usage as usageTableOfContents } from "./TableOfContents";
import { depthOffset as depthOffsetTableOfContents } from "./TableOfContents";
import { autoContrast as autoContrastTableOfContents } from "./TableOfContents";
import { styles as stylesTableOfContents } from "./TableOfContents";
import { usage as usageTabs } from "./Tabs";
import { position as positionTabs } from "./Tabs";
import { pull as pullTabs } from "./Tabs";
import { inverted as invertedTabs } from "./Tabs";
import { placement as placementTabs } from "./Tabs";
import { disabled as disabledTabs } from "./Tabs";
import { colors as colorsTabs } from "./Tabs";
import { deactivate as deactivateTabs } from "./Tabs";
import { keyboardActivation as keyboardActivationTabs } from "./Tabs";
import { customize as customizeTabs } from "./Tabs";
import { scroller as scrollerTabs } from "./Tabs";
import { usage as usageTree } from "./Tree";
import { files as filesTree } from "./Tree";
import { renderNode as renderNodeTree } from "./Tree";
import { controller as controllerTree } from "./Tree";
import { checked as checkedTree } from "./Tree";
import { expandedState as expandedStateTree } from "./Tree";
import { checkAllNodes as checkAllNodesTree } from "./Tree";

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
  category: "Navigation",
  pages: [
    {
      pageName: "Anchor",
      demo: [
        {
          demoName: "Anchor.demo.usage",
          demoComponent: usageAnchor,
        },
        {
          demoName: "Anchor.demo.decoration",
          demoComponent: decorationAnchor,
        },
        {
          demoName: "Anchor.demo.textProps",
          demoComponent: textPropsAnchor,
        },
      ],
    },
    {
      pageName: "Breadcrumbs",
      demo: [
        {
          demoName: "Breadcrumbs.demo.usage",
          demoComponent: usageBreadcrumbs,
        },
      ],
    },
    {
      pageName: "Burger",
      demo: [
        {
          demoName: "Burger.demo.usage",
          demoComponent: usageBurger,
        },
        {
          demoName: "Burger.demo.lineWidth",
          demoComponent: lineWidthBurger,
        },
      ],
    },
    {
      pageName: "NavLink",
      demo: [
        {
          demoName: "NavLink.demo.usage",
          demoComponent: usageNavLink,
        },
        {
          demoName: "NavLink.demo.active",
          demoComponent: activeNavLink,
        },
        {
          demoName: "NavLink.demo.nested",
          demoComponent: nestedNavLink,
        },
        {
          demoName: "NavLink.demo.autoContrast",
          demoComponent: autoContrastNavLink,
        },
      ],
    },
    {
      pageName: "Pagination",
      demo: [
        {
          demoName: "Pagination.demo.configurator",
          demoComponent: configuratorPagination,
        },
        {
          demoName: "Pagination.demo.siblings",
          demoComponent: siblingsPagination,
        },
        {
          demoName: "Pagination.demo.boundaries",
          demoComponent: boundariesPagination,
        },
        {
          demoName: "Pagination.demo.usage",
          demoComponent: usagePagination,
        },
        {
          demoName: "Pagination.demo.composition",
          demoComponent: compositionPagination,
        },
        {
          demoName: "Pagination.demo.icons",
          demoComponent: iconsPagination,
        },
        {
          demoName: "Pagination.demo.links",
          demoComponent: linksPagination,
        },
        {
          demoName: "Pagination.demo.withContent",
          demoComponent: withContentPagination,
        },
        {
          demoName: "Pagination.demo.autoContrast",
          demoComponent: autoContrastPagination,
        },
        {
          demoName: "Pagination.demo.withPages",
          demoComponent: withPagesPagination,
        },
        {
          demoName: "Pagination.demo.size",
          demoComponent: sizePagination,
        },
        {
          demoName: "Pagination.demo.startValue",
          demoComponent: startValuePagination,
        },
      ],
    },
    {
      pageName: "Stepper",
      demo: [
        {
          demoName: "Stepper.demo.usage",
          demoComponent: usageStepper,
        },
        {
          demoName: "Stepper.demo.configurator",
          demoComponent: configuratorStepper,
        },
        {
          demoName: "Stepper.demo.icons",
          demoComponent: iconsStepper,
        },
        {
          demoName: "Stepper.demo.iconSizeConfigurator",
          demoComponent: iconSizeConfiguratorStepper,
        },
        {
          demoName: "Stepper.demo.iconsOnly",
          demoComponent: iconsOnlyStepper,
        },
        {
          demoName: "Stepper.demo.orientation",
          demoComponent: orientationStepper,
        },
        {
          demoName: "Stepper.demo.iconPosition",
          demoComponent: iconPositionStepper,
        },
        {
          demoName: "Stepper.demo.loading",
          demoComponent: loadingStepper,
        },
        {
          demoName: "Stepper.demo.stepColor",
          demoComponent: stepColorStepper,
        },
        {
          demoName: "Stepper.demo.stylesApi3",
          demoComponent: stylesApi3Stepper,
        },
        {
          demoName: "Stepper.demo.stylesApi2",
          demoComponent: stylesApi2Stepper,
        },
        {
          demoName: "Stepper.demo.allowStepSelect",
          demoComponent: allowStepSelectStepper,
        },
        {
          demoName: "Stepper.demo.allowNextStepsSelect",
          demoComponent: allowNextStepsSelectStepper,
        },
      ],
    },
    {
      pageName: "TableOfContents",
      demo: [
        {
          demoName: "TableOfContents.demo.usage",
          demoComponent: usageTableOfContents,
        },
        {
          demoName: "TableOfContents.demo.depthOffset",
          demoComponent: depthOffsetTableOfContents,
        },
        {
          demoName: "TableOfContents.demo.autoContrast",
          demoComponent: autoContrastTableOfContents,
        },
        {
          demoName: "TableOfContents.demo.styles",
          demoComponent: stylesTableOfContents,
        },
      ],
    },
    {
      pageName: "Tabs",
      demo: [
        {
          demoName: "Tabs.demo.usage",
          demoComponent: usageTabs,
        },
        {
          demoName: "Tabs.demo.position",
          demoComponent: positionTabs,
        },
        {
          demoName: "Tabs.demo.pull",
          demoComponent: pullTabs,
        },
        {
          demoName: "Tabs.demo.inverted",
          demoComponent: invertedTabs,
        },
        {
          demoName: "Tabs.demo.placement",
          demoComponent: placementTabs,
        },
        {
          demoName: "Tabs.demo.disabled",
          demoComponent: disabledTabs,
        },
        {
          demoName: "Tabs.demo.colors",
          demoComponent: colorsTabs,
        },
        {
          demoName: "Tabs.demo.deactivate",
          demoComponent: deactivateTabs,
        },
        {
          demoName: "Tabs.demo.keyboardActivation",
          demoComponent: keyboardActivationTabs,
        },
        {
          demoName: "Tabs.demo.customize",
          demoComponent: customizeTabs,
        },
        {
          demoName: "Tabs.demo.scroller",
          demoComponent: scrollerTabs,
        },
      ],
    },
    {
      pageName: "Tree",
      demo: [
        {
          demoName: "Tree.demo.usage",
          demoComponent: usageTree,
        },
        {
          demoName: "Tree.demo.files",
          demoComponent: filesTree,
        },
        {
          demoName: "Tree.demo.renderNode",
          demoComponent: renderNodeTree,
        },
        {
          demoName: "Tree.demo.controller",
          demoComponent: controllerTree,
        },
        {
          demoName: "Tree.demo.checked",
          demoComponent: checkedTree,
        },
        {
          demoName: "Tree.demo.expandedState",
          demoComponent: expandedStateTree,
        },
        {
          demoName: "Tree.demo.checkAllNodes",
          demoComponent: checkAllNodesTree,
        },
      ],
    },
  ],
};
