import type { MantineDemo } from "@mantinex/demo";

import { usage as usageBlockquote } from "./Blockquote";
import { usage as usageCode } from "./Code";
import { colors as colorsCode } from "./Code";
import { block as blockCode } from "./Code";
import { usage as usageHighlight } from "./Highlight";
import { multiple as multipleHighlight } from "./Highlight";
import { styles as stylesHighlight } from "./Highlight";
import { props as propsHighlight } from "./Highlight";
import { colors as colorsHighlight } from "./Highlight";
import { wholeword as wholewordHighlight } from "./Highlight";
import { configurator as configuratorList } from "./List";
import { icon as iconList } from "./List";
import { nested as nestedList } from "./List";
import { start as startList } from "./List";
import { reversed as reversedList } from "./List";
import { value as valueList } from "./List";
import { usage as usageMark } from "./Mark";
import { usage as usageTable } from "./Table";
import { captions as captionsTable } from "./Table";
import { configurator as configuratorTable } from "./Table";
import { spacingConfigurator as spacingConfiguratorTable } from "./Table";
import { scrollContainer as scrollContainerTable } from "./Table";
import { scrollContainerMaxHeight as scrollContainerMaxHeightTable } from "./Table";
import { scrollContainerNative as scrollContainerNativeTable } from "./Table";
import { scrollContainerNativeMaxHeight as scrollContainerNativeMaxHeightTable } from "./Table";
import { rowSelection as rowSelectionTable } from "./Table";
import { data as dataTable } from "./Table";
import { stickyHeader as stickyHeaderTable } from "./Table";
import { vertical as verticalTable } from "./Table";
import { tabularNums as tabularNumsTable } from "./Table";
import { usage as usageText } from "./Text";
import { linesConfigurator as linesConfiguratorText } from "./Text";
import { lineClamp as lineClampText } from "./Text";
import { gradient as gradientText } from "./Text";
import { inherit as inheritText } from "./Text";
import { truncate as truncateText } from "./Text";
import { usage as usageTitle } from "./Title";
import { size as sizeTitle } from "./Title";
import { lineClamp as lineClampTitle } from "./Title";
import { textWrap as textWrapTitle } from "./Title";
import { usage as usageTypography } from "./Typography";
import { all as allTypography } from "./Typography";

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
  category: "Typography",
  pages: [
    {
      pageName: "Blockquote",
      demo: [
        {
          demoName: "Blockquote.demo.usage",
          demoComponent: usageBlockquote,
        },
      ],
    },
    {
      pageName: "Code",
      demo: [
        {
          demoName: "Code.demo.usage",
          demoComponent: usageCode,
        },
        {
          demoName: "Code.demo.colors",
          demoComponent: colorsCode,
        },
        {
          demoName: "Code.demo.block",
          demoComponent: blockCode,
        },
      ],
    },
    {
      pageName: "Highlight",
      demo: [
        {
          demoName: "Highlight.demo.usage",
          demoComponent: usageHighlight,
        },
        {
          demoName: "Highlight.demo.multiple",
          demoComponent: multipleHighlight,
        },
        {
          demoName: "Highlight.demo.styles",
          demoComponent: stylesHighlight,
        },
        {
          demoName: "Highlight.demo.props",
          demoComponent: propsHighlight,
        },
        {
          demoName: "Highlight.demo.colors",
          demoComponent: colorsHighlight,
        },
        {
          demoName: "Highlight.demo.wholeword",
          demoComponent: wholewordHighlight,
        },
      ],
    },
    {
      pageName: "List",
      demo: [
        {
          demoName: "List.demo.configurator",
          demoComponent: configuratorList,
        },
        {
          demoName: "List.demo.icon",
          demoComponent: iconList,
        },
        {
          demoName: "List.demo.nested",
          demoComponent: nestedList,
        },
        {
          demoName: "List.demo.start",
          demoComponent: startList,
        },
        {
          demoName: "List.demo.reversed",
          demoComponent: reversedList,
        },
        {
          demoName: "List.demo.value",
          demoComponent: valueList,
        },
      ],
    },
    {
      pageName: "Mark",
      demo: [
        {
          demoName: "Mark.demo.usage",
          demoComponent: usageMark,
        },
      ],
    },
    {
      pageName: "Table",
      demo: [
        {
          demoName: "Table.demo.usage",
          demoComponent: usageTable,
        },
        {
          demoName: "Table.demo.captions",
          demoComponent: captionsTable,
        },
        {
          demoName: "Table.demo.configurator",
          demoComponent: configuratorTable,
        },
        {
          demoName: "Table.demo.spacingConfigurator",
          demoComponent: spacingConfiguratorTable,
        },
        {
          demoName: "Table.demo.scrollContainer",
          demoComponent: scrollContainerTable,
        },
        {
          demoName: "Table.demo.scrollContainerMaxHeight",
          demoComponent: scrollContainerMaxHeightTable,
        },
        {
          demoName: "Table.demo.scrollContainerNative",
          demoComponent: scrollContainerNativeTable,
        },
        {
          demoName: "Table.demo.scrollContainerNativeMaxHeight",
          demoComponent: scrollContainerNativeMaxHeightTable,
        },
        {
          demoName: "Table.demo.rowSelection",
          demoComponent: rowSelectionTable,
        },
        {
          demoName: "Table.demo.data",
          demoComponent: dataTable,
        },
        {
          demoName: "Table.demo.stickyHeader",
          demoComponent: stickyHeaderTable,
        },
        {
          demoName: "Table.demo.vertical",
          demoComponent: verticalTable,
        },
        {
          demoName: "Table.demo.tabularNums",
          demoComponent: tabularNumsTable,
        },
      ],
    },
    {
      pageName: "Text",
      demo: [
        {
          demoName: "Text.demo.usage",
          demoComponent: usageText,
        },
        {
          demoName: "Text.demo.linesConfigurator",
          demoComponent: linesConfiguratorText,
        },
        {
          demoName: "Text.demo.lineClamp",
          demoComponent: lineClampText,
        },
        {
          demoName: "Text.demo.gradient",
          demoComponent: gradientText,
        },
        {
          demoName: "Text.demo.inherit",
          demoComponent: inheritText,
        },
        {
          demoName: "Text.demo.truncate",
          demoComponent: truncateText,
        },
      ],
    },
    {
      pageName: "Title",
      demo: [
        {
          demoName: "Title.demo.usage",
          demoComponent: usageTitle,
        },
        {
          demoName: "Title.demo.size",
          demoComponent: sizeTitle,
        },
        {
          demoName: "Title.demo.lineClamp",
          demoComponent: lineClampTitle,
        },
        {
          demoName: "Title.demo.textWrap",
          demoComponent: textWrapTitle,
        },
      ],
    },
    {
      pageName: "Typography",
      demo: [
        {
          demoName: "Typography.demo.usage",
          demoComponent: usageTypography,
        },
        {
          demoName: "Typography.demo.all",
          demoComponent: allTypography,
        },
      ],
    },
  ],
};
