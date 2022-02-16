import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {
  createTheme,
  ThemeProvider
} from '@mui/material/styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerAction } from '../../store/api-action';
import NavigationBar from '../navigation-bar/navigation-bar';
import {
  isEmailValid,
  isPasswordValid
} from '../../utils';
import { AppRoute } from '../../const';
import { RegUserInput } from '../../types';

const theme = createTheme();
const defaultUserInput: RegUserInput = {
  email: '',
  password: '',
  repeatPassword: '',
};

export default function Registration() {
  const [userInput, setUserInput] = useState<RegUserInput>(defaultUserInput);
  const dispatch = useDispatch();

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!isEmailValid(userInput.email)) {
      alert('Invalid email');
      return;
    } else if (!isPasswordValid(userInput.password)) {
      alert('Password should contain at least 1 capital letter and be 4-10 length');
      return;
    } else if (userInput.password !== userInput.repeatPassword) {
      alert('Repeat your password correctly');
      return;
    }
    const userData = {
      email: userInput.email,
      password: userInput.password,
    };
    dispatch(registerAction(userData));
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
            Registration
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
            <TextField
              onChange={(evt) => setUserInput({...userInput, repeatPassword: evt.currentTarget.value})}
              value={userInput.repeatPassword}
              margin="normal"
              required
              fullWidth
              name="repeat-password"
              label="Repeat Password"
              type="password"
              id="repeat-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href={AppRoute.Login} variant="body2">
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
