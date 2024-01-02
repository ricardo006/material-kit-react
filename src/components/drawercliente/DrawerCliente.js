import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import {
    Button,
    FormControl,
    styled,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    TextField,
    FormControlLabel,
    Checkbox,
    Switch,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ClienteForm from '../forms/ClienteForm';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    p: 1,
    m: 2,
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(2),
    },
}));

const CustomButton = styled(Button)(({ theme }) => ({
    p: 1,
    backgroundColor: '#33ffc2',
    color: '#263238',
    '&:hover': {
        backgroundColor: '#023047',
        color: '#33ffc2',
    },
}));

function DrawerCliente({ isOpen, onClose }) {
    const [animatedIconStyle, setAnimatedIconStyle] = useSpring(() => ({
        transform: 'scale(0)',
    }));

    const [loginEnabled, setLoginEnabled] = useState(false);
    const [statusEnabled, setStatusEnabled] = useState(false);

    React.useEffect(() => {
        if (isOpen) {
            setAnimatedIconStyle({ transform: 'scale(1)' });
        }
    }, [isOpen, setAnimatedIconStyle]);

    const handleClose = () => {
        onClose();
    };

    const handleCheckboxChange = (event, setterFunction) => {
        setterFunction(event.target.checked);
    };

    return (
        <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={isOpen}>
            <DialogTitle sx={{ m: 0, p: 2, border: 0, fontSize: 14, color: '#33ffc2', backgroundColor: '#023047', borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }} id="customized-dialog-title">
                Cadastrar Cliente
            </DialogTitle>

            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    // color: (theme) => theme.palette.grey[700],
                    color: '#33ffc2'
                }}
            >
                <CloseIcon />
            </IconButton>

            <DialogContent>
                <ClienteForm />
            </DialogContent>

            <DialogActions>
                <CustomButton onClick={handleClose}>Cadastrar</CustomButton>
            </DialogActions>
        </BootstrapDialog>
    );
}

export default DrawerCliente;
