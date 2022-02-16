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
import NavigationBar from '../navigation-bar/navigation-bar';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changePassAction } from '../../store/api-action';
import { isEmailValid, isPasswordValid } from '../../utils';
import { ChangePassUserInput } from '../../types';

const theme = createTheme();
const defaultUserInput: ChangePassUserInput = {
  currentPassword: '',
  newPassword: '',
  repeatPassword: '',
};

export default function ChangePassword() {
  const [userInput, setUserInput] = useState<ChangePassUserInput>(defaultUserInput);
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isEmailValid(userInput.currentPassword)) {
      alert('Password should contain at least 1 capital letter and be 4-10 length');
      return;
    } else if (!isPasswordValid(userInput.newPassword)) {
      alert('Password should contain at least 1 capital letter and be 4-10 length');
      return;
    } else if (userInput.newPassword !== userInput.repeatPassword) {
      alert('Repeat your password correctly');
      return;
    }
    dispatch(changePassAction(userInput.newPassword));
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
            Change Password
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              onChange={(evt) => setUserInput({...userInput, currentPassword: evt.currentTarget.value})}
              value={userInput.currentPassword}
              margin="normal"
              required
              fullWidth
              name="current-password"
              label="Current Password"
              type="password"
              id="current-password"
              autoFocus
            />
            <TextField
              onChange={(evt) => setUserInput({...userInput, newPassword: evt.currentTarget.value})}
              value={userInput.newPassword}
              margin="normal"
              required
              fullWidth
              name="new-password"
              label="New Password"
              type="password"
              id="new-password"
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
              Confirm
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
