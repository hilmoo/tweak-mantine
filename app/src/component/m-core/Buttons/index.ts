import type { MantineDemo } from "@mantinex/demo";

import { usage as usageActionIcon } from "./ActionIcon";
import { group as groupActionIcon } from "./ActionIcon";
import { size as sizeActionIcon } from "./ActionIcon";
import { gradient as gradientActionIcon } from "./ActionIcon";
import { disabled as disabledActionIcon } from "./ActionIcon";
import { disabledLink as disabledLinkActionIcon } from "./ActionIcon";
import { disabledTooltip as disabledTooltipActionIcon } from "./ActionIcon";
import { disabledStyles as disabledStylesActionIcon } from "./ActionIcon";
import { loading as loadingActionIcon } from "./ActionIcon";
import { loaderProps as loaderPropsActionIcon } from "./ActionIcon";
import { customVariant as customVariantActionIcon } from "./ActionIcon";
import { customSize as customSizeActionIcon } from "./ActionIcon";
import { variantColorsResolver as variantColorsResolverActionIcon } from "./ActionIcon";
import { autoContrast as autoContrastActionIcon } from "./ActionIcon";
import { inputSize as inputSizeActionIcon } from "./ActionIcon";
import { groupSection as groupSectionActionIcon } from "./ActionIcon";
import { configurator as configuratorButton } from "./Button";
import { disabled as disabledButton } from "./Button";
import { disabledStyles as disabledStylesButton } from "./Button";
import { compact as compactButton } from "./Button";
import { loading as loadingButton } from "./Button";
import { loaderProps as loaderPropsButton } from "./Button";
import { gradient as gradientButton } from "./Button";
import { fullWidth as fullWidthButton } from "./Button";
import { group as groupButton } from "./Button";
import { disabledTooltip as disabledTooltipButton } from "./Button";
import { customVariant as customVariantButton } from "./Button";
import { sections as sectionsButton } from "./Button";
import { sectionsJustify as sectionsJustifyButton } from "./Button";
import { disabledLink as disabledLinkButton } from "./Button";
import { autoContrast as autoContrastButton } from "./Button";
import { groupSection as groupSectionButton } from "./Button";
import { usage as usageCloseButton } from "./CloseButton";
import { icon as iconCloseButton } from "./CloseButton";
import { usage as usageCopyButton } from "./CopyButton";
import { timeout as timeoutCopyButton } from "./CopyButton";
import { usage as usageFileButton } from "./FileButton";
import { multiple as multipleFileButton } from "./FileButton";
import { reset as resetFileButton } from "./FileButton";
import { usage as usageUnstyledButton } from "./UnstyledButton";

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
  category: "Buttons",
  pages: [
    {
      pageName: "ActionIcon",
      demo: [
        {
          demoName: "ActionIcon.demo.usage",
          demoComponent: usageActionIcon,
        },
        {
          demoName: "ActionIcon.demo.group",
          demoComponent: groupActionIcon,
        },
        {
          demoName: "ActionIcon.demo.size",
          demoComponent: sizeActionIcon,
        },
        {
          demoName: "ActionIcon.demo.gradient",
          demoComponent: gradientActionIcon,
        },
        {
          demoName: "ActionIcon.demo.disabled",
          demoComponent: disabledActionIcon,
        },
        {
          demoName: "ActionIcon.demo.disabledLink",
          demoComponent: disabledLinkActionIcon,
        },
        {
          demoName: "ActionIcon.demo.disabledTooltip",
          demoComponent: disabledTooltipActionIcon,
        },
        {
          demoName: "ActionIcon.demo.disabledStyles",
          demoComponent: disabledStylesActionIcon,
        },
        {
          demoName: "ActionIcon.demo.loading",
          demoComponent: loadingActionIcon,
        },
        {
          demoName: "ActionIcon.demo.loaderProps",
          demoComponent: loaderPropsActionIcon,
        },
        {
          demoName: "ActionIcon.demo.customVariant",
          demoComponent: customVariantActionIcon,
        },
        {
          demoName: "ActionIcon.demo.customSize",
          demoComponent: customSizeActionIcon,
        },
        {
          demoName: "ActionIcon.demo.variantColorsResolver",
          demoComponent: variantColorsResolverActionIcon,
        },
        {
          demoName: "ActionIcon.demo.autoContrast",
          demoComponent: autoContrastActionIcon,
        },
        {
          demoName: "ActionIcon.demo.inputSize",
          demoComponent: inputSizeActionIcon,
        },
        {
          demoName: "ActionIcon.demo.groupSection",
          demoComponent: groupSectionActionIcon,
        },
      ],
    },
    {
      pageName: "Button",
      demo: [
        {
          demoName: "Button.demo.configurator",
          demoComponent: configuratorButton,
        },
        {
          demoName: "Button.demo.disabled",
          demoComponent: disabledButton,
        },
        {
          demoName: "Button.demo.disabledStyles",
          demoComponent: disabledStylesButton,
        },
        {
          demoName: "Button.demo.compact",
          demoComponent: compactButton,
        },
        {
          demoName: "Button.demo.loading",
          demoComponent: loadingButton,
        },
        {
          demoName: "Button.demo.loaderProps",
          demoComponent: loaderPropsButton,
        },
        {
          demoName: "Button.demo.gradient",
          demoComponent: gradientButton,
        },
        {
          demoName: "Button.demo.fullWidth",
          demoComponent: fullWidthButton,
        },
        {
          demoName: "Button.demo.group",
          demoComponent: groupButton,
        },
        {
          demoName: "Button.demo.disabledTooltip",
          demoComponent: disabledTooltipButton,
        },
        {
          demoName: "Button.demo.customVariant",
          demoComponent: customVariantButton,
        },
        {
          demoName: "Button.demo.sections",
          demoComponent: sectionsButton,
        },
        {
          demoName: "Button.demo.sectionsJustify",
          demoComponent: sectionsJustifyButton,
        },
        {
          demoName: "Button.demo.disabledLink",
          demoComponent: disabledLinkButton,
        },
        {
          demoName: "Button.demo.autoContrast",
          demoComponent: autoContrastButton,
        },
        {
          demoName: "Button.demo.groupSection",
          demoComponent: groupSectionButton,
        },
      ],
    },
    {
      pageName: "CloseButton",
      demo: [
        {
          demoName: "CloseButton.demo.usage",
          demoComponent: usageCloseButton,
        },
        {
          demoName: "CloseButton.demo.icon",
          demoComponent: iconCloseButton,
        },
      ],
    },
    {
      pageName: "CopyButton",
      demo: [
        {
          demoName: "CopyButton.demo.usage",
          demoComponent: usageCopyButton,
        },
        {
          demoName: "CopyButton.demo.timeout",
          demoComponent: timeoutCopyButton,
        },
      ],
    },
    {
      pageName: "FileButton",
      demo: [
        {
          demoName: "FileButton.demo.usage",
          demoComponent: usageFileButton,
        },
        {
          demoName: "FileButton.demo.multiple",
          demoComponent: multipleFileButton,
        },
        {
          demoName: "FileButton.demo.reset",
          demoComponent: resetFileButton,
        },
      ],
    },
    {
      pageName: "UnstyledButton",
      demo: [
        {
          demoName: "UnstyledButton.demo.usage",
          demoComponent: usageUnstyledButton,
        },
      ],
    },
  ],
};
