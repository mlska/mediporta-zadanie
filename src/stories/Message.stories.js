import { Message } from "./Components";

export default {
  title: "Mediporta/Message",
  component: Message,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Info = {
  args: {
    type: "info",
    text: "Ładowanie danych...",
  },
};

export const Error = {
  args: {
    type: "error",
    text: "Wystąpił błąd: Error 404",
  },
};
