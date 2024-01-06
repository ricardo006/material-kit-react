import React, { useState, useEffect } from 'react';
import { useSpring } from 'react-spring';
import {
    styled,
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ClienteForm from '../forms/clientes/ClienteForm';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        width: '100%',
        maxWidth: '800px',
    }
}));

function DrawerCliente({ isOpen, onClose }) {
    const [animatedIconStyle, setAnimatedIconStyle] = useSpring(() => ({
        transform: 'scale(0)',
    }));

    const [loginEnabled, setLoginEnabled] = useState(false);
    const [statusEnabled, setStatusEnabled] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setAnimatedIconStyle({ transform: 'scale(1)' });
        }
    }, [isOpen, setAnimatedIconStyle]);

    const handleCheckboxChange = (event, setterFunction) => {
        setterFunction(event.target.checked);
    };

    return (
        <BootstrapDialog onClose={onClose} aria-labelledby="customized-dialog-title" open={isOpen}>
            <DialogTitle sx={{ m: 0, p: 2, border: 0, fontSize: 14, color: '#33ffc2', backgroundColor: '#023047', borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }} id="customized-dialog-title">
                Cadastrar Cliente
            </DialogTitle>

            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: 'absolute',
                    right: 2,
                    top: 8,
                    // color: (theme) => theme.palette.grey[700],
                    color: '#33ffc2'
                }}
            >
                <CloseIcon />
            </IconButton>

            <DialogContent>
                <ClienteForm onCloseDrawer={onClose} />
            </DialogContent>
        </BootstrapDialog>
    );
}

export default DrawerCliente;
