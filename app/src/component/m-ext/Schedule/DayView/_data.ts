import dayjs from "dayjs";
import { ScheduleEventData } from "@mantine/schedule";

const today = dayjs().format("YYYY-MM-DD");

export const regularEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: "Morning Standup",
    start: `${today} 09:00:00`,
    end: `${today} 09:30:00`,
    color: "blue-dev-dev",
  },
  {
    id: 2,
    title: "Team Meeting",
    start: `${today} 10:00:00`,
    end: `${today} 11:30:00`,
    color: "green-dev-dev",
  },
  {
    id: 3,
    title: "Lunch Break",
    start: `${today} 12:00:00`,
    end: `${today} 13:00:00`,
    color: "amber-dev-dev",
  },
  {
    id: 4,
    title: "Code Review",
    start: `${today} 14:00:00`,
    end: `${today} 15:00:00`,
    color: "purple-dev-dev",
  },
  {
    id: 5,
    title: "Client Call",
    start: `${today} 15:30:00`,
    end: `${today} 16:30:00`,
    color: "blue-dev-dev",
  },
  {
    id: 6,
    title: "All Day Conference",
    start: `${today} 00:00:00`,
    end: dayjs(today).add(1, "day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),
    color: "red-dev-dev",
  },
];

export const overlappingEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: "Workshop Session 1",
    start: `${today} 10:00:00`,
    end: `${today} 11:30:00`,
    color: "blue-dev-dev",
  },
  {
    id: 2,
    title: "Workshop Session 2",
    start: `${today} 11:00:00`,
    end: `${today} 12:30:00`,
    color: "purple-dev-dev",
  },
  {
    id: 3,
    title: "Workshop Session 3",
    start: `${today} 11:30:00`,
    end: `${today} 13:00:00`,
    color: "blue-dev-dev",
  },
  {
    id: 4,
    title: "Full Day Session",
    start: `${today} 10:00:00`,
    end: `${today} 16:00:00`,
    color: "green-dev-dev",
  },
];

export const allDayEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: "Conference Day",
    start: `${today} 00:00:00`,
    end: dayjs(today).add(1, "day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),
    color: "red-dev-dev",
  },
  {
    id: 2,
    title: "Holiday",
    start: `${today} 00:00:00`,
    end: dayjs(today).add(1, "day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),
    color: "pink-dev-dev",
  },
  {
    id: 3,
    title: "Team Building",
    start: `${today} 00:00:00`,
    end: dayjs(today).add(1, "day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),
    color: "amber-dev-dev",
  },
  {
    id: 4,
    title: "Product Launch",
    start: `${today} 00:00:00`,
    end: dayjs(today).add(1, "day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),
    color: "green-dev-dev",
  },
  {
    id: 5,
    title: "Year Kickoff",
    start: `${today} 00:00:00`,
    end: dayjs(today).add(1, "day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),
    color: "blue-dev-dev",
  },
];

export const businessEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: "Early Morning Meeting",
    start: `${today} 08:30:00`,
    end: `${today} 09:00:00`,
    color: "blue-dev-dev",
  },
  {
    id: 2,
    title: "Business Hours Task 1",
    start: `${today} 10:00:00`,
    end: `${today} 11:00:00`,
    color: "green-dev-dev",
  },
  {
    id: 3,
    title: "Business Hours Task 2",
    start: `${today} 14:00:00`,
    end: `${today} 15:00:00`,
    color: "purple-dev-dev",
  },
  {
    id: 4,
    title: "Evening Sync",
    start: `${today} 17:30:00`,
    end: `${today} 18:00:00`,
    color: "amber-dev-dev",
  },
];

export const dataCode = `
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 1,
    title: 'Morning Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue-dev-dev',
  },
  {
    id: 2,
    title: 'Team Meeting',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green-dev-dev',
  },
  {
    id: 3,
    title: 'Lunch Break',
    start: \`\${today} 12:00:00\`,
    end: \`\${today} 13:00:00\`,
    color: 'amber-dev-dev',
  },
  {
    id: 4,
    title: 'Code Review',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'purple-dev-dev',
  },
  {
    id: 5,
    title: 'Client Call',
    start: \`\${today} 15:30:00\`,
    end: \`\${today} 16:30:00\`,
    color: 'blue-dev-dev',
  },
  {
    id: 6,
    title: 'All Day Conference',
    start: \`\${today} 00:00:00\`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red-dev-dev',
  },
];
`;

export const overlappingEventsCode = `
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 1,
    title: 'Workshop Session 1',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'blue-dev-dev',
  },
  {
    id: 2,
    title: 'Workshop Session 2',
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 12:30:00\`,
    color: 'purple-dev-dev',
  },
  {
    id: 3,
    title: 'Workshop Session 3',
    start: \`\${today} 11:30:00\`,
    end: \`\${today} 13:00:00\`,
    color: 'blue-dev-dev',
  },
  {
    id: 4,
    title: 'Full Day Session',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'green-dev-dev',
  },
];
`;

export const allDayEventsCode = `
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 1,
    title: 'Conference Day',
    start: \`\${today} 00:00:00\`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red-dev-dev',
  },
  {
    id: 2,
    title: 'Holiday',
    start: \`\${today} 00:00:00\`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'pink-dev-dev',
  },
  {
    id: 3,
    title: 'Team Building',
    start: \`\${today} 00:00:00\`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'amber-dev-dev',
  },
  {
    id: 4,
    title: 'Product Launch',
    start: \`\${today} 00:00:00\`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'green-dev-dev',
  },
  {
    id: 5,
    title: 'Year Kickoff',
    start: \`\${today} 00:00:00\`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'blue-dev-dev',
  },
];
`;

export const businessEventsCode = `
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 1,
    title: 'Early Morning Meeting',
    start: \`\${today} 08:30:00\`,
    end: \`\${today} 09:00:00\`,
    color: 'blue-dev-dev',
  },
  {
    id: 2,
    title: 'Business Hours Task 1',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:00:00\`,
    color: 'green-dev-dev',
  },
  {
    id: 3,
    title: 'Business Hours Task 2',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'purple-dev-dev',
  },
  {
    id: 4,
    title: 'Evening Sync',
    start: \`\${today} 17:30:00\`,
    end: \`\${today} 18:00:00\`,
    color: 'amber-dev-dev',
  },
];
`;
