import type { MantineDemo } from "@mantinex/demo";

import { image as imageAspectRatio } from "./AspectRatio";
import { map as mapAspectRatio } from "./AspectRatio";
import { video as videoAspectRatio } from "./AspectRatio";
import { flex as flexAspectRatio } from "./AspectRatio";
import { usage as usageCenter } from "./Center";
import { inline as inlineCenter } from "./Center";
import { usage as usageContainer } from "./Container";
import { sizes as sizesContainer } from "./Container";
import { fluid as fluidContainer } from "./Container";
import { responsive as responsiveContainer } from "./Container";
import { breakout as breakoutContainer } from "./Container";
import { configurator as configuratorFlex } from "./Flex";
import { responsive as responsiveFlex } from "./Flex";
import { usage as usageGrid } from "./Grid";
import { growConfigurator as growConfiguratorGrid } from "./Grid";
import { offset as offsetGrid } from "./Grid";
import { order as orderGrid } from "./Grid";
import { rows as rowsGrid } from "./Grid";
import { flexConfigurator as flexConfiguratorGrid } from "./Grid";
import { responsive as responsiveGrid } from "./Grid";
import { columns as columnsGrid } from "./Grid";
import { auto as autoGrid } from "./Grid";
import { content as contentGrid } from "./Grid";
import { gap as gapGrid } from "./Grid";
import { rowColumnGap as rowColumnGapGrid } from "./Grid";
import { columnAlign as columnAlignGrid } from "./Grid";
import { container as containerGrid } from "./Grid";
import { usage as usageGroup } from "./Group";
import { preventGrowOverflow as preventGrowOverflowGroup } from "./Group";
import { usage as usageSimpleGrid } from "./SimpleGrid";
import { responsive as responsiveSimpleGrid } from "./SimpleGrid";
import { container as containerSimpleGrid } from "./SimpleGrid";
import { minColWidth as minColWidthSimpleGrid } from "./SimpleGrid";
import { autoFlow as autoFlowSimpleGrid } from "./SimpleGrid";
import { autoRows as autoRowsSimpleGrid } from "./SimpleGrid";
import { horizontal as horizontalSpace } from "./Space";
import { vertical as verticalSpace } from "./Space";
import { configurator as configuratorStack } from "./Stack";

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
  category: "Layout",
  pages: [
    {
      pageName: "AspectRatio",
      demo: [
        {
          demoName: "AspectRatio.demo.image",
          demoComponent: imageAspectRatio,
        },
        {
          demoName: "AspectRatio.demo.map",
          demoComponent: mapAspectRatio,
        },
        {
          demoName: "AspectRatio.demo.video",
          demoComponent: videoAspectRatio,
        },
        {
          demoName: "AspectRatio.demo.flex",
          demoComponent: flexAspectRatio,
        },
      ],
    },
    {
      pageName: "Center",
      demo: [
        {
          demoName: "Center.demo.usage",
          demoComponent: usageCenter,
        },
        {
          demoName: "Center.demo.inline",
          demoComponent: inlineCenter,
        },
      ],
    },
    {
      pageName: "Container",
      demo: [
        {
          demoName: "Container.demo.usage",
          demoComponent: usageContainer,
        },
        {
          demoName: "Container.demo.sizes",
          demoComponent: sizesContainer,
        },
        {
          demoName: "Container.demo.fluid",
          demoComponent: fluidContainer,
        },
        {
          demoName: "Container.demo.responsive",
          demoComponent: responsiveContainer,
        },
        {
          demoName: "Container.demo.breakout",
          demoComponent: breakoutContainer,
        },
      ],
    },
    {
      pageName: "Flex",
      demo: [
        {
          demoName: "Flex.demo.configurator",
          demoComponent: configuratorFlex,
        },
        {
          demoName: "Flex.demo.responsive",
          demoComponent: responsiveFlex,
        },
      ],
    },
    {
      pageName: "Grid",
      demo: [
        {
          demoName: "Grid.demo.usage",
          demoComponent: usageGrid,
        },
        {
          demoName: "Grid.demo.growConfigurator",
          demoComponent: growConfiguratorGrid,
        },
        {
          demoName: "Grid.demo.offset",
          demoComponent: offsetGrid,
        },
        {
          demoName: "Grid.demo.order",
          demoComponent: orderGrid,
        },
        {
          demoName: "Grid.demo.rows",
          demoComponent: rowsGrid,
        },
        {
          demoName: "Grid.demo.flexConfigurator",
          demoComponent: flexConfiguratorGrid,
        },
        {
          demoName: "Grid.demo.responsive",
          demoComponent: responsiveGrid,
        },
        {
          demoName: "Grid.demo.columns",
          demoComponent: columnsGrid,
        },
        {
          demoName: "Grid.demo.auto",
          demoComponent: autoGrid,
        },
        {
          demoName: "Grid.demo.content",
          demoComponent: contentGrid,
        },
        {
          demoName: "Grid.demo.gap",
          demoComponent: gapGrid,
        },
        {
          demoName: "Grid.demo.rowColumnGap",
          demoComponent: rowColumnGapGrid,
        },
        {
          demoName: "Grid.demo.columnAlign",
          demoComponent: columnAlignGrid,
        },
        {
          demoName: "Grid.demo.container",
          demoComponent: containerGrid,
        },
      ],
    },
    {
      pageName: "Group",
      demo: [
        {
          demoName: "Group.demo.usage",
          demoComponent: usageGroup,
        },
        {
          demoName: "Group.demo.preventGrowOverflow",
          demoComponent: preventGrowOverflowGroup,
        },
      ],
    },
    {
      pageName: "SimpleGrid",
      demo: [
        {
          demoName: "SimpleGrid.demo.usage",
          demoComponent: usageSimpleGrid,
        },
        {
          demoName: "SimpleGrid.demo.responsive",
          demoComponent: responsiveSimpleGrid,
        },
        {
          demoName: "SimpleGrid.demo.container",
          demoComponent: containerSimpleGrid,
        },
        {
          demoName: "SimpleGrid.demo.minColWidth",
          demoComponent: minColWidthSimpleGrid,
        },
        {
          demoName: "SimpleGrid.demo.autoFlow",
          demoComponent: autoFlowSimpleGrid,
        },
        {
          demoName: "SimpleGrid.demo.autoRows",
          demoComponent: autoRowsSimpleGrid,
        },
      ],
    },
    {
      pageName: "Space",
      demo: [
        {
          demoName: "Space.demo.horizontal",
          demoComponent: horizontalSpace,
        },
        {
          demoName: "Space.demo.vertical",
          demoComponent: verticalSpace,
        },
      ],
    },
    {
      pageName: "Stack",
      demo: [
        {
          demoName: "Stack.demo.configurator",
          demoComponent: configuratorStack,
        },
      ],
    },
  ],
};
