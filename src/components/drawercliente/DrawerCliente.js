import React from 'react';
import { useSpring, animated } from 'react-spring';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
        width: '100%',
        maxWidth: '600px', // Defina um valor máximo para a largura
        margin: '0 auto', // Centraliza o conteúdo
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#33ffc2',
    color: '#263238',
    '&:hover': {
        backgroundColor: '#30557D',
        color: '#fff',
    },
}));

function DrawerCliente({ isOpen, onClose }) {
    const [animatedIconStyle, setAnimatedIconStyle] = useSpring(() => ({
        transform: 'scale(0)',
    }));

    React.useEffect(() => {
        if (isOpen) {
            setAnimatedIconStyle({ transform: 'scale(1)' });
        }
    }, [isOpen, setAnimatedIconStyle]);

    const handleClose = () => {
        onClose();
    };

    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={isOpen}
        >
            <DialogTitle sx={{ m: 0, p: 2, fontSize: 14 }} id="customized-dialog-title">
                Cadastrar Cliente
            </DialogTitle>

            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>

            <DialogContent>
                <div>
                    <TextField
                        label="Nome Completo"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />


                    <TextField
                        label="Sobrenome"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Nome Completo"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />


                    <TextField
                        label="Nome Completo"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />


                    <TextField
                        label="Nome Completo"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />

                </div>
            </DialogContent>

            <DialogActions>
                <CustomButton onClick={handleClose}>
                    Cadastrar
                </CustomButton>
            </DialogActions>
        </BootstrapDialog>
    );
}

export default DrawerCliente;
