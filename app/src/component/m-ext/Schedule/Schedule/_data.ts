import dayjs from "dayjs";
import { ScheduleEventData } from "@mantine/schedule";

const today = dayjs().format("YYYY-MM-DD");
const tomorrow = dayjs().add(1, "day").format("YYYY-MM-DD");

export const events: ScheduleEventData[] = [
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
    start: `${tomorrow} 14:00:00`,
    end: `${tomorrow} 15:00:00`,
    color: "purple-dev-dev",
  },
  {
    id: 5,
    title: "Client Call",
    start: `${tomorrow} 15:30:00`,
    end: `${tomorrow} 16:30:00`,
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

export const dataCode = `
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');

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
    title: 'Code Review',
    start: \`\${tomorrow} 14:00:00\`,
    end: \`\${tomorrow} 15:00:00\`,
    color: 'purple-dev-dev',
  },
  {
    id: 4,
    title: 'All Day Conference',
    start: \`\${today} 00:00:00\`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red-dev-dev',
  },
];
`;
