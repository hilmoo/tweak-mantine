import type { MantineDemo } from "@mantinex/demo";

import { usage as usageAffix } from "./Affix";
import { usage as usageDialog } from "./Dialog";
import { usage as usageDrawer } from "./Drawer";
import { positions as positionsDrawer } from "./Drawer";
import { sizes as sizesDrawer } from "./Drawer";
import { transitions as transitionsDrawer } from "./Drawer";
import { overlay as overlayDrawer } from "./Drawer";
import { composition as compositionDrawer } from "./Drawer";
import { header as headerDrawer } from "./Drawer";
import { initialFocus as initialFocusDrawer } from "./Drawer";
import { scrollarea as scrollareaDrawer } from "./Drawer";
import { overflow as overflowDrawer } from "./Drawer";
import { offset as offsetDrawer } from "./Drawer";
import { closeIcon as closeIconDrawer } from "./Drawer";
import { initialFocusTrap as initialFocusTrapDrawer } from "./Drawer";
import { stack as stackDrawer } from "./Drawer";
import { transitionEnd as transitionEndDrawer } from "./Drawer";
import { direction as directionFloatingIndicator } from "./FloatingIndicator";
import { segmented as segmentedFloatingIndicator } from "./FloatingIndicator";
import { tabs as tabsFloatingIndicator } from "./FloatingIndicator";
import { usage as usageHoverCard } from "./HoverCard";
import { profile as profileHoverCard } from "./HoverCard";
import { delay as delayHoverCard } from "./HoverCard";
import { group as groupHoverCard } from "./HoverCard";
import { usage as usageLoadingOverlay } from "./LoadingOverlay";
import { loaderProps as loaderPropsLoadingOverlay } from "./LoadingOverlay";
import { customLoader as customLoaderLoadingOverlay } from "./LoadingOverlay";
import { usage as usageMenu } from "./Menu";
import { transitions as transitionsMenu } from "./Menu";
import { component as componentMenu } from "./Menu";
import { hover as hoverMenu } from "./Menu";
import { positionConfigurator as positionConfiguratorMenu } from "./Menu";
import { disabled as disabledMenu } from "./Menu";
import { customControl as customControlMenu } from "./Menu";
import { clickHover as clickHoverMenu } from "./Menu";
import { navigation as navigationMenu } from "./Menu";
import { sub as subMenu } from "./Menu";
import { usage as usageModal } from "./Modal";
import { header as headerModal } from "./Modal";
import { sizes as sizesModal } from "./Modal";
import { overlay as overlayModal } from "./Modal";
import { overflow as overflowModal } from "./Modal";
import { transitions as transitionsModal } from "./Modal";
import { centered as centeredModal } from "./Modal";
import { fullScreen as fullScreenModal } from "./Modal";
import { sizeAuto as sizeAutoModal } from "./Modal";
import { scrollarea as scrollareaModal } from "./Modal";
import { composition as compositionModal } from "./Modal";
import { offset as offsetModal } from "./Modal";
import { initialFocus as initialFocusModal } from "./Modal";
import { fullScreenMobile as fullScreenMobileModal } from "./Modal";
import { closeIcon as closeIconModal } from "./Modal";
import { initialFocusTrap as initialFocusTrapModal } from "./Modal";
import { stack as stackModal } from "./Modal";
import { transitionEnd as transitionEndModal } from "./Modal";
import { usage as usageOverlay } from "./Overlay";
import { gradient as gradientOverlay } from "./Overlay";
import { blur as blurOverlay } from "./Overlay";
import { usage as usagePopover } from "./Popover";
import { form as formPopover } from "./Popover";
import { hover as hoverPopover } from "./Popover";
import { sameWidth as sameWidthPopover } from "./Popover";
import { inline as inlinePopover } from "./Popover";
import { offsetAxis as offsetAxisPopover } from "./Popover";
import { offset as offsetPopover } from "./Popover";
import { arrow as arrowPopover } from "./Popover";
import { clickOutsideEvents as clickOutsideEventsPopover } from "./Popover";
import { disabled as disabledPopover } from "./Popover";
import { portalChildren as portalChildrenPopover } from "./Popover";
import { overlay as overlayPopover } from "./Popover";
import { hideDetached as hideDetachedPopover } from "./Popover";
import { configurator as configuratorTooltip } from "./Tooltip";
import { controlled as controlledTooltip } from "./Tooltip";
import { arrow as arrowTooltip } from "./Tooltip";
import { multiline as multilineTooltip } from "./Tooltip";
import { transitions as transitionsTooltip } from "./Tooltip";
import { delay as delayTooltip } from "./Tooltip";
import { floating as floatingTooltip } from "./Tooltip";
import { usage as usageTooltip } from "./Tooltip";
import { group as groupTooltip } from "./Tooltip";
import { offset as offsetTooltip } from "./Tooltip";
import { inline as inlineTooltip } from "./Tooltip";
import { nested as nestedTooltip } from "./Tooltip";
import { offsetAxis as offsetAxisTooltip } from "./Tooltip";
import { target as targetTooltip } from "./Tooltip";

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
  category: "Overlays",
  pages: [
    {
      pageName: "Affix",
      demo: [
        {
          demoName: "Affix.demo.usage",
          demoComponent: usageAffix,
        },
      ],
    },
    {
      pageName: "Dialog",
      demo: [
        {
          demoName: "Dialog.demo.usage",
          demoComponent: usageDialog,
        },
      ],
    },
    {
      pageName: "Drawer",
      demo: [
        {
          demoName: "Drawer.demo.usage",
          demoComponent: usageDrawer,
        },
        {
          demoName: "Drawer.demo.positions",
          demoComponent: positionsDrawer,
        },
        {
          demoName: "Drawer.demo.sizes",
          demoComponent: sizesDrawer,
        },
        {
          demoName: "Drawer.demo.transitions",
          demoComponent: transitionsDrawer,
        },
        {
          demoName: "Drawer.demo.overlay",
          demoComponent: overlayDrawer,
        },
        {
          demoName: "Drawer.demo.composition",
          demoComponent: compositionDrawer,
        },
        {
          demoName: "Drawer.demo.header",
          demoComponent: headerDrawer,
        },
        {
          demoName: "Drawer.demo.initialFocus",
          demoComponent: initialFocusDrawer,
        },
        {
          demoName: "Drawer.demo.scrollarea",
          demoComponent: scrollareaDrawer,
        },
        {
          demoName: "Drawer.demo.overflow",
          demoComponent: overflowDrawer,
        },
        {
          demoName: "Drawer.demo.offset",
          demoComponent: offsetDrawer,
        },
        {
          demoName: "Drawer.demo.closeIcon",
          demoComponent: closeIconDrawer,
        },
        {
          demoName: "Drawer.demo.initialFocusTrap",
          demoComponent: initialFocusTrapDrawer,
        },
        {
          demoName: "Drawer.demo.stack",
          demoComponent: stackDrawer,
        },
        {
          demoName: "Drawer.demo.transitionEnd",
          demoComponent: transitionEndDrawer,
        },
      ],
    },
    {
      pageName: "FloatingIndicator",
      demo: [
        {
          demoName: "FloatingIndicator.demo.direction",
          demoComponent: directionFloatingIndicator,
        },
        {
          demoName: "FloatingIndicator.demo.segmented",
          demoComponent: segmentedFloatingIndicator,
        },
        {
          demoName: "FloatingIndicator.demo.tabs",
          demoComponent: tabsFloatingIndicator,
        },
      ],
    },
    {
      pageName: "HoverCard",
      demo: [
        {
          demoName: "HoverCard.demo.usage",
          demoComponent: usageHoverCard,
        },
        {
          demoName: "HoverCard.demo.profile",
          demoComponent: profileHoverCard,
        },
        {
          demoName: "HoverCard.demo.delay",
          demoComponent: delayHoverCard,
        },
        {
          demoName: "HoverCard.demo.group",
          demoComponent: groupHoverCard,
        },
      ],
    },
    {
      pageName: "LoadingOverlay",
      demo: [
        {
          demoName: "LoadingOverlay.demo.usage",
          demoComponent: usageLoadingOverlay,
        },
        {
          demoName: "LoadingOverlay.demo.loaderProps",
          demoComponent: loaderPropsLoadingOverlay,
        },
        {
          demoName: "LoadingOverlay.demo.customLoader",
          demoComponent: customLoaderLoadingOverlay,
        },
      ],
    },
    {
      pageName: "Menu",
      demo: [
        {
          demoName: "Menu.demo.usage",
          demoComponent: usageMenu,
        },
        {
          demoName: "Menu.demo.transitions",
          demoComponent: transitionsMenu,
        },
        {
          demoName: "Menu.demo.component",
          demoComponent: componentMenu,
        },
        {
          demoName: "Menu.demo.hover",
          demoComponent: hoverMenu,
        },
        {
          demoName: "Menu.demo.positionConfigurator",
          demoComponent: positionConfiguratorMenu,
        },
        {
          demoName: "Menu.demo.disabled",
          demoComponent: disabledMenu,
        },
        {
          demoName: "Menu.demo.customControl",
          demoComponent: customControlMenu,
        },
        {
          demoName: "Menu.demo.clickHover",
          demoComponent: clickHoverMenu,
        },
        {
          demoName: "Menu.demo.navigation",
          demoComponent: navigationMenu,
        },
        {
          demoName: "Menu.demo.sub",
          demoComponent: subMenu,
        },
      ],
    },
    {
      pageName: "Modal",
      demo: [
        {
          demoName: "Modal.demo.usage",
          demoComponent: usageModal,
        },
        {
          demoName: "Modal.demo.header",
          demoComponent: headerModal,
        },
        {
          demoName: "Modal.demo.sizes",
          demoComponent: sizesModal,
        },
        {
          demoName: "Modal.demo.overlay",
          demoComponent: overlayModal,
        },
        {
          demoName: "Modal.demo.overflow",
          demoComponent: overflowModal,
        },
        {
          demoName: "Modal.demo.transitions",
          demoComponent: transitionsModal,
        },
        {
          demoName: "Modal.demo.centered",
          demoComponent: centeredModal,
        },
        {
          demoName: "Modal.demo.fullScreen",
          demoComponent: fullScreenModal,
        },
        {
          demoName: "Modal.demo.sizeAuto",
          demoComponent: sizeAutoModal,
        },
        {
          demoName: "Modal.demo.scrollarea",
          demoComponent: scrollareaModal,
        },
        {
          demoName: "Modal.demo.composition",
          demoComponent: compositionModal,
        },
        {
          demoName: "Modal.demo.offset",
          demoComponent: offsetModal,
        },
        {
          demoName: "Modal.demo.initialFocus",
          demoComponent: initialFocusModal,
        },
        {
          demoName: "Modal.demo.fullScreenMobile",
          demoComponent: fullScreenMobileModal,
        },
        {
          demoName: "Modal.demo.closeIcon",
          demoComponent: closeIconModal,
        },
        {
          demoName: "Modal.demo.initialFocusTrap",
          demoComponent: initialFocusTrapModal,
        },
        {
          demoName: "Modal.demo.stack",
          demoComponent: stackModal,
        },
        {
          demoName: "Modal.demo.transitionEnd",
          demoComponent: transitionEndModal,
        },
      ],
    },
    {
      pageName: "Overlay",
      demo: [
        {
          demoName: "Overlay.demo.usage",
          demoComponent: usageOverlay,
        },
        {
          demoName: "Overlay.demo.gradient",
          demoComponent: gradientOverlay,
        },
        {
          demoName: "Overlay.demo.blur",
          demoComponent: blurOverlay,
        },
      ],
    },
    {
      pageName: "Popover",
      demo: [
        {
          demoName: "Popover.demo.usage",
          demoComponent: usagePopover,
        },
        {
          demoName: "Popover.demo.form",
          demoComponent: formPopover,
        },
        {
          demoName: "Popover.demo.hover",
          demoComponent: hoverPopover,
        },
        {
          demoName: "Popover.demo.sameWidth",
          demoComponent: sameWidthPopover,
        },
        {
          demoName: "Popover.demo.inline",
          demoComponent: inlinePopover,
        },
        {
          demoName: "Popover.demo.offsetAxis",
          demoComponent: offsetAxisPopover,
        },
        {
          demoName: "Popover.demo.offset",
          demoComponent: offsetPopover,
        },
        {
          demoName: "Popover.demo.arrow",
          demoComponent: arrowPopover,
        },
        {
          demoName: "Popover.demo.clickOutsideEvents",
          demoComponent: clickOutsideEventsPopover,
        },
        {
          demoName: "Popover.demo.disabled",
          demoComponent: disabledPopover,
        },
        {
          demoName: "Popover.demo.portalChildren",
          demoComponent: portalChildrenPopover,
        },
        {
          demoName: "Popover.demo.overlay",
          demoComponent: overlayPopover,
        },
        {
          demoName: "Popover.demo.hideDetached",
          demoComponent: hideDetachedPopover,
        },
      ],
    },
    {
      pageName: "Tooltip",
      demo: [
        {
          demoName: "Tooltip.demo.configurator",
          demoComponent: configuratorTooltip,
        },
        {
          demoName: "Tooltip.demo.controlled",
          demoComponent: controlledTooltip,
        },
        {
          demoName: "Tooltip.demo.arrow",
          demoComponent: arrowTooltip,
        },
        {
          demoName: "Tooltip.demo.multiline",
          demoComponent: multilineTooltip,
        },
        {
          demoName: "Tooltip.demo.transitions",
          demoComponent: transitionsTooltip,
        },
        {
          demoName: "Tooltip.demo.delay",
          demoComponent: delayTooltip,
        },
        {
          demoName: "Tooltip.demo.floating",
          demoComponent: floatingTooltip,
        },
        {
          demoName: "Tooltip.demo.usage",
          demoComponent: usageTooltip,
        },
        {
          demoName: "Tooltip.demo.group",
          demoComponent: groupTooltip,
        },
        {
          demoName: "Tooltip.demo.offset",
          demoComponent: offsetTooltip,
        },
        {
          demoName: "Tooltip.demo.inline",
          demoComponent: inlineTooltip,
        },
        {
          demoName: "Tooltip.demo.nested",
          demoComponent: nestedTooltip,
        },
        {
          demoName: "Tooltip.demo.offsetAxis",
          demoComponent: offsetAxisTooltip,
        },
        {
          demoName: "Tooltip.demo.target",
          demoComponent: targetTooltip,
        },
      ],
    },
  ],
};
