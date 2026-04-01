import type { DataResult } from "~/component/demo/type";

import { data as ChartsData } from "./Charts";
import { data as DatesData } from "./Dates";
import { data as OtherextensionsData } from "./Other extensions";
import { data as ScheduleData } from "./Schedule";

export const extData: DataResult[] = [ChartsData, DatesData, OtherextensionsData, ScheduleData];
