import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {
  useEffect,
  useState
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthStatus } from '../../store/user/selector';
import {
  AppRoute,
  AuthStatus
} from '../../const';
import { MenuItemType } from '../../types';

export default function NavigationBar (): JSX.Element {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [pages, setPages] = useState<MenuItemType[]>([]);

  const authStatus = useSelector(getAuthStatus);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (url: string) => {
    setAnchorElNav(null);
    navigate(url);
  };

  useEffect(() => {
    authStatus !== AuthStatus.Auth ?
      setPages([
        {
          name: 'Login',
          url: AppRoute.Login,
        },
        {
          name: 'Registration',
          url: AppRoute.Registration,
        },
      ])
      : 
      setPages([
        {
          name: 'Change Password',
          url: AppRoute.ChangePassword,
        },
      ]);
  }, [authStatus]);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Button
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              Menu
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {
                pages.map((page) => (
                  <MenuItem key={page.name} onClick={() => handleCloseNavMenu(page.url)}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))
              }
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleCloseNavMenu(page.url)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
