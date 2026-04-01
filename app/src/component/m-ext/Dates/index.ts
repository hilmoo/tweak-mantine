import type { MantineDemo } from "@mantinex/demo";

import { usage as usageCalendar } from "./Calendar";
import { isStatic as isStaticCalendar } from "./Calendar";
import { picker as pickerCalendar } from "./Calendar";
import { weekPicker as weekPickerCalendar } from "./Calendar";
import { fullWidth as fullWidthCalendar } from "./Calendar";
import { usage as usageDateInput } from "./DateInput";
import { clearable as clearableDateInput } from "./DateInput";
import { clearSectionMode as clearSectionModeDateInput } from "./DateInput";
import { configurator as configuratorDateInput } from "./DateInput";
import { format as formatDateInput } from "./DateInput";
import { parser as parserDateInput } from "./DateInput";
import { minMax as minMaxDateInput } from "./DateInput";
import { deselect as deselectDateInput } from "./DateInput";
import { time as timeDateInput } from "./DateInput";
import { disabled as disabledDateInput } from "./DateInput";
import { controlledDate as controlledDateDatePicker } from "./DatePicker";
import { controlProps as controlPropsDatePicker } from "./DatePicker";
import { defaultDate as defaultDateDatePicker } from "./DatePicker";
import { labelFormat as labelFormatDatePicker } from "./DatePicker";
import { listFormat as listFormatDatePicker } from "./DatePicker";
import { locale as localeDatePicker } from "./DatePicker";
import { maxLevel as maxLevelDatePicker } from "./DatePicker";
import { minMax as minMaxDatePicker } from "./DatePicker";
import { defaultLevel as defaultLevelDatePicker } from "./DatePicker";
import { firstDayOfWeek as firstDayOfWeekDatePicker } from "./DatePicker";
import { weekendDays as weekendDaysDatePicker } from "./DatePicker";
import { renderDay as renderDayDatePicker } from "./DatePicker";
import { hideWeekdays as hideWeekdaysDatePicker } from "./DatePicker";
import { hideOutsideDates as hideOutsideDatesDatePicker } from "./DatePicker";
import { excludeDate as excludeDateDatePicker } from "./DatePicker";
import { withWeekNumbers as withWeekNumbersDatePicker } from "./DatePicker";
import { presets as presetsDatePicker } from "./DatePicker";
import { presetsRange as presetsRangeDatePicker } from "./DatePicker";
import { headerControlsOrder as headerControlsOrderDatePicker } from "./DatePicker";
import { fullWidth as fullWidthDatePicker } from "./DatePicker";
import { clearSectionMode as clearSectionModeDatePickerInput } from "./DatePickerInput";
import { valueFormat as valueFormatDatePickerInput } from "./DatePickerInput";
import { disabled as disabledDatePickerInput } from "./DatePickerInput";
import { presets as presetsDatePickerInput } from "./DatePickerInput";
import { presetsRange as presetsRangeDatePickerInput } from "./DatePickerInput";
import { minMax as minMaxDatePickerInput } from "./DatePickerInput";
import { controlProps as controlPropsDatePickerInput } from "./DatePickerInput";
import { renderDay as renderDayDatePickerInput } from "./DatePickerInput";
import { excludeDate as excludeDateDatePickerInput } from "./DatePickerInput";
import { defaultLevel as defaultLevelDatePickerInput } from "./DatePickerInput";
import { hideOutsideDates as hideOutsideDatesDatePickerInput } from "./DatePickerInput";
import { hideWeekdays as hideWeekdaysDatePickerInput } from "./DatePickerInput";
import { firstDayOfWeek as firstDayOfWeekDatePickerInput } from "./DatePickerInput";
import { labelFormat as labelFormatDatePickerInput } from "./DatePickerInput";
import { listFormat as listFormatDatePickerInput } from "./DatePickerInput";
import { maxLevel as maxLevelDatePickerInput } from "./DatePickerInput";
import { weekendDays as weekendDaysDatePickerInput } from "./DatePickerInput";
import { withWeekNumbers as withWeekNumbersDatePickerInput } from "./DatePickerInput";
import { headerControlsOrder as headerControlsOrderDatePickerInput } from "./DatePickerInput";
import { usage as usageDateTimePicker } from "./DateTimePicker";
import { withSeconds as withSecondsDateTimePicker } from "./DateTimePicker";
import { modal as modalDateTimePicker } from "./DateTimePicker";
import { configurator as configuratorDateTimePicker } from "./DateTimePicker";
import { clearable as clearableDateTimePicker } from "./DateTimePicker";
import { clearSectionMode as clearSectionModeDateTimePicker } from "./DateTimePicker";
import { format as formatDateTimePicker } from "./DateTimePicker";
import { disabled as disabledDateTimePicker } from "./DateTimePicker";
import { timePickerProps as timePickerPropsDateTimePicker } from "./DateTimePicker";
import { presets as presetsDateTimePicker } from "./DateTimePicker";
import { usage as usageMiniCalendar } from "./MiniCalendar";
import { locale as localeMiniCalendar } from "./MiniCalendar";
import { numberOfDays as numberOfDaysMiniCalendar } from "./MiniCalendar";
import { getDayProps as getDayPropsMiniCalendar } from "./MiniCalendar";
import { minMax as minMaxMiniCalendar } from "./MiniCalendar";
import { controlledDate as controlledDateMonthPicker } from "./MonthPicker";
import { controlProps as controlPropsMonthPicker } from "./MonthPicker";
import { labelFormat as labelFormatMonthPicker } from "./MonthPicker";
import { defaultDate as defaultDateMonthPicker } from "./MonthPicker";
import { minMax as minMaxMonthPicker } from "./MonthPicker";
import { listFormat as listFormatMonthPicker } from "./MonthPicker";
import { maxLevel as maxLevelMonthPicker } from "./MonthPicker";
import { locale as localeMonthPicker } from "./MonthPicker";
import { fullWidth as fullWidthMonthPicker } from "./MonthPicker";
import { clearSectionMode as clearSectionModeMonthPickerInput } from "./MonthPickerInput";
import { valueFormat as valueFormatMonthPickerInput } from "./MonthPickerInput";
import { disabled as disabledMonthPickerInput } from "./MonthPickerInput";
import { minMax as minMaxMonthPickerInput } from "./MonthPickerInput";
import { controlProps as controlPropsMonthPickerInput } from "./MonthPickerInput";
import { labelFormat as labelFormatMonthPickerInput } from "./MonthPickerInput";
import { listFormat as listFormatMonthPickerInput } from "./MonthPickerInput";
import { maxLevel as maxLevelMonthPickerInput } from "./MonthPickerInput";
import { usage as usageTimeGrid } from "./TimeGrid";
import { minMax as minMaxTimeGrid } from "./TimeGrid";
import { allowDeselect as allowDeselectTimeGrid } from "./TimeGrid";
import { disableTime as disableTimeTimeGrid } from "./TimeGrid";
import { amPmLabels as amPmLabelsTimeGrid } from "./TimeGrid";
import { disabled as disabledTimeGrid } from "./TimeGrid";
import { configurator as configuratorTimeInput } from "./TimeInput";
import { withSeconds as withSecondsTimeInput } from "./TimeInput";
import { icon as iconTimeInput } from "./TimeInput";
import { picker as pickerTimeInput } from "./TimeInput";
import { disabled as disabledTimeInput } from "./TimeInput";
import { usage as usageTimePicker } from "./TimePicker";
import { clearable as clearableTimePicker } from "./TimePicker";
import { clearSectionMode as clearSectionModeTimePicker } from "./TimePicker";
import { disabled as disabledTimePicker } from "./TimePicker";
import { readOnly as readOnlyTimePicker } from "./TimePicker";
import { withSeconds as withSecondsTimePicker } from "./TimePicker";
import { format12h as format12hTimePicker } from "./TimePicker";
import { minMax as minMaxTimePicker } from "./TimePicker";
import { withDropdown as withDropdownTimePicker } from "./TimePicker";
import { steps as stepsTimePicker } from "./TimePicker";
import { amPmLabels as amPmLabelsTimePicker } from "./TimePicker";
import { controlledDropdown as controlledDropdownTimePicker } from "./TimePicker";
import { pasteSplit as pasteSplitTimePicker } from "./TimePicker";
import { configurator as configuratorTimePicker } from "./TimePicker";
import { presets as presetsTimePicker } from "./TimePicker";
import { presetsGroups as presetsGroupsTimePicker } from "./TimePicker";
import { presetsRange as presetsRangeTimePicker } from "./TimePicker";
import { dropdownPosition as dropdownPositionTimePicker } from "./TimePicker";
import { dropdownWidth as dropdownWidthTimePicker } from "./TimePicker";
import { withPlaceholders as withPlaceholdersTimePicker } from "./TimePicker";
import { usage as usageTimeValue } from "./TimeValue";
import { withSeconds as withSecondsTimeValue } from "./TimeValue";
import { amPmLabels as amPmLabelsTimeValue } from "./TimeValue";
import { dateObject as dateObjectTimeValue } from "./TimeValue";
import { minMax as minMaxYearPicker } from "./YearPicker";
import { controlProps as controlPropsYearPicker } from "./YearPicker";
import { yearsListFormat as yearsListFormatYearPicker } from "./YearPicker";
import { decadeLabelFormat as decadeLabelFormatYearPicker } from "./YearPicker";
import { defaultDate as defaultDateYearPicker } from "./YearPicker";
import { controlledDate as controlledDateYearPicker } from "./YearPicker";
import { fullWidth as fullWidthYearPicker } from "./YearPicker";
import { clearSectionMode as clearSectionModeYearPickerInput } from "./YearPickerInput";
import { valueFormat as valueFormatYearPickerInput } from "./YearPickerInput";
import { disabled as disabledYearPickerInput } from "./YearPickerInput";
import { minMax as minMaxYearPickerInput } from "./YearPickerInput";
import { controlProps as controlPropsYearPickerInput } from "./YearPickerInput";
import { yearsListFormat as yearsListFormatYearPickerInput } from "./YearPickerInput";
import { decadeLabelFormat as decadeLabelFormatYearPickerInput } from "./YearPickerInput";
import { getSharedPickerDemos as getSharedPickerDemos_shared } from "./_shared";
import { getSharedPickerInputDemos as getSharedPickerInputDemos_shared } from "./_shared";

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
  category: "Dates",
  pages: [
    {
      pageName: "Calendar",
      demo: [
        {
          demoName: "Calendar.demo.usage",
          demoComponent: usageCalendar,
        },
        {
          demoName: "Calendar.demo.isStatic",
          demoComponent: isStaticCalendar,
        },
        {
          demoName: "Calendar.demo.picker",
          demoComponent: pickerCalendar,
        },
        {
          demoName: "Calendar.demo.weekPicker",
          demoComponent: weekPickerCalendar,
        },
        {
          demoName: "Calendar.demo.fullWidth",
          demoComponent: fullWidthCalendar,
        },
      ],
    },
    {
      pageName: "DateInput",
      demo: [
        {
          demoName: "DateInput.demo.usage",
          demoComponent: usageDateInput,
        },
        {
          demoName: "DateInput.demo.clearable",
          demoComponent: clearableDateInput,
        },
        {
          demoName: "DateInput.demo.clearSectionMode",
          demoComponent: clearSectionModeDateInput,
        },
        {
          demoName: "DateInput.demo.configurator",
          demoComponent: configuratorDateInput,
        },
        {
          demoName: "DateInput.demo.format",
          demoComponent: formatDateInput,
        },
        {
          demoName: "DateInput.demo.parser",
          demoComponent: parserDateInput,
        },
        {
          demoName: "DateInput.demo.minMax",
          demoComponent: minMaxDateInput,
        },
        {
          demoName: "DateInput.demo.deselect",
          demoComponent: deselectDateInput,
        },
        {
          demoName: "DateInput.demo.time",
          demoComponent: timeDateInput,
        },
        {
          demoName: "DateInput.demo.disabled",
          demoComponent: disabledDateInput,
        },
      ],
    },
    {
      pageName: "DatePicker",
      demo: [
        {
          demoName: "DatePicker.demo.controlledDate",
          demoComponent: controlledDateDatePicker,
        },
        {
          demoName: "DatePicker.demo.controlProps",
          demoComponent: controlPropsDatePicker,
        },
        {
          demoName: "DatePicker.demo.defaultDate",
          demoComponent: defaultDateDatePicker,
        },
        {
          demoName: "DatePicker.demo.labelFormat",
          demoComponent: labelFormatDatePicker,
        },
        {
          demoName: "DatePicker.demo.listFormat",
          demoComponent: listFormatDatePicker,
        },
        {
          demoName: "DatePicker.demo.locale",
          demoComponent: localeDatePicker,
        },
        {
          demoName: "DatePicker.demo.maxLevel",
          demoComponent: maxLevelDatePicker,
        },
        {
          demoName: "DatePicker.demo.minMax",
          demoComponent: minMaxDatePicker,
        },
        {
          demoName: "DatePicker.demo.defaultLevel",
          demoComponent: defaultLevelDatePicker,
        },
        {
          demoName: "DatePicker.demo.firstDayOfWeek",
          demoComponent: firstDayOfWeekDatePicker,
        },
        {
          demoName: "DatePicker.demo.weekendDays",
          demoComponent: weekendDaysDatePicker,
        },
        {
          demoName: "DatePicker.demo.renderDay",
          demoComponent: renderDayDatePicker,
        },
        {
          demoName: "DatePicker.demo.hideWeekdays",
          demoComponent: hideWeekdaysDatePicker,
        },
        {
          demoName: "DatePicker.demo.hideOutsideDates",
          demoComponent: hideOutsideDatesDatePicker,
        },
        {
          demoName: "DatePicker.demo.excludeDate",
          demoComponent: excludeDateDatePicker,
        },
        {
          demoName: "DatePicker.demo.withWeekNumbers",
          demoComponent: withWeekNumbersDatePicker,
        },
        {
          demoName: "DatePicker.demo.presets",
          demoComponent: presetsDatePicker,
        },
        {
          demoName: "DatePicker.demo.presetsRange",
          demoComponent: presetsRangeDatePicker,
        },
        {
          demoName: "DatePicker.demo.headerControlsOrder",
          demoComponent: headerControlsOrderDatePicker,
        },
        {
          demoName: "DatePicker.demo.fullWidth",
          demoComponent: fullWidthDatePicker,
        },
      ],
    },
    {
      pageName: "DatePickerInput",
      demo: [
        {
          demoName: "DatePickerInput.demo.clearSectionMode",
          demoComponent: clearSectionModeDatePickerInput,
        },
        {
          demoName: "DatePickerInput.demo.valueFormat",
          demoComponent: valueFormatDatePickerInput,
        },
        {
          demoName: "DatePickerInput.demo.disabled",
          demoComponent: disabledDatePickerInput,
        },
        {
          demoName: "DatePickerInput.demo.presets",
          demoComponent: presetsDatePickerInput,
        },
        {
          demoName: "DatePickerInput.demo.presetsRange",
          demoComponent: presetsRangeDatePickerInput,
        },
        {
          demoName: "DatePickerInput.demo.minMax",
          demoComponent: minMaxDatePickerInput,
        },
        {
          demoName: "DatePickerInput.demo.controlProps",
          demoComponent: controlPropsDatePickerInput,
        },
        {
          demoName: "DatePickerInput.demo.renderDay",
          demoComponent: renderDayDatePickerInput,
        },
        {
          demoName: "DatePickerInput.demo.excludeDate",
          demoComponent: excludeDateDatePickerInput,
        },
        {
          demoName: "DatePickerInput.demo.defaultLevel",
          demoComponent: defaultLevelDatePickerInput,
        },
        {
          demoName: "DatePickerInput.demo.hideOutsideDates",
          demoComponent: hideOutsideDatesDatePickerInput,
        },
        {
          demoName: "DatePickerInput.demo.hideWeekdays",
          demoComponent: hideWeekdaysDatePickerInput,
        },
        {
          demoName: "DatePickerInput.demo.firstDayOfWeek",
          demoComponent: firstDayOfWeekDatePickerInput,
        },
        {
          demoName: "DatePickerInput.demo.labelFormat",
          demoComponent: labelFormatDatePickerInput,
        },
        {
          demoName: "DatePickerInput.demo.listFormat",
          demoComponent: listFormatDatePickerInput,
        },
        {
          demoName: "DatePickerInput.demo.maxLevel",
          demoComponent: maxLevelDatePickerInput,
        },
        {
          demoName: "DatePickerInput.demo.weekendDays",
          demoComponent: weekendDaysDatePickerInput,
        },
        {
          demoName: "DatePickerInput.demo.withWeekNumbers",
          demoComponent: withWeekNumbersDatePickerInput,
        },
        {
          demoName: "DatePickerInput.demo.headerControlsOrder",
          demoComponent: headerControlsOrderDatePickerInput,
        },
      ],
    },
    {
      pageName: "DateTimePicker",
      demo: [
        {
          demoName: "DateTimePicker.demo.usage",
          demoComponent: usageDateTimePicker,
        },
        {
          demoName: "DateTimePicker.demo.withSeconds",
          demoComponent: withSecondsDateTimePicker,
        },
        {
          demoName: "DateTimePicker.demo.modal",
          demoComponent: modalDateTimePicker,
        },
        {
          demoName: "DateTimePicker.demo.configurator",
          demoComponent: configuratorDateTimePicker,
        },
        {
          demoName: "DateTimePicker.demo.clearable",
          demoComponent: clearableDateTimePicker,
        },
        {
          demoName: "DateTimePicker.demo.clearSectionMode",
          demoComponent: clearSectionModeDateTimePicker,
        },
        {
          demoName: "DateTimePicker.demo.format",
          demoComponent: formatDateTimePicker,
        },
        {
          demoName: "DateTimePicker.demo.disabled",
          demoComponent: disabledDateTimePicker,
        },
        {
          demoName: "DateTimePicker.demo.timePickerProps",
          demoComponent: timePickerPropsDateTimePicker,
        },
        {
          demoName: "DateTimePicker.demo.presets",
          demoComponent: presetsDateTimePicker,
        },
      ],
    },
    {
      pageName: "MiniCalendar",
      demo: [
        {
          demoName: "MiniCalendar.demo.usage",
          demoComponent: usageMiniCalendar,
        },
        {
          demoName: "MiniCalendar.demo.locale",
          demoComponent: localeMiniCalendar,
        },
        {
          demoName: "MiniCalendar.demo.numberOfDays",
          demoComponent: numberOfDaysMiniCalendar,
        },
        {
          demoName: "MiniCalendar.demo.getDayProps",
          demoComponent: getDayPropsMiniCalendar,
        },
        {
          demoName: "MiniCalendar.demo.minMax",
          demoComponent: minMaxMiniCalendar,
        },
      ],
    },
    {
      pageName: "MonthPicker",
      demo: [
        {
          demoName: "MonthPicker.demo.controlledDate",
          demoComponent: controlledDateMonthPicker,
        },
        {
          demoName: "MonthPicker.demo.controlProps",
          demoComponent: controlPropsMonthPicker,
        },
        {
          demoName: "MonthPicker.demo.labelFormat",
          demoComponent: labelFormatMonthPicker,
        },
        {
          demoName: "MonthPicker.demo.defaultDate",
          demoComponent: defaultDateMonthPicker,
        },
        {
          demoName: "MonthPicker.demo.minMax",
          demoComponent: minMaxMonthPicker,
        },
        {
          demoName: "MonthPicker.demo.listFormat",
          demoComponent: listFormatMonthPicker,
        },
        {
          demoName: "MonthPicker.demo.maxLevel",
          demoComponent: maxLevelMonthPicker,
        },
        {
          demoName: "MonthPicker.demo.locale",
          demoComponent: localeMonthPicker,
        },
        {
          demoName: "MonthPicker.demo.fullWidth",
          demoComponent: fullWidthMonthPicker,
        },
      ],
    },
    {
      pageName: "MonthPickerInput",
      demo: [
        {
          demoName: "MonthPickerInput.demo.clearSectionMode",
          demoComponent: clearSectionModeMonthPickerInput,
        },
        {
          demoName: "MonthPickerInput.demo.valueFormat",
          demoComponent: valueFormatMonthPickerInput,
        },
        {
          demoName: "MonthPickerInput.demo.disabled",
          demoComponent: disabledMonthPickerInput,
        },
        {
          demoName: "MonthPickerInput.demo.minMax",
          demoComponent: minMaxMonthPickerInput,
        },
        {
          demoName: "MonthPickerInput.demo.controlProps",
          demoComponent: controlPropsMonthPickerInput,
        },
        {
          demoName: "MonthPickerInput.demo.labelFormat",
          demoComponent: labelFormatMonthPickerInput,
        },
        {
          demoName: "MonthPickerInput.demo.listFormat",
          demoComponent: listFormatMonthPickerInput,
        },
        {
          demoName: "MonthPickerInput.demo.maxLevel",
          demoComponent: maxLevelMonthPickerInput,
        },
      ],
    },
    {
      pageName: "TimeGrid",
      demo: [
        {
          demoName: "TimeGrid.demo.usage",
          demoComponent: usageTimeGrid,
        },
        {
          demoName: "TimeGrid.demo.minMax",
          demoComponent: minMaxTimeGrid,
        },
        {
          demoName: "TimeGrid.demo.allowDeselect",
          demoComponent: allowDeselectTimeGrid,
        },
        {
          demoName: "TimeGrid.demo.disableTime",
          demoComponent: disableTimeTimeGrid,
        },
        {
          demoName: "TimeGrid.demo.amPmLabels",
          demoComponent: amPmLabelsTimeGrid,
        },
        {
          demoName: "TimeGrid.demo.disabled",
          demoComponent: disabledTimeGrid,
        },
      ],
    },
    {
      pageName: "TimeInput",
      demo: [
        {
          demoName: "TimeInput.demo.configurator",
          demoComponent: configuratorTimeInput,
        },
        {
          demoName: "TimeInput.demo.withSeconds",
          demoComponent: withSecondsTimeInput,
        },
        {
          demoName: "TimeInput.demo.icon",
          demoComponent: iconTimeInput,
        },
        {
          demoName: "TimeInput.demo.picker",
          demoComponent: pickerTimeInput,
        },
        {
          demoName: "TimeInput.demo.disabled",
          demoComponent: disabledTimeInput,
        },
      ],
    },
    {
      pageName: "TimePicker",
      demo: [
        {
          demoName: "TimePicker.demo.usage",
          demoComponent: usageTimePicker,
        },
        {
          demoName: "TimePicker.demo.clearable",
          demoComponent: clearableTimePicker,
        },
        {
          demoName: "TimePicker.demo.clearSectionMode",
          demoComponent: clearSectionModeTimePicker,
        },
        {
          demoName: "TimePicker.demo.disabled",
          demoComponent: disabledTimePicker,
        },
        {
          demoName: "TimePicker.demo.readOnly",
          demoComponent: readOnlyTimePicker,
        },
        {
          demoName: "TimePicker.demo.withSeconds",
          demoComponent: withSecondsTimePicker,
        },
        {
          demoName: "TimePicker.demo.format12h",
          demoComponent: format12hTimePicker,
        },
        {
          demoName: "TimePicker.demo.minMax",
          demoComponent: minMaxTimePicker,
        },
        {
          demoName: "TimePicker.demo.withDropdown",
          demoComponent: withDropdownTimePicker,
        },
        {
          demoName: "TimePicker.demo.steps",
          demoComponent: stepsTimePicker,
        },
        {
          demoName: "TimePicker.demo.amPmLabels",
          demoComponent: amPmLabelsTimePicker,
        },
        {
          demoName: "TimePicker.demo.controlledDropdown",
          demoComponent: controlledDropdownTimePicker,
        },
        {
          demoName: "TimePicker.demo.pasteSplit",
          demoComponent: pasteSplitTimePicker,
        },
        {
          demoName: "TimePicker.demo.configurator",
          demoComponent: configuratorTimePicker,
        },
        {
          demoName: "TimePicker.demo.presets",
          demoComponent: presetsTimePicker,
        },
        {
          demoName: "TimePicker.demo.presetsGroups",
          demoComponent: presetsGroupsTimePicker,
        },
        {
          demoName: "TimePicker.demo.presetsRange",
          demoComponent: presetsRangeTimePicker,
        },
        {
          demoName: "TimePicker.demo.dropdownPosition",
          demoComponent: dropdownPositionTimePicker,
        },
        {
          demoName: "TimePicker.demo.dropdownWidth",
          demoComponent: dropdownWidthTimePicker,
        },
        {
          demoName: "TimePicker.demo.withPlaceholders",
          demoComponent: withPlaceholdersTimePicker,
        },
      ],
    },
    {
      pageName: "TimeValue",
      demo: [
        {
          demoName: "TimeValue.demo.usage",
          demoComponent: usageTimeValue,
        },
        {
          demoName: "TimeValue.demo.withSeconds",
          demoComponent: withSecondsTimeValue,
        },
        {
          demoName: "TimeValue.demo.amPmLabels",
          demoComponent: amPmLabelsTimeValue,
        },
        {
          demoName: "TimeValue.demo.dateObject",
          demoComponent: dateObjectTimeValue,
        },
      ],
    },
    {
      pageName: "YearPicker",
      demo: [
        {
          demoName: "YearPicker.demo.minMax",
          demoComponent: minMaxYearPicker,
        },
        {
          demoName: "YearPicker.demo.controlProps",
          demoComponent: controlPropsYearPicker,
        },
        {
          demoName: "YearPicker.demo.yearsListFormat",
          demoComponent: yearsListFormatYearPicker,
        },
        {
          demoName: "YearPicker.demo.decadeLabelFormat",
          demoComponent: decadeLabelFormatYearPicker,
        },
        {
          demoName: "YearPicker.demo.defaultDate",
          demoComponent: defaultDateYearPicker,
        },
        {
          demoName: "YearPicker.demo.controlledDate",
          demoComponent: controlledDateYearPicker,
        },
        {
          demoName: "YearPicker.demo.fullWidth",
          demoComponent: fullWidthYearPicker,
        },
      ],
    },
    {
      pageName: "YearPickerInput",
      demo: [
        {
          demoName: "YearPickerInput.demo.clearSectionMode",
          demoComponent: clearSectionModeYearPickerInput,
        },
        {
          demoName: "YearPickerInput.demo.valueFormat",
          demoComponent: valueFormatYearPickerInput,
        },
        {
          demoName: "YearPickerInput.demo.disabled",
          demoComponent: disabledYearPickerInput,
        },
        {
          demoName: "YearPickerInput.demo.minMax",
          demoComponent: minMaxYearPickerInput,
        },
        {
          demoName: "YearPickerInput.demo.controlProps",
          demoComponent: controlPropsYearPickerInput,
        },
        {
          demoName: "YearPickerInput.demo.yearsListFormat",
          demoComponent: yearsListFormatYearPickerInput,
        },
        {
          demoName: "YearPickerInput.demo.decadeLabelFormat",
          demoComponent: decadeLabelFormatYearPickerInput,
        },
      ],
    },
    {
      pageName: "_shared",
      demo: [
        {
          demoName: "get-shared-picker-demos",
          demoComponent: getSharedPickerDemos_shared,
        },
        {
          demoName: "get-shared-picker-input-demos",
          demoComponent: getSharedPickerInputDemos_shared,
        },
      ],
    },
  ],
};
