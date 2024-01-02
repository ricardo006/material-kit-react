export default function Tooltip(theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[200],
        },
        arrow: {
          color: theme.palette.grey[400],
        },
      },
    },
  };
}
