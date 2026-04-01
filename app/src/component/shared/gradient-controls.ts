import { ConfiguratorControlOptions } from "@mantinex/demo";

export const gradientControls: ConfiguratorControlOptions[] = [
  { type: "color", prop: "gradientFrom", initialValue: "blue-dev-dev", libraryValue: "__none__" },
  { type: "color", prop: "gradientTo", initialValue: "blue-dev-dev", libraryValue: "__none__" },
  {
    type: "number",
    prop: "gradientDegree",
    initialValue: 90,
    min: 0,
    max: 360,
    libraryValue: "__none__",
  },
];
