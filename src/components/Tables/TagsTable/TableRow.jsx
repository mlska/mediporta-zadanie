import Checkbox from '@mui/joy/Checkbox';

const TableRow = ({ selected, setSelected, row, index }) => {
  const { name, count } = row;

  const isSelected = selected.indexOf(name) !== -1;

  const labelId = `table-checkbox-${index}`;

  const handleClick = (name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  return (
    <tr
      onClick={() => handleClick(row.name)}
      role="checkbox"
      aria-checked={isSelected}
      tabIndex={-1}
      key={row.name}
      selected={isSelected}
      style={
        isSelected
          ? {
              '--TableCell-dataBackground': 'var(--TableCell-selectedBackground)',
              '--TableCell-headBackground': 'var(--TableCell-selectedBackground)'
            }
          : {}
      }
    >
      <th scope="row">
        <Checkbox
          checked={isSelected}
          slotProps={{
            input: {
              'aria-labelledby': labelId
            }
          }}
          sx={{ verticalAlign: 'top' }}
        />
      </th>
      <th id={labelId} scope="row">
        {name}
      </th>
      <td>{count}</td>
    </tr>
  );
};

export default TableRow;
