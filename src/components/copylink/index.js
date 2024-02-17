import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const CopyLink = ({ handleCopyPasteLink }) => {
    return (
        <>
            <MenuItem
                onClick={handleCopyPasteLink}
                sx={{
                    mt: 1,
                    border: '1px dashed #33ffc2',
                    borderRadius: 2,
                    color: '#33ffc2',
                    backgroundColor: '#023047',
                    fontSize: 14
                }}
            >
                www.betspace.com.br/invite/1234
            </MenuItem>

        </>
    );
};

export default CopyLink;
