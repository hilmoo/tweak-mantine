import dayjs from "dayjs";
import { ScheduleEventData } from "@mantine/schedule";

const thisYear = dayjs().format("YYYY");

export const regularEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: "New Year",
    start: `${thisYear}-01-01 00:00:00`,
    end: dayjs(`${thisYear}-01-01`).add(1, "day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),
    color: "blue-dev-dev",
  },
  {
    id: 2,
    title: "Spring Event",
    start: `${thisYear}-03-15 00:00:00`,
    end: dayjs(`${thisYear}-03-15`).add(1, "day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),
    color: "green-dev-dev",
  },
  {
    id: 3,
    title: "Summer Conference",
    start: `${thisYear}-07-20 00:00:00`,
    end: dayjs(`${thisYear}-07-20`).add(1, "day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),
    color: "amber-dev-dev",
  },
  {
    id: 4,
    title: "Fall Workshop",
    start: `${thisYear}-10-10 00:00:00`,
    end: dayjs(`${thisYear}-10-10`).add(1, "day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),
    color: "purple-dev-dev",
  },
  {
    id: 5,
    title: "Year End Party",
    start: `${thisYear}-12-25 00:00:00`,
    end: dayjs(`${thisYear}-12-25`).add(1, "day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),
    color: "red-dev-dev",
  },
];

export const dataCode = `
import dayjs from 'dayjs';

const thisYear = dayjs().format('YYYY');

const events = [
  {
    id: 1,
    title: 'New Year',
    start: \\\`\\\${thisYear}-01-01 00:00:00\\\`,
    end: dayjs(\\\`\\\${thisYear}-01-01\\\`).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'blue-dev-dev',
  },
  {
    id: 2,
    title: 'Spring Event',
    start: \\\`\\\${thisYear}-03-15 00:00:00\\\`,
    end: dayjs(\\\`\\\${thisYear}-03-15\\\`).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'green-dev-dev',
  },
];
`;
