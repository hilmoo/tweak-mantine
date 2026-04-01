import type { MantineDemo } from "@mantinex/demo";

import { usage as usageDayView } from "./DayView";
import { timeRange as timeRangeDayView } from "./DayView";
import { intervalMinutes as intervalMinutesDayView } from "./DayView";
import { allDayEvents as allDayEventsDayView } from "./DayView";
import { overlappingEvents as overlappingEventsDayView } from "./DayView";
import { currentTimeIndicator as currentTimeIndicatorDayView } from "./DayView";
import { businessHours as businessHoursDayView } from "./DayView";
import { slotHeight as slotHeightDayView } from "./DayView";
import { withoutHeader as withoutHeaderDayView } from "./DayView";
import { headerFormat as headerFormatDayView } from "./DayView";
import { slotLabelFormat as slotLabelFormatDayView } from "./DayView";
import { radius as radiusDayView } from "./DayView";
import { dragDrop as dragDropDayView } from "./DayView";
import { canDragEvent as canDragEventDayView } from "./DayView";
import { eventResize as eventResizeDayView } from "./DayView";
import { canResizeEvent as canResizeEventDayView } from "./DayView";
import { renderEventBody as renderEventBodyDayView } from "./DayView";
import { renderEvent as renderEventDayView } from "./DayView";
import { staticMode as staticModeDayView } from "./DayView";
import { labels as labelsDayView } from "./DayView";
import { controlledDate as controlledDateDayView } from "./DayView";
import { viewChange as viewChangeDayView } from "./DayView";
import { eventForm as eventFormDayView } from "./DayView";
import { startScrollTime as startScrollTimeDayView } from "./DayView";
import { externalDragDrop as externalDragDropDayView } from "./DayView";
import { bidirectionalDragDrop as bidirectionalDragDropDayView } from "./DayView";
import { recurringEvents as recurringEventsDayView } from "./DayView";
import { backgroundEvents as backgroundEventsDayView } from "./DayView";
import { backgroundEventsCustomStyle as backgroundEventsCustomStyleDayView } from "./DayView";
import { customHeader as customHeaderDayView } from "./DayView";
import { localization as localizationDayView } from "./DayView";
import { getTimeSlotProps as getTimeSlotPropsDayView } from "./DayView";
import { usage as usageMobileMonthView } from "./MobileMonthView";
import { withWeekNumbers as withWeekNumbersMobileMonthView } from "./MobileMonthView";
import { withOutsideDays as withOutsideDaysMobileMonthView } from "./MobileMonthView";
import { staticMode as staticModeMobileMonthView } from "./MobileMonthView";
import { localization as localizationMobileMonthView } from "./MobileMonthView";
import { highlightToday as highlightTodayMobileMonthView } from "./MobileMonthView";
import { firstDayOfWeek as firstDayOfWeekMobileMonthView } from "./MobileMonthView";
import { renderHeader as renderHeaderMobileMonthView } from "./MobileMonthView";
import { consistentWeeks as consistentWeeksMobileMonthView } from "./MobileMonthView";
import { weekdayFormat as weekdayFormatMobileMonthView } from "./MobileMonthView";
import { withoutWeekDays as withoutWeekDaysMobileMonthView } from "./MobileMonthView";
import { usage as usageMonthView } from "./MonthView";
import { withWeekNumbers as withWeekNumbersMonthView } from "./MonthView";
import { withoutWeekDays as withoutWeekDaysMonthView } from "./MonthView";
import { firstDayOfWeek as firstDayOfWeekMonthView } from "./MonthView";
import { weekdayFormat as weekdayFormatMonthView } from "./MonthView";
import { consistentWeeks as consistentWeeksMonthView } from "./MonthView";
import { highlightToday as highlightTodayMonthView } from "./MonthView";
import { withoutOutsideDays as withoutOutsideDaysMonthView } from "./MonthView";
import { withoutHeader as withoutHeaderMonthView } from "./MonthView";
import { manyEvents as manyEventsMonthView } from "./MonthView";
import { dragDrop as dragDropMonthView } from "./MonthView";
import { renderEvent as renderEventMonthView } from "./MonthView";
import { staticMode as staticModeMonthView } from "./MonthView";
import { eventForm as eventFormMonthView } from "./MonthView";
import { externalDragDrop as externalDragDropMonthView } from "./MonthView";
import { bidirectionalDragDrop as bidirectionalDragDropMonthView } from "./MonthView";
import { recurringEvents as recurringEventsMonthView } from "./MonthView";
import { backgroundEvents as backgroundEventsMonthView } from "./MonthView";
import { customHeader as customHeaderMonthView } from "./MonthView";
import { maxEventsPerDay as maxEventsPerDayMonthView } from "./MonthView";
import { localization as localizationMonthView } from "./MonthView";
import { radius as radiusMonthView } from "./MonthView";
import { usage as usageSchedule } from "./Schedule";
import { dragDrop as dragDropSchedule } from "./Schedule";
import { controlled as controlledSchedule } from "./Schedule";
import { viewProps as viewPropsSchedule } from "./Schedule";
import { defaultView as defaultViewSchedule } from "./Schedule";
import { responsiveLayout as responsiveLayoutSchedule } from "./Schedule";
import { eventForm as eventFormSchedule } from "./Schedule";
import { externalDragDrop as externalDragDropSchedule } from "./Schedule";
import { bidirectionalDragDrop as bidirectionalDragDropSchedule } from "./Schedule";
import { eventResize as eventResizeSchedule } from "./Schedule";
import { recurringEvents as recurringEventsSchedule } from "./Schedule";
import { backgroundEvents as backgroundEventsSchedule } from "./Schedule";
import { customHeader as customHeaderSchedule } from "./Schedule";
import { usage as usageWeekView } from "./WeekView";
import { timeRange as timeRangeWeekView } from "./WeekView";
import { intervalMinutes as intervalMinutesWeekView } from "./WeekView";
import { firstDayOfWeek as firstDayOfWeekWeekView } from "./WeekView";
import { weekdayFormat as weekdayFormatWeekView } from "./WeekView";
import { withoutWeekendDays as withoutWeekendDaysWeekView } from "./WeekView";
import { highlightToday as highlightTodayWeekView } from "./WeekView";
import { withoutWeekNumber as withoutWeekNumberWeekView } from "./WeekView";
import { currentTimeIndicator as currentTimeIndicatorWeekView } from "./WeekView";
import { withoutAllDaySlots as withoutAllDaySlotsWeekView } from "./WeekView";
import { withoutHeader as withoutHeaderWeekView } from "./WeekView";
import { weekLabelFormat as weekLabelFormatWeekView } from "./WeekView";
import { slotLabelFormat as slotLabelFormatWeekView } from "./WeekView";
import { slotHeight as slotHeightWeekView } from "./WeekView";
import { businessHours as businessHoursWeekView } from "./WeekView";
import { overlappingEvents as overlappingEventsWeekView } from "./WeekView";
import { dragDrop as dragDropWeekView } from "./WeekView";
import { eventResize as eventResizeWeekView } from "./WeekView";
import { renderEvent as renderEventWeekView } from "./WeekView";
import { staticMode as staticModeWeekView } from "./WeekView";
import { eventForm as eventFormWeekView } from "./WeekView";
import { startScrollTime as startScrollTimeWeekView } from "./WeekView";
import { externalDragDrop as externalDragDropWeekView } from "./WeekView";
import { bidirectionalDragDrop as bidirectionalDragDropWeekView } from "./WeekView";
import { recurringEvents as recurringEventsWeekView } from "./WeekView";
import { backgroundEvents as backgroundEventsWeekView } from "./WeekView";
import { backgroundEventsCustomStyle as backgroundEventsCustomStyleWeekView } from "./WeekView";
import { customHeader as customHeaderWeekView } from "./WeekView";
import { localization as localizationWeekView } from "./WeekView";
import { radius as radiusWeekView } from "./WeekView";
import { renderEventBody as renderEventBodyWeekView } from "./WeekView";
import { allDayEvents as allDayEventsWeekView } from "./WeekView";
import { canDragEvent as canDragEventWeekView } from "./WeekView";
import { canResizeEvent as canResizeEventWeekView } from "./WeekView";
import { controlledDate as controlledDateWeekView } from "./WeekView";
import { viewChange as viewChangeWeekView } from "./WeekView";
import { getTimeSlotProps as getTimeSlotPropsWeekView } from "./WeekView";
import { usage as usageYearView } from "./YearView";
import { withWeekNumbers as withWeekNumbersYearView } from "./YearView";
import { withoutWeekDays as withoutWeekDaysYearView } from "./YearView";
import { withOutsideDays as withOutsideDaysYearView } from "./YearView";
import { firstDayOfWeek as firstDayOfWeekYearView } from "./YearView";
import { weekdayFormat as weekdayFormatYearView } from "./YearView";
import { highlightToday as highlightTodayYearView } from "./YearView";
import { withoutHeader as withoutHeaderYearView } from "./YearView";
import { staticMode as staticModeYearView } from "./YearView";
import { recurringEvents as recurringEventsYearView } from "./YearView";
import { customHeader as customHeaderYearView } from "./YearView";
import { localization as localizationYearView } from "./YearView";

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
  category: "Schedule",
  pages: [
    {
      pageName: "DayView",
      demo: [
        {
          demoName: "DayView.demo.usage",
          demoComponent: usageDayView,
        },
        {
          demoName: "DayView.demo.timeRange",
          demoComponent: timeRangeDayView,
        },
        {
          demoName: "DayView.demo.intervalMinutes",
          demoComponent: intervalMinutesDayView,
        },
        {
          demoName: "DayView.demo.allDayEvents",
          demoComponent: allDayEventsDayView,
        },
        {
          demoName: "DayView.demo.overlappingEvents",
          demoComponent: overlappingEventsDayView,
        },
        {
          demoName: "DayView.demo.currentTimeIndicator",
          demoComponent: currentTimeIndicatorDayView,
        },
        {
          demoName: "DayView.demo.businessHours",
          demoComponent: businessHoursDayView,
        },
        {
          demoName: "DayView.demo.slotHeight",
          demoComponent: slotHeightDayView,
        },
        {
          demoName: "DayView.demo.withoutHeader",
          demoComponent: withoutHeaderDayView,
        },
        {
          demoName: "DayView.demo.headerFormat",
          demoComponent: headerFormatDayView,
        },
        {
          demoName: "DayView.demo.slotLabelFormat",
          demoComponent: slotLabelFormatDayView,
        },
        {
          demoName: "DayView.demo.radius",
          demoComponent: radiusDayView,
        },
        {
          demoName: "DayView.demo.dragDrop",
          demoComponent: dragDropDayView,
        },
        {
          demoName: "DayView.demo.canDragEvent",
          demoComponent: canDragEventDayView,
        },
        {
          demoName: "DayView.demo.eventResize",
          demoComponent: eventResizeDayView,
        },
        {
          demoName: "DayView.demo.canResizeEvent",
          demoComponent: canResizeEventDayView,
        },
        {
          demoName: "DayView.demo.renderEventBody",
          demoComponent: renderEventBodyDayView,
        },
        {
          demoName: "DayView.demo.renderEvent",
          demoComponent: renderEventDayView,
        },
        {
          demoName: "DayView.demo.staticMode",
          demoComponent: staticModeDayView,
        },
        {
          demoName: "DayView.demo.labels",
          demoComponent: labelsDayView,
        },
        {
          demoName: "DayView.demo.controlledDate",
          demoComponent: controlledDateDayView,
        },
        {
          demoName: "DayView.demo.viewChange",
          demoComponent: viewChangeDayView,
        },
        {
          demoName: "DayView.demo.eventForm",
          demoComponent: eventFormDayView,
        },
        {
          demoName: "DayView.demo.startScrollTime",
          demoComponent: startScrollTimeDayView,
        },
        {
          demoName: "DayView.demo.externalDragDrop",
          demoComponent: externalDragDropDayView,
        },
        {
          demoName: "DayView.demo.bidirectionalDragDrop",
          demoComponent: bidirectionalDragDropDayView,
        },
        {
          demoName: "DayView.demo.recurringEvents",
          demoComponent: recurringEventsDayView,
        },
        {
          demoName: "DayView.demo.backgroundEvents",
          demoComponent: backgroundEventsDayView,
        },
        {
          demoName: "DayView.demo.backgroundEventsCustomStyle",
          demoComponent: backgroundEventsCustomStyleDayView,
        },
        {
          demoName: "DayView.demo.customHeader",
          demoComponent: customHeaderDayView,
        },
        {
          demoName: "DayView.demo.localization",
          demoComponent: localizationDayView,
        },
        {
          demoName: "DayView.demo.getTimeSlotProps",
          demoComponent: getTimeSlotPropsDayView,
        },
      ],
    },
    {
      pageName: "MobileMonthView",
      demo: [
        {
          demoName: "MobileMonthView.demo.usage",
          demoComponent: usageMobileMonthView,
        },
        {
          demoName: "MobileMonthView.demo.withWeekNumbers",
          demoComponent: withWeekNumbersMobileMonthView,
        },
        {
          demoName: "MobileMonthView.demo.withOutsideDays",
          demoComponent: withOutsideDaysMobileMonthView,
        },
        {
          demoName: "MobileMonthView.demo.staticMode",
          demoComponent: staticModeMobileMonthView,
        },
        {
          demoName: "MobileMonthView.demo.localization",
          demoComponent: localizationMobileMonthView,
        },
        {
          demoName: "MobileMonthView.demo.highlightToday",
          demoComponent: highlightTodayMobileMonthView,
        },
        {
          demoName: "MobileMonthView.demo.firstDayOfWeek",
          demoComponent: firstDayOfWeekMobileMonthView,
        },
        {
          demoName: "MobileMonthView.demo.renderHeader",
          demoComponent: renderHeaderMobileMonthView,
        },
        {
          demoName: "MobileMonthView.demo.consistentWeeks",
          demoComponent: consistentWeeksMobileMonthView,
        },
        {
          demoName: "MobileMonthView.demo.weekdayFormat",
          demoComponent: weekdayFormatMobileMonthView,
        },
        {
          demoName: "MobileMonthView.demo.withoutWeekDays",
          demoComponent: withoutWeekDaysMobileMonthView,
        },
      ],
    },
    {
      pageName: "MonthView",
      demo: [
        {
          demoName: "MonthView.demo.usage",
          demoComponent: usageMonthView,
        },
        {
          demoName: "MonthView.demo.withWeekNumbers",
          demoComponent: withWeekNumbersMonthView,
        },
        {
          demoName: "MonthView.demo.withoutWeekDays",
          demoComponent: withoutWeekDaysMonthView,
        },
        {
          demoName: "MonthView.demo.firstDayOfWeek",
          demoComponent: firstDayOfWeekMonthView,
        },
        {
          demoName: "MonthView.demo.weekdayFormat",
          demoComponent: weekdayFormatMonthView,
        },
        {
          demoName: "MonthView.demo.consistentWeeks",
          demoComponent: consistentWeeksMonthView,
        },
        {
          demoName: "MonthView.demo.highlightToday",
          demoComponent: highlightTodayMonthView,
        },
        {
          demoName: "MonthView.demo.withoutOutsideDays",
          demoComponent: withoutOutsideDaysMonthView,
        },
        {
          demoName: "MonthView.demo.withoutHeader",
          demoComponent: withoutHeaderMonthView,
        },
        {
          demoName: "MonthView.demo.manyEvents",
          demoComponent: manyEventsMonthView,
        },
        {
          demoName: "MonthView.demo.dragDrop",
          demoComponent: dragDropMonthView,
        },
        {
          demoName: "MonthView.demo.renderEvent",
          demoComponent: renderEventMonthView,
        },
        {
          demoName: "MonthView.demo.staticMode",
          demoComponent: staticModeMonthView,
        },
        {
          demoName: "MonthView.demo.eventForm",
          demoComponent: eventFormMonthView,
        },
        {
          demoName: "MonthView.demo.externalDragDrop",
          demoComponent: externalDragDropMonthView,
        },
        {
          demoName: "MonthView.demo.bidirectionalDragDrop",
          demoComponent: bidirectionalDragDropMonthView,
        },
        {
          demoName: "MonthView.demo.recurringEvents",
          demoComponent: recurringEventsMonthView,
        },
        {
          demoName: "MonthView.demo.backgroundEvents",
          demoComponent: backgroundEventsMonthView,
        },
        {
          demoName: "MonthView.demo.customHeader",
          demoComponent: customHeaderMonthView,
        },
        {
          demoName: "MonthView.demo.maxEventsPerDay",
          demoComponent: maxEventsPerDayMonthView,
        },
        {
          demoName: "MonthView.demo.localization",
          demoComponent: localizationMonthView,
        },
        {
          demoName: "MonthView.demo.radius",
          demoComponent: radiusMonthView,
        },
      ],
    },
    {
      pageName: "Schedule",
      demo: [
        {
          demoName: "Schedule.demo.usage",
          demoComponent: usageSchedule,
        },
        {
          demoName: "Schedule.demo.dragDrop",
          demoComponent: dragDropSchedule,
        },
        {
          demoName: "Schedule.demo.controlled",
          demoComponent: controlledSchedule,
        },
        {
          demoName: "Schedule.demo.viewProps",
          demoComponent: viewPropsSchedule,
        },
        {
          demoName: "Schedule.demo.defaultView",
          demoComponent: defaultViewSchedule,
        },
        {
          demoName: "Schedule.demo.responsiveLayout",
          demoComponent: responsiveLayoutSchedule,
        },
        {
          demoName: "Schedule.demo.eventForm",
          demoComponent: eventFormSchedule,
        },
        {
          demoName: "Schedule.demo.externalDragDrop",
          demoComponent: externalDragDropSchedule,
        },
        {
          demoName: "Schedule.demo.bidirectionalDragDrop",
          demoComponent: bidirectionalDragDropSchedule,
        },
        {
          demoName: "Schedule.demo.eventResize",
          demoComponent: eventResizeSchedule,
        },
        {
          demoName: "Schedule.demo.recurringEvents",
          demoComponent: recurringEventsSchedule,
        },
        {
          demoName: "Schedule.demo.backgroundEvents",
          demoComponent: backgroundEventsSchedule,
        },
        {
          demoName: "Schedule.demo.customHeader",
          demoComponent: customHeaderSchedule,
        },
      ],
    },
    {
      pageName: "WeekView",
      demo: [
        {
          demoName: "WeekView.demo.usage",
          demoComponent: usageWeekView,
        },
        {
          demoName: "WeekView.demo.timeRange",
          demoComponent: timeRangeWeekView,
        },
        {
          demoName: "WeekView.demo.intervalMinutes",
          demoComponent: intervalMinutesWeekView,
        },
        {
          demoName: "WeekView.demo.firstDayOfWeek",
          demoComponent: firstDayOfWeekWeekView,
        },
        {
          demoName: "WeekView.demo.weekdayFormat",
          demoComponent: weekdayFormatWeekView,
        },
        {
          demoName: "WeekView.demo.withoutWeekendDays",
          demoComponent: withoutWeekendDaysWeekView,
        },
        {
          demoName: "WeekView.demo.highlightToday",
          demoComponent: highlightTodayWeekView,
        },
        {
          demoName: "WeekView.demo.withoutWeekNumber",
          demoComponent: withoutWeekNumberWeekView,
        },
        {
          demoName: "WeekView.demo.currentTimeIndicator",
          demoComponent: currentTimeIndicatorWeekView,
        },
        {
          demoName: "WeekView.demo.withoutAllDaySlots",
          demoComponent: withoutAllDaySlotsWeekView,
        },
        {
          demoName: "WeekView.demo.withoutHeader",
          demoComponent: withoutHeaderWeekView,
        },
        {
          demoName: "WeekView.demo.weekLabelFormat",
          demoComponent: weekLabelFormatWeekView,
        },
        {
          demoName: "WeekView.demo.slotLabelFormat",
          demoComponent: slotLabelFormatWeekView,
        },
        {
          demoName: "WeekView.demo.slotHeight",
          demoComponent: slotHeightWeekView,
        },
        {
          demoName: "WeekView.demo.businessHours",
          demoComponent: businessHoursWeekView,
        },
        {
          demoName: "WeekView.demo.overlappingEvents",
          demoComponent: overlappingEventsWeekView,
        },
        {
          demoName: "WeekView.demo.dragDrop",
          demoComponent: dragDropWeekView,
        },
        {
          demoName: "WeekView.demo.eventResize",
          demoComponent: eventResizeWeekView,
        },
        {
          demoName: "WeekView.demo.renderEvent",
          demoComponent: renderEventWeekView,
        },
        {
          demoName: "WeekView.demo.staticMode",
          demoComponent: staticModeWeekView,
        },
        {
          demoName: "WeekView.demo.eventForm",
          demoComponent: eventFormWeekView,
        },
        {
          demoName: "WeekView.demo.startScrollTime",
          demoComponent: startScrollTimeWeekView,
        },
        {
          demoName: "WeekView.demo.externalDragDrop",
          demoComponent: externalDragDropWeekView,
        },
        {
          demoName: "WeekView.demo.bidirectionalDragDrop",
          demoComponent: bidirectionalDragDropWeekView,
        },
        {
          demoName: "WeekView.demo.recurringEvents",
          demoComponent: recurringEventsWeekView,
        },
        {
          demoName: "WeekView.demo.backgroundEvents",
          demoComponent: backgroundEventsWeekView,
        },
        {
          demoName: "WeekView.demo.backgroundEventsCustomStyle",
          demoComponent: backgroundEventsCustomStyleWeekView,
        },
        {
          demoName: "WeekView.demo.customHeader",
          demoComponent: customHeaderWeekView,
        },
        {
          demoName: "WeekView.demo.localization",
          demoComponent: localizationWeekView,
        },
        {
          demoName: "WeekView.demo.radius",
          demoComponent: radiusWeekView,
        },
        {
          demoName: "WeekView.demo.renderEventBody",
          demoComponent: renderEventBodyWeekView,
        },
        {
          demoName: "WeekView.demo.allDayEvents",
          demoComponent: allDayEventsWeekView,
        },
        {
          demoName: "WeekView.demo.canDragEvent",
          demoComponent: canDragEventWeekView,
        },
        {
          demoName: "WeekView.demo.canResizeEvent",
          demoComponent: canResizeEventWeekView,
        },
        {
          demoName: "WeekView.demo.controlledDate",
          demoComponent: controlledDateWeekView,
        },
        {
          demoName: "WeekView.demo.viewChange",
          demoComponent: viewChangeWeekView,
        },
        {
          demoName: "WeekView.demo.getTimeSlotProps",
          demoComponent: getTimeSlotPropsWeekView,
        },
      ],
    },
    {
      pageName: "YearView",
      demo: [
        {
          demoName: "YearView.demo.usage",
          demoComponent: usageYearView,
        },
        {
          demoName: "YearView.demo.withWeekNumbers",
          demoComponent: withWeekNumbersYearView,
        },
        {
          demoName: "YearView.demo.withoutWeekDays",
          demoComponent: withoutWeekDaysYearView,
        },
        {
          demoName: "YearView.demo.withOutsideDays",
          demoComponent: withOutsideDaysYearView,
        },
        {
          demoName: "YearView.demo.firstDayOfWeek",
          demoComponent: firstDayOfWeekYearView,
        },
        {
          demoName: "YearView.demo.weekdayFormat",
          demoComponent: weekdayFormatYearView,
        },
        {
          demoName: "YearView.demo.highlightToday",
          demoComponent: highlightTodayYearView,
        },
        {
          demoName: "YearView.demo.withoutHeader",
          demoComponent: withoutHeaderYearView,
        },
        {
          demoName: "YearView.demo.staticMode",
          demoComponent: staticModeYearView,
        },
        {
          demoName: "YearView.demo.recurringEvents",
          demoComponent: recurringEventsYearView,
        },
        {
          demoName: "YearView.demo.customHeader",
          demoComponent: customHeaderYearView,
        },
        {
          demoName: "YearView.demo.localization",
          demoComponent: localizationYearView,
        },
      ],
    },
  ],
};
