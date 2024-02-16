import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton, Popover } from '@mui/material';
// mocks_
import account from '../../../_mock/account';

import { Context } from '../../../context/AuthContext';

const MENU_OPTIONS = [
  {
    label: 'Meu Perfil',
    icon: 'eva:person-fill',
  },
  {
    label: 'Configurações',
    icon: 'eva:settings-2-fill',
  },
];

export default function AccountPopover() {
  const [open, setOpen] = useState(null);
  const navigate = useNavigate();

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const { handleLogout, userData } = useContext(Context);

  const handleClose = () => {
    setOpen(null);
  };

  const handleLogoutPopover = () => {
    handleLogout();
  }

  const handleRedirect = (label) => {
    if (label === 'Configurações') {
      navigate('/dashboard/configuracoes', { replace: true });
      handleClose();
    } else if (label === 'Meu Perfil') {
      // Adicione o código para redirecionar para a página do perfil do usuário
    }
  }

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '20px',
              position: 'absolute',
            },
          }),
        }}
      >
        <Avatar src={account.photoURL} alt="photoURL" />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {userData && userData.nome_completo}
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {userData && userData.email}
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {
              userData && userData.id_tipo_usuario === 1
                ? 'Administrador'
                : userData && userData.id_tipo_usuario === 2
                  ? 'Cambista'
                  : userData && userData.id_tipo_usuario === 3
                    ? 'Apostador'
                    : ''
            }
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} onClick={() => handleRedirect(option.label)}>
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'solid' }} />

        <MenuItem onClick={handleLogoutPopover} sx={{ m: 1 }}>
          Sair
        </MenuItem>
      </Popover>
    </>
  );
}
