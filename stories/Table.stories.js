import { TagsTable } from "./Components";

export default {
  title: "Mediporta/Table",
  component: TagsTable,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

const rows = [
  {
    name: "javascript",
    count: 100531,
  },
  {
    name: "react",
    count: 52312,
  },
  {
    name: "php",
    count: 12531,
  },
  {
    name: "c#",
    count: 22516,
  },
];

export const Base = {
  args: {
    rowsPerPage: 3,
    rows,
  },
};
