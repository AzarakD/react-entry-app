import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {
  createTheme,
  ThemeProvider
} from '@mui/material/styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../store/api-action';
import NavigationBar from '../navigation-bar/navigation-bar';
import {
  isEmailValid,
  isPasswordValid
} from '../../utils';
import { UserDataType } from '../../types';
import { showToast } from '../../store/action';
import { ToastType } from '../../const';

const theme = createTheme();
const defaultUserInput: UserDataType = {
  email: '',
  password: '',
};

export default function Login(): JSX.Element {
  const [userInput, setUserInput] = useState<UserDataType>(defaultUserInput);
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isEmailValid(userInput.email)) {
      dispatch(showToast(ToastType.Info, 'Invalid email'));
      return;
    } else if (!isPasswordValid(userInput.password)) {
      dispatch(showToast(ToastType.Info, 'Password should contain at least 1 capital letter and be 4-10 length'));
      return;
    }
    const userData = {
      email: userInput.email,
      password: userInput.password,
    };

    dispatch(loginAction(userData));
  };

  return (
    <ThemeProvider theme={theme}>
      <NavigationBar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              onChange={(evt) => setUserInput({...userInput, email: evt.currentTarget.value})}
              value={userInput.email}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
            />
            <TextField
              onChange={(evt) => setUserInput({...userInput, password: evt.currentTarget.value})}
              value={userInput.password}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
