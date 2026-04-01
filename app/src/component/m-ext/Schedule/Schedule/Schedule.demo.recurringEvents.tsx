import { useState } from "react";
import { Schedule } from "@mantine/schedule";
import { MantineDemo } from "@mantinex/demo";

const recurringEventsData = [
  {
    id: "schedule-series",
    title: "Weekly planning (series)",
    start: "2024-01-15 10:00:00",
    end: "2024-01-15 11:00:00",
    color: "blue-dev-dev",
    recurrence: {
      rrule: "FREQ=WEEKLY;BYDAY=MO,WE;COUNT=16",
      exdate: ["2024-01-17 10:00:00"],
    },
  },
  {
    id: "schedule-series-override",
    title: "Weekly planning (moved one occurrence)",
    start: "2024-01-17 16:00:00",
    end: "2024-01-17 17:00:00",
    color: "green-dev-dev",
    recurringEventId: "schedule-series",
    recurrenceId: "2024-01-17 10:00:00",
  },
  {
    id: "schedule-one-off",
    title: "One-off roadmap review",
    start: "2024-01-18 12:00:00",
    end: "2024-01-18 13:00:00",
    color: "green-dev-dev",
  },
];

const code = `
import { useState } from 'react';
import { Schedule } from '@mantine/schedule';

const events = [
  {
    id: 'schedule-series',
    title: 'Weekly planning (series)',
    start: '2024-01-15 10:00:00',
    end: '2024-01-15 11:00:00',
    color: 'blue-dev-dev',
    recurrence: {
      rrule: 'FREQ=WEEKLY;BYDAY=MO,WE;COUNT=16',
      exdate: ['2024-01-17 10:00:00'],
    },
  },
  {
    id: 'schedule-series-override',
    title: 'Weekly planning (moved one occurrence)',
    start: '2024-01-17 16:00:00',
    end: '2024-01-17 17:00:00',
    color: 'green-dev-dev',
    recurringEventId: 'schedule-series',
    recurrenceId: '2024-01-17 10:00:00',
  },
  {
    id: 'schedule-one-off',
    title: 'One-off roadmap review',
    start: '2024-01-18 12:00:00',
    end: '2024-01-18 13:00:00',
    color: 'green-dev-dev',
  },
];

function Demo() {
  const [date, setDate] = useState('2024-01-15');
  return <Schedule view="week" date={date} onDateChange={setDate} events={events} />;
}
`;

function Demo() {
  const [date, setDate] = useState("2024-01-15");
  return <Schedule view="week" date={date} onDateChange={setDate} events={recurringEventsData} />;
}

export const recurringEvents: MantineDemo = {
  defaultExpanded: false,
  type: "code",
  component: Demo,
  code,
};
