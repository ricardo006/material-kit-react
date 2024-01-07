export default function Table(theme) {
  return {
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: theme.palette.text.secondary,
          backgroundColor: '#023047',
        },
      },
    },
  };
}
