const EmptyRow = ({ emptyRows }) => {
  return (
    <tr
      style={{
        height: `calc(${emptyRows} * 40px)`,
        '--TableRow-hoverBackground': 'transparent'
      }}
    >
      <td colSpan={2} aria-hidden />
    </tr>
  );
};

export default EmptyRow;
