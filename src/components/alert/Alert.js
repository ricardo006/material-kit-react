import * as React from 'react';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import Typography from '@mui/material/Typography';

export default function CustomAlert({ open, message, onClose }) {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        onClose();
    };

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'top' }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
        >
            <Alert sx={{ p: 2 }}
                severity="error"
                action={
                    <IconButton
                        size="small"
                        aria-label="fechar"
                        color="error"
                        onClick={handleClose}
                    >
                        <CancelTwoToneIcon sx={{ color: '#ff1743' }} />
                    </IconButton>
                }
                onClose={handleClose}
            >
                <Typography sx={{ color: '#001D3D', fontWeight: 500, fontSize: 14 }}>
                    {message}
                </Typography>
            </Alert>
        </Snackbar>
    );
}
