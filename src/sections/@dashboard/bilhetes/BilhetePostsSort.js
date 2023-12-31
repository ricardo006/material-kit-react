import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, TextField } from '@mui/material';

BilhetePostsSort.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  onSort: PropTypes.func.isRequired,
};

export default function BilhetePostsSort({ options, onSort }) {
  return (


    <TextField select size="small" value="latest" onChange={onSort}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
