import { createTheme } from "@mantine/core";
import {
  DayView,
  MobileMonthView,
  MonthView,
  WeekView,
  YearView,
} from "@mantine/schedule";
import style from "./theme.module.css";

export const TWEAK_SCHEDULE_THEME = createTheme({
  components: {
    DayView: DayView.extend({
      classNames: {
        dayView: style["dayView-dayView"],
        dayViewSlot: style["dayView-dayViewSlot"],
      },
    }),
    MonthView: MonthView.extend({
      classNames: {
        monthView: style["monthView-monthView"],
        monthViewWeekNumber: style["monthView-monthViewWeekNumber"],
        monthViewDay: style["monthView-monthViewDay"],
      },
    }),
    MobileMonthView: MobileMonthView.extend({
      classNames: {
        mobileMonthView: style["mobileMonthView-mobileMonthView"],
        mobileMonthViewWeekNumber: style["mobileMonthView-mobileMonthViewWeekNumber"],
        mobileMonthViewDay: style["mobileMonthView-mobileMonthViewDay"],
        mobileMonthViewEvent: style["mobileMonthView-mobileMonthViewEvent"],
      },
    }),
    WeekView: WeekView.extend({
      classNames: {
        weekView: style["weekView-weekView"],
        weekViewDayLabel: style["weekView-weekViewDayLabel"],
        weekViewDaySlot: style["weekView-weekViewDaySlot"],
      },
    }),
    YearView: YearView.extend({
      classNames: {
        yearView: style["yearView-yearView"],
        yearViewWeekNumber: style["yearView-yearViewWeekNumber"],
        yearViewDay: style["yearView-yearViewDay"],
        yearViewMonthCaption: style["yearView-yearViewMonthCaption"],
      },
    }),
  },
});
