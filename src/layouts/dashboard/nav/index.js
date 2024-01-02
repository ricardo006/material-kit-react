import PropTypes from 'prop-types';
import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Link, Button, Drawer, Divider, Typography, Avatar, Stack } from '@mui/material';
// mock
import account from '../../../_mock/account';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// components
import Logo from '../../../components/logo';
import Scrollbar from '../../../components/scrollbar';
import NavSection from '../../../components/nav-section';

import { Context } from '../../../context/AuthContext';

import { fCurrency, fMoney } from '../../../utils/formatNumber';

import navConfig from './config';

const NAV_WIDTH = 280;

const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function Nav({ openNav, onCloseNav }) {
  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'lg');

  const { userData, loading, authenticated } = useContext(Context);

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >

      <Box sx={{
        px: 1, ml: 1, mr: 1, mt: 2, py: 3, display: 'inline-flex', backgroundColor: '#001D3D', boxShadow: '0px 5px 15px 0px rgba(0, 0, 0, 0.15)', borderRadius: '10px'
      }}>
        <Logo />
      </Box>

      <Box sx={{ mb: 2, m: 1, mt: 2 }}>
        <Link underline="none">
          <StyledAccount>
            <Avatar src={account.photoURL} alt="photoURL" />

            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary', fontSize: 14 }}>
                {userData && userData.nome_usuario}
              </Typography>

              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>

                {
                  userData &&
                  (userData.id_tipo_usuario === 1
                    ? 'Administrador'
                    : userData.id_tipo_usuario === 2
                      ? 'Cambista'
                      : userData.id_tipo_usuario === 3
                        ? 'Apostador'
                        : '')
                }
              </Typography>

              <Typography variant="subtitle2" sx={{ color: 'text.success' }}>
                {`R${fMoney(userData && userData.saldo)}`}
              </Typography>
            </Box>
          </StyledAccount>
        </Link>
      </Box>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Box sx={{ m: 1 }}>
        <Box sx={{ display: 'flex', m: 1 }}>
          <Button fullWidth variant="outlined" color="primary" sx={{ mr: 1, ml: 0 }}>
            Promoções
          </Button>

          <Button fullWidth variant="contained" color="primary">
            Depositar
          </Button>
        </Box>
      </Box>

      <NavSection data={navConfig} />

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <Stack alignItems="center" spacing={3} sx={{ pt: 5, borderRadius: 2, position: 'relative' }}>
          {/* <Box
            component="img"
            src="/assets/illustrations/illustration_avatar.png"
            sx={{ width: 100, position: 'absolute', top: -50 }}
          /> */}

          {/* <Box sx={{ textAlign: 'center' }}>
            <Typography gutterBottom variant="h6">
              Get more?
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              From only $69
            </Typography>
          </Box>

          <Button href="https://material-ui.com/store/items/minimal-dashboard/" target="_blank" variant="contained">
            Upgrade to Pro
          </Button> */}
        </Stack>
      </Box>
    </Scrollbar >
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
