import { createTheme } from "@mantine/core";
import {
  Calendar,
  CalendarHeader,
  DateInput,
  DatePicker,
  DatePickerInput,
  DateTimePicker,
  Day,
  MiniCalendar,
  Month,
  MonthPicker,
  MonthPickerInput,
  PickerControl,
  TimePicker,
} from "@mantine/dates";
import style from "./theme.module.css";

export const TWEAK_DATES_THEME = createTheme({
  components: {
    Calendar: Calendar.extend({
      classNames: {
        calendarHeaderControl: style.calendarHeaderLevelControl,
        calendarHeaderLevel: style.calendarHeaderLevelControl,
        day: style.dayDay,
      },
    }),
    CalendarHeader: CalendarHeader.extend({
      classNames: {
        calendarHeaderLevel: style.calendarHeaderLevelControl,
        calendarHeaderControl: style.calendarHeaderLevelControl,
      },
    }),
    PickerControl: PickerControl.extend({
      classNames: {
        pickerControl: style.pickerControlPickerControl,
      },
    }),
    Day: Day.extend({
      classNames: {
        day: style.dayDay,
      },
    }),
    Month: Month.extend({
      classNames: {
        day: style.dayDay,
      },
    }),
    DatePicker: DatePicker.extend({
      classNames: {
        presetsList: style.datePickerPresetsList,
        presetButton: style.datePickerPresetButton,
      },
    }),
    MiniCalendar: MiniCalendar.extend({
      classNames: {
        day: style.miniCalendarDay,
        control: style.miniCalendarControl,
      },
    }),
    TimePicker: TimePicker.extend({
      classNames: {
        controlsListGroup: style.timePickerControlsListGroup,
        presetControl: style.timePickerPresetControl,
        presetsGroupLabel: style.timePickerPresetsGroupLabel,
      },
    }),
    DateInput: DateInput.extend({
      classNames: {
        day: style.dayDay,
        calendarHeaderControl: style.calendarHeaderLevelControl,
        calendarHeaderLevel: style.calendarHeaderLevelControl,
      },
    }),
    DatePickerInput: DatePickerInput.extend({
      classNames: {
        day: style.dayDay,
        calendarHeaderControl: style.calendarHeaderLevelControl,
        calendarHeaderLevel: style.calendarHeaderLevelControl,
        presetsList: style.datePickerPresetsList,
        presetButton: style.datePickerPresetButton,
      },
    }),
    DateTimePicker: DateTimePicker.extend({
      classNames: {
        day: style.dayDay,
        calendarHeaderControl: style.calendarHeaderLevelControl,
        calendarHeaderLevel: style.calendarHeaderLevelControl,
        // @ts-ignore
        presetsList: style.datePickerPresetsList,
        presetButton: style.datePickerPresetButton,
      },
    }),
    MonthPicker: MonthPicker.extend({
      classNames: {
        monthsListControl: style.dayDay,
        calendarHeaderControl: style.calendarHeaderLevelControl,
        calendarHeaderLevel: style.calendarHeaderLevelControl,
      },
    }),
    MonthPickerInput: MonthPickerInput.extend({
      classNames: {
        monthsListControl: style.dayDay,
        calendarHeaderControl: style.calendarHeaderLevelControl,
        calendarHeaderLevel: style.calendarHeaderLevelControl,
      },
    }),
  },
});
