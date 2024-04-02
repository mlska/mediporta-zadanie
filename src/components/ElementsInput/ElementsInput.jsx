import { Box, FormControl, FormLabel } from "@mui/material";
import { Input } from "@mui/joy";

const ElementsInput = ({ rowsPerPage, setRowsPerPage }) => {
  const handleInputChange = (event) => {
    setRowsPerPage(parseInt(event.target.value) || 0);
  };

  return (
    <Box width={256}>
      <FormControl>
        <FormLabel sx={{ mb: 1 }}>Elementów na stronie</FormLabel>
        <Input value={rowsPerPage} onChange={handleInputChange} placeholder="Wpisz ilość..." />
      </FormControl>
    </Box>
  );
};

export default ElementsInput;
