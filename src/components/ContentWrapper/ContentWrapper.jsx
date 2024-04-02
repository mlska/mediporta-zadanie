import { Container } from "@mui/material";

const ContentWrapper = ({ children }) => {
  return <Container sx={{ p: 2 }}>{children}</Container>;
};

export default ContentWrapper;
