import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {
  AlertColor,
  AlertProps
} from '@mui/material/Alert';
import { forwardRef } from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { getUiState } from '../../store/ui/selector';
import { clearToast } from '../../store/action';

const DELAY = 5000;
const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ToastMessage() {
  const dispatch = useDispatch();
  const {
    toastOpen,
    toastType,
    toastMessage
  } = useSelector(getUiState);

  const handleClose = () => dispatch(clearToast());

  console.log(toastOpen, toastType, toastMessage);
  return (
    <Snackbar open={toastOpen} autoHideDuration={DELAY} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={toastType as AlertColor}
        sx={{ width: '100%' }}
      >
        {toastMessage}
      </Alert>
    </Snackbar>
  );
}
