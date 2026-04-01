import { createTheme } from "@mantine/core";
import {
  Calendar,
  CalendarHeader,
  DatePicker,
  Day,
  MiniCalendar,
  Month,
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
        calendarHeaderControl: style.calendarHeaderLevelControl,
        calendarHeaderLevel: style.calendarHeaderLevelControl,
        day: style.dayDay,
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
  },
});
