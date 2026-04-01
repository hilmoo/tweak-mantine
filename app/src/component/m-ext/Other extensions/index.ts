import type { MantineDemo } from "@mantinex/demo";

import { usage as usageCarousel } from "./Carousel";
import { vertical as verticalCarousel } from "./Carousel";
import { icons as iconsCarousel } from "./Carousel";
import { images as imagesCarousel } from "./Carousel";
import { multiple as multipleCarousel } from "./Carousel";
import { breakpoints as breakpointsCarousel } from "./Carousel";
import { autoplay as autoplayCarousel } from "./Carousel";
import { dragFree as dragFreeCarousel } from "./Carousel";
import { indicatorStyles as indicatorStylesCarousel } from "./Carousel";
import { controlsStyles as controlsStylesCarousel } from "./Carousel";
import { controlsHover as controlsHoverCarousel } from "./Carousel";
import { configurator as configuratorCarousel } from "./Carousel";
import { progress as progressCarousel } from "./Carousel";
import { cards as cardsCarousel } from "./Carousel";
import { container as containerCarousel } from "./Carousel";
import { emblaOptions as emblaOptionsCarousel } from "./Carousel";
import { usage as usageCodeHighlight } from "./CodeHighlight";
import { tabs as tabsCodeHighlight } from "./CodeHighlight";
import { tabsIcons as tabsIconsCodeHighlight } from "./CodeHighlight";
import { tabsGetIcons as tabsGetIconsCodeHighlight } from "./CodeHighlight";
import { expand as expandCodeHighlight } from "./CodeHighlight";
import { copy as copyCodeHighlight } from "./CodeHighlight";
import { inline as inlineCodeHighlight } from "./CodeHighlight";
import { customControl as customControlCodeHighlight } from "./CodeHighlight";
import { usage as usageDropzone } from "./Dropzone";
import { loading as loadingDropzone } from "./Dropzone";
import { disabled as disabledDropzone } from "./Dropzone";
import { manual as manualDropzone } from "./Dropzone";
import { enableChildPointerEvent as enableChildPointerEventDropzone } from "./Dropzone";
import { fullScreen as fullScreenDropzone } from "./Dropzone";
import { preview as previewDropzone } from "./Dropzone";
import { confirm as confirmModals } from "./Modals";
import { context as contextModals } from "./Modals";
import { confirmCustomize as confirmCustomizeModals } from "./Modals";
import { multipleSteps as multipleStepsModals } from "./Modals";
import { content as contentModals } from "./Modals";
import { modalProps as modalPropsModals } from "./Modals";
import { updateModal as updateModalModals } from "./Modals";
import { updateContextModal as updateContextModalModals } from "./Modals";
import { autoclose as autocloseNotifications } from "./Notifications";
import { base as baseNotifications } from "./Notifications";
import { clean as cleanNotifications } from "./Notifications";
import { limit as limitNotifications } from "./Notifications";
import { update as updateNotifications } from "./Notifications";
import { customize as customizeNotifications } from "./Notifications";
import { position as positionNotifications } from "./Notifications";
import { store as storeNotifications } from "./Notifications";
import { usage as usageNprogress } from "./Nprogress";
import { usage as usageSpotlight } from "./Spotlight";
import { compound as compoundSpotlight } from "./Spotlight";
import { scrollable as scrollableSpotlight } from "./Spotlight";
import { limit as limitSpotlight } from "./Spotlight";
import { customAction as customActionSpotlight } from "./Spotlight";
import { groups as groupsSpotlight } from "./Spotlight";
import { fuzzySearch as fuzzySearchSpotlight } from "./Spotlight";
import { usage as usageTipTap } from "./TipTap";
import { colors as colorsTipTap } from "./TipTap";
import { codeHighlight as codeHighlightTipTap } from "./TipTap";
import { bubbleMenu as bubbleMenuTipTap } from "./TipTap";
import { floatingMenu as floatingMenuTipTap } from "./TipTap";
import { customControl as customControlTipTap } from "./TipTap";
import { icons as iconsTipTap } from "./TipTap";
import { placeholder as placeholderTipTap } from "./TipTap";
import { tasks as tasksTipTap } from "./TipTap";
import { typographyStyles as typographyStylesTipTap } from "./TipTap";
import { subtleVariant as subtleVariantTipTap } from "./TipTap";
import { sourceCodeSwitcher as sourceCodeSwitcherTipTap } from "./TipTap";

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
  category: "Other extensions",
  pages: [
    {
      pageName: "Carousel",
      demo: [
        {
          demoName: "Carousel.demo.usage",
          demoComponent: usageCarousel,
        },
        {
          demoName: "Carousel.demo.vertical",
          demoComponent: verticalCarousel,
        },
        {
          demoName: "Carousel.demo.icons",
          demoComponent: iconsCarousel,
        },
        {
          demoName: "Carousel.demo.images",
          demoComponent: imagesCarousel,
        },
        {
          demoName: "Carousel.demo.multiple",
          demoComponent: multipleCarousel,
        },
        {
          demoName: "Carousel.demo.breakpoints",
          demoComponent: breakpointsCarousel,
        },
        {
          demoName: "Carousel.demo.autoplay",
          demoComponent: autoplayCarousel,
        },
        {
          demoName: "Carousel.demo.dragFree",
          demoComponent: dragFreeCarousel,
        },
        {
          demoName: "Carousel.demo.indicatorStyles",
          demoComponent: indicatorStylesCarousel,
        },
        {
          demoName: "Carousel.demo.controlsStyles",
          demoComponent: controlsStylesCarousel,
        },
        {
          demoName: "Carousel.demo.controlsHover",
          demoComponent: controlsHoverCarousel,
        },
        {
          demoName: "Carousel.demo.configurator",
          demoComponent: configuratorCarousel,
        },
        {
          demoName: "Carousel.demo.progress",
          demoComponent: progressCarousel,
        },
        {
          demoName: "Carousel.demo.cards",
          demoComponent: cardsCarousel,
        },
        {
          demoName: "Carousel.demo.container",
          demoComponent: containerCarousel,
        },
        {
          demoName: "Carousel.demo.emblaOptions",
          demoComponent: emblaOptionsCarousel,
        },
      ],
    },
    {
      pageName: "CodeHighlight",
      demo: [
        {
          demoName: "CodeHighlight.demo.usage",
          demoComponent: usageCodeHighlight,
        },
        {
          demoName: "CodeHighlight.demo.tabs",
          demoComponent: tabsCodeHighlight,
        },
        {
          demoName: "CodeHighlight.demo.tabsIcons",
          demoComponent: tabsIconsCodeHighlight,
        },
        {
          demoName: "CodeHighlight.demo.tabsGetIcons",
          demoComponent: tabsGetIconsCodeHighlight,
        },
        {
          demoName: "CodeHighlight.demo.expand",
          demoComponent: expandCodeHighlight,
        },
        {
          demoName: "CodeHighlight.demo.copy",
          demoComponent: copyCodeHighlight,
        },
        {
          demoName: "CodeHighlight.demo.inline",
          demoComponent: inlineCodeHighlight,
        },
        {
          demoName: "CodeHighlight.demo.customControl",
          demoComponent: customControlCodeHighlight,
        },
      ],
    },
    {
      pageName: "Dropzone",
      demo: [
        {
          demoName: "Dropzone.demo.usage",
          demoComponent: usageDropzone,
        },
        {
          demoName: "Dropzone.demo.loading",
          demoComponent: loadingDropzone,
        },
        {
          demoName: "Dropzone.demo.disabled",
          demoComponent: disabledDropzone,
        },
        {
          demoName: "Dropzone.demo.manual",
          demoComponent: manualDropzone,
        },
        {
          demoName: "Dropzone.demo.enableChildPointerEvent",
          demoComponent: enableChildPointerEventDropzone,
        },
        {
          demoName: "Dropzone.demo.fullScreen",
          demoComponent: fullScreenDropzone,
        },
        {
          demoName: "Dropzone.demo.preview",
          demoComponent: previewDropzone,
        },
      ],
    },
    {
      pageName: "Modals",
      demo: [
        {
          demoName: "Modals.demo.confirm",
          demoComponent: confirmModals,
        },
        {
          demoName: "Modals.demo.context",
          demoComponent: contextModals,
        },
        {
          demoName: "Modals.demo.confirmCustomize",
          demoComponent: confirmCustomizeModals,
        },
        {
          demoName: "Modals.demo.multipleSteps",
          demoComponent: multipleStepsModals,
        },
        {
          demoName: "Modals.demo.content",
          demoComponent: contentModals,
        },
        {
          demoName: "Modals.demo.modalProps",
          demoComponent: modalPropsModals,
        },
        {
          demoName: "Modals.demo.updateModal",
          demoComponent: updateModalModals,
        },
        {
          demoName: "Modals.demo.updateContextModal",
          demoComponent: updateContextModalModals,
        },
      ],
    },
    {
      pageName: "Notifications",
      demo: [
        {
          demoName: "Notifications.demo.autoclose",
          demoComponent: autocloseNotifications,
        },
        {
          demoName: "Notifications.demo.base",
          demoComponent: baseNotifications,
        },
        {
          demoName: "Notifications.demo.clean",
          demoComponent: cleanNotifications,
        },
        {
          demoName: "Notifications.demo.limit",
          demoComponent: limitNotifications,
        },
        {
          demoName: "Notifications.demo.update",
          demoComponent: updateNotifications,
        },
        {
          demoName: "Notifications.demo.customize",
          demoComponent: customizeNotifications,
        },
        {
          demoName: "Notifications.demo.position",
          demoComponent: positionNotifications,
        },
        {
          demoName: "Notifications.demo.store",
          demoComponent: storeNotifications,
        },
      ],
    },
    {
      pageName: "Nprogress",
      demo: [
        {
          demoName: "NProgress.demo.usage",
          demoComponent: usageNprogress,
        },
      ],
    },
    {
      pageName: "Spotlight",
      demo: [
        {
          demoName: "Spotlight.demo.usage",
          demoComponent: usageSpotlight,
        },
        {
          demoName: "Spotlight.demo.compound",
          demoComponent: compoundSpotlight,
        },
        {
          demoName: "Spotlight.demo.scrollable",
          demoComponent: scrollableSpotlight,
        },
        {
          demoName: "Spotlight.demo.limit",
          demoComponent: limitSpotlight,
        },
        {
          demoName: "Spotlight.demo.customAction",
          demoComponent: customActionSpotlight,
        },
        {
          demoName: "Spotlight.demo.groups",
          demoComponent: groupsSpotlight,
        },
        {
          demoName: "Spotlight.demo.fuzzySearch",
          demoComponent: fuzzySearchSpotlight,
        },
      ],
    },
    {
      pageName: "TipTap",
      demo: [
        {
          demoName: "TipTap.demo.usage",
          demoComponent: usageTipTap,
        },
        {
          demoName: "TipTap.demo.colors",
          demoComponent: colorsTipTap,
        },
        {
          demoName: "TipTap.demo.codeHighlight",
          demoComponent: codeHighlightTipTap,
        },
        {
          demoName: "TipTap.demo.bubbleMenu",
          demoComponent: bubbleMenuTipTap,
        },
        {
          demoName: "TipTap.demo.floatingMenu",
          demoComponent: floatingMenuTipTap,
        },
        {
          demoName: "TipTap.demo.customControl",
          demoComponent: customControlTipTap,
        },
        {
          demoName: "TipTap.demo.icons",
          demoComponent: iconsTipTap,
        },
        {
          demoName: "TipTap.demo.placeholder",
          demoComponent: placeholderTipTap,
        },
        {
          demoName: "TipTap.demo.tasks",
          demoComponent: tasksTipTap,
        },
        {
          demoName: "TipTap.demo.typographyStyles",
          demoComponent: typographyStylesTipTap,
        },
        {
          demoName: "TipTap.demo.subtleVariant",
          demoComponent: subtleVariantTipTap,
        },
        {
          demoName: "TipTap.demo.sourceCodeSwitcher",
          demoComponent: sourceCodeSwitcherTipTap,
        },
      ],
    },
  ],
};
