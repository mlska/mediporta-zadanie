import { useState } from 'react';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import EmptyRow from './EmptyRow';
import TagsTableFooter from './TagsTableFooter';
import TagsTableHead from './TagsTableHead';
import TagsTableToolbar from './TagsTableToolbar';
import TableRow from './TableRow';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Tag'
  },
  {
    id: 'count',
    numeric: true,
    disablePadding: false,
    label: 'Ilość'
  }
];

const TagsTable = ({ rowsPerPage, rows }) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('count');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Sheet variant="outlined" sx={{ width: '100%', boxShadow: 'sm', borderRadius: 'sm', mt: 2 }}>
      <TagsTableToolbar numSelected={selected.length} />
      <Table
        aria-labelledby="tableTitle"
        hoverRow
        sx={{
          '--TableCell-headBackground': 'transparent',
          '--TableCell-selectedBackground': (theme) => theme.vars.palette.success.softBg,
          '& thead th:nth-child(1)': {
            width: '40px'
          },
          '& thead th:nth-child(2)': {
            width: '30%'
          },
          '& tr > *:nth-child(n+3)': { textAlign: 'right', width: '64%' }
        }}
      >
        <TagsTableHead
          numSelected={selected.length}
          order={order}
          orderBy={orderBy}
          onSelectAllClick={handleSelectAllClick}
          onRequestSort={handleRequestSort}
          rowCount={rows.length}
          headCells={headCells}
        />
        <tbody>
          {stableSort(rows, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => (
              <TableRow
                index={index}
                row={row}
                key={row.name}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
          {emptyRows > 0 && <EmptyRow emptyRows={emptyRows} />}
        </tbody>
        <TagsTableFooter
          page={page}
          rowsAmount={rows.length}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
        />
      </Table>
    </Sheet>
  );
};

export default TagsTable;
