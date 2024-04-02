import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Typography from '@mui/joy/Typography';

const TagsTableFooter = ({ page, setPage, rowsPerPage, rowsAmount }) => {
  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  function labelDisplayedRows({ from, to, count }) {
    return `${from} - ${to} z ${count !== -1 ? count : `więcej niż ${to}`}`;
  }

  const getLabelDisplayedRowsTo = () => {
    if (rowsAmount === -1) {
      return (page + 1) * rowsPerPage;
    }
    return rowsPerPage === -1 ? rowsAmount : Math.min(rowsAmount, (page + 1) * rowsPerPage);
  };

  return (
    <tfoot>
      <tr>
        <td colSpan={6}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              justifyContent: 'flex-end'
            }}
          >
            <Typography textAlign="center" sx={{ minWidth: 80 }}>
              {labelDisplayedRows({
                from: rowsAmount === 0 ? 0 : page * rowsPerPage + 1,
                to: getLabelDisplayedRowsTo(),
                count: rowsAmount === -1 ? -1 : rowsAmount
              })}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                size="sm"
                color="neutral"
                variant="outlined"
                disabled={page === 0}
                onClick={() => handleChangePage(page - 1)}
                sx={{ bgcolor: 'background.surface' }}
              >
                <KeyboardArrowLeftIcon />
              </IconButton>
              <IconButton
                size="sm"
                color="neutral"
                variant="outlined"
                disabled={
                  rowsAmount !== -1 ? page >= Math.ceil(rowsAmount / rowsPerPage) - 1 : false
                }
                onClick={() => handleChangePage(page + 1)}
                sx={{ bgcolor: 'background.surface' }}
              >
                <KeyboardArrowRightIcon />
              </IconButton>
            </Box>
          </Box>
        </td>
      </tr>
    </tfoot>
  );
};

export default TagsTableFooter;
