import { Alert } from "@mui/material";

const Message = ({ type, text }) => {
  return <Alert severity={type}>{text}</Alert>;
};

export default Message;
