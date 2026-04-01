import type { MantineDemo } from "@mantinex/demo";

import { configurator as configuratorAccordion } from "./Accordion";
import { disabled as disabledAccordion } from "./Accordion";
import { chevron as chevronAccordion } from "./Accordion";
import { icons as iconsAccordion } from "./Accordion";
import { label as labelAccordion } from "./Accordion";
import { sideControls as sideControlsAccordion } from "./Accordion";
import { customize as customizeAccordion } from "./Accordion";
import { unstyled as unstyledAccordion } from "./Accordion";
import { usage as usageAvatar } from "./Avatar";
import { placeholders as placeholdersAvatar } from "./Avatar";
import { configurator as configuratorAvatar } from "./Avatar";
import { link as linkAvatar } from "./Avatar";
import { group as groupAvatar } from "./Avatar";
import { groupTooltip as groupTooltipAvatar } from "./Avatar";
import { gradient as gradientAvatar } from "./Avatar";
import { initials as initialsAvatar } from "./Avatar";
import { allowedColors as allowedColorsAvatar } from "./Avatar";
import { usage as usageBackgroundImage } from "./BackgroundImage";
import { usage as usageBadge } from "./Badge";
import { fullWidth as fullWidthBadge } from "./Badge";
import { sections as sectionsBadge } from "./Badge";
import { gradient as gradientBadge } from "./Badge";
import { rounded as roundedBadge } from "./Badge";
import { variantColorsResolver as variantColorsResolverBadge } from "./Badge";
import { autoContrast as autoContrastBadge } from "./Badge";
import { usage as usageCard } from "./Card";
import { link as linkCard } from "./Card";
import { linkSection as linkSectionCard } from "./Card";
import { section as sectionCard } from "./Card";
import { horizontal as horizontalCard } from "./Card";
import { usage as usageColorSwatch } from "./ColorSwatch";
import { component as componentColorSwatch } from "./ColorSwatch";
import { shadow as shadowColorSwatch } from "./ColorSwatch";
import { usage as usageImage } from "./Image";
import { height as heightImage } from "./Image";
import { contain as containImage } from "./Image";
import { fallback as fallbackImage } from "./Image";
import { configurator as configuratorIndicator } from "./Indicator";
import { inline as inlineIndicator } from "./Indicator";
import { offset as offsetIndicator } from "./Indicator";
import { processing as processingIndicator } from "./Indicator";
import { disabled as disabledIndicator } from "./Indicator";
import { maxValue as maxValueIndicator } from "./Indicator";
import { showZero as showZeroIndicator } from "./Indicator";
import { autoContrast as autoContrastIndicator } from "./Indicator";
import { usage as usageKbd } from "./Kbd";
import { size as sizeKbd } from "./Kbd";
import { usage as usageNumberFormatter } from "./NumberFormatter";
import { prefixSuffix as prefixSuffixNumberFormatter } from "./NumberFormatter";
import { thousandsSeparator as thousandsSeparatorNumberFormatter } from "./NumberFormatter";
import { decimalScale as decimalScaleNumberFormatter } from "./NumberFormatter";
import { usage as usageSpoiler } from "./Spoiler";
import { transitions as transitionsSpoiler } from "./Spoiler";
import { usage as usageThemeIcon } from "./ThemeIcon";
import { gradient as gradientThemeIcon } from "./ThemeIcon";
import { variantColorsResolver as variantColorsResolverThemeIcon } from "./ThemeIcon";
import { autoContrast as autoContrastThemeIcon } from "./ThemeIcon";
import { usage as usageTimeline } from "./Timeline";
import { configurator as configuratorTimeline } from "./Timeline";
import { bullet as bulletTimeline } from "./Timeline";

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
  category: "Data display",
  pages: [
    {
      pageName: "Accordion",
      demo: [
        {
          demoName: "Accordion.demo.configurator",
          demoComponent: configuratorAccordion,
        },
        {
          demoName: "Accordion.demo.disabled",
          demoComponent: disabledAccordion,
        },
        {
          demoName: "Accordion.demo.chevron",
          demoComponent: chevronAccordion,
        },
        {
          demoName: "Accordion.demo.icons",
          demoComponent: iconsAccordion,
        },
        {
          demoName: "Accordion.demo.label",
          demoComponent: labelAccordion,
        },
        {
          demoName: "Accordion.demo.sideControls",
          demoComponent: sideControlsAccordion,
        },
        {
          demoName: "Accordion.demo.customize",
          demoComponent: customizeAccordion,
        },
        {
          demoName: "Accordion.demo.unstyled",
          demoComponent: unstyledAccordion,
        },
      ],
    },
    {
      pageName: "Avatar",
      demo: [
        {
          demoName: "Avatar.demo.usage",
          demoComponent: usageAvatar,
        },
        {
          demoName: "Avatar.demo.placeholders",
          demoComponent: placeholdersAvatar,
        },
        {
          demoName: "Avatar.demo.configurator",
          demoComponent: configuratorAvatar,
        },
        {
          demoName: "Avatar.demo.link",
          demoComponent: linkAvatar,
        },
        {
          demoName: "Avatar.demo.group",
          demoComponent: groupAvatar,
        },
        {
          demoName: "Avatar.demo.groupTooltip",
          demoComponent: groupTooltipAvatar,
        },
        {
          demoName: "Avatar.demo.gradient",
          demoComponent: gradientAvatar,
        },
        {
          demoName: "Avatar.demo.initials",
          demoComponent: initialsAvatar,
        },
        {
          demoName: "Avatar.demo.allowedColors",
          demoComponent: allowedColorsAvatar,
        },
      ],
    },
    {
      pageName: "BackgroundImage",
      demo: [
        {
          demoName: "BackgroundImage.demo.usage",
          demoComponent: usageBackgroundImage,
        },
      ],
    },
    {
      pageName: "Badge",
      demo: [
        {
          demoName: "Badge.demo.usage",
          demoComponent: usageBadge,
        },
        {
          demoName: "Badge.demo.fullWidth",
          demoComponent: fullWidthBadge,
        },
        {
          demoName: "Badge.demo.sections",
          demoComponent: sectionsBadge,
        },
        {
          demoName: "Badge.demo.gradient",
          demoComponent: gradientBadge,
        },
        {
          demoName: "Badge.demo.rounded",
          demoComponent: roundedBadge,
        },
        {
          demoName: "Badge.demo.variantColorsResolver",
          demoComponent: variantColorsResolverBadge,
        },
        {
          demoName: "Badge.demo.autoContrast",
          demoComponent: autoContrastBadge,
        },
      ],
    },
    {
      pageName: "Card",
      demo: [
        {
          demoName: "Card.demo.usage",
          demoComponent: usageCard,
        },
        {
          demoName: "Card.demo.link",
          demoComponent: linkCard,
        },
        {
          demoName: "Card.demo.linkSection",
          demoComponent: linkSectionCard,
        },
        {
          demoName: "Card.demo.section",
          demoComponent: sectionCard,
        },
        {
          demoName: "Card.demo.horizontal",
          demoComponent: horizontalCard,
        },
      ],
    },
    {
      pageName: "ColorSwatch",
      demo: [
        {
          demoName: "ColorSwatch.demo.usage",
          demoComponent: usageColorSwatch,
        },
        {
          demoName: "ColorSwatch.demo.component",
          demoComponent: componentColorSwatch,
        },
        {
          demoName: "ColorSwatch.demo.shadow",
          demoComponent: shadowColorSwatch,
        },
      ],
    },
    {
      pageName: "Image",
      demo: [
        {
          demoName: "Image.demo.usage",
          demoComponent: usageImage,
        },
        {
          demoName: "Image.demo.height",
          demoComponent: heightImage,
        },
        {
          demoName: "Image.demo.contain",
          demoComponent: containImage,
        },
        {
          demoName: "Image.demo.fallback",
          demoComponent: fallbackImage,
        },
      ],
    },
    {
      pageName: "Indicator",
      demo: [
        {
          demoName: "Indicator.demo.configurator",
          demoComponent: configuratorIndicator,
        },
        {
          demoName: "Indicator.demo.inline",
          demoComponent: inlineIndicator,
        },
        {
          demoName: "Indicator.demo.offset",
          demoComponent: offsetIndicator,
        },
        {
          demoName: "Indicator.demo.processing",
          demoComponent: processingIndicator,
        },
        {
          demoName: "Indicator.demo.disabled",
          demoComponent: disabledIndicator,
        },
        {
          demoName: "Indicator.demo.maxValue",
          demoComponent: maxValueIndicator,
        },
        {
          demoName: "Indicator.demo.showZero",
          demoComponent: showZeroIndicator,
        },
        {
          demoName: "Indicator.demo.autoContrast",
          demoComponent: autoContrastIndicator,
        },
      ],
    },
    {
      pageName: "Kbd",
      demo: [
        {
          demoName: "Kdb.demo.usage",
          demoComponent: usageKbd,
        },
        {
          demoName: "Kbd.demo.size",
          demoComponent: sizeKbd,
        },
      ],
    },
    {
      pageName: "NumberFormatter",
      demo: [
        {
          demoName: "NumberFormatter.demo.usage",
          demoComponent: usageNumberFormatter,
        },
        {
          demoName: "NumberFormatter.demo.prefixSuffix",
          demoComponent: prefixSuffixNumberFormatter,
        },
        {
          demoName: "NumberFormatter.demo.thousandsSeparator",
          demoComponent: thousandsSeparatorNumberFormatter,
        },
        {
          demoName: "NumberFormatter.demo.decimalScale",
          demoComponent: decimalScaleNumberFormatter,
        },
      ],
    },
    {
      pageName: "Spoiler",
      demo: [
        {
          demoName: "Spoiler.demo.usage",
          demoComponent: usageSpoiler,
        },
        {
          demoName: "Spoiler.demo.transitions",
          demoComponent: transitionsSpoiler,
        },
      ],
    },
    {
      pageName: "ThemeIcon",
      demo: [
        {
          demoName: "ThemeIcon.demo.usage",
          demoComponent: usageThemeIcon,
        },
        {
          demoName: "ThemeIcon.demo.gradient",
          demoComponent: gradientThemeIcon,
        },
        {
          demoName: "ThemeIcon.demo.variantColorsResolver",
          demoComponent: variantColorsResolverThemeIcon,
        },
        {
          demoName: "ThemeIcon.demo.autoContrast",
          demoComponent: autoContrastThemeIcon,
        },
      ],
    },
    {
      pageName: "Timeline",
      demo: [
        {
          demoName: "Timeline.demo.usage",
          demoComponent: usageTimeline,
        },
        {
          demoName: "Timeline.demo.configurator",
          demoComponent: configuratorTimeline,
        },
        {
          demoName: "Timeline.demo.bullet",
          demoComponent: bulletTimeline,
        },
      ],
    },
  ],
};
