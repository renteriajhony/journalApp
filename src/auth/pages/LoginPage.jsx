import React, { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import {
  Grid,
  TextField,
  Typography,
  Button,
  Link,
  Alert,
  CircularProgress,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import {
  authState,
  // checkingAuthentication,
  startGoogleSingIn,
  startSingInWithEmailPassword,
} from '../../store/auth/';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector((state) => state.auth);

  const { email, password, onInputChange, formState } = useForm({
    email: 'jr@gmail.com',
    password: '111111',
  });

  const isAuthenticating = useMemo(
    () => status === authState.cheking,
    [status]
  );

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startSingInWithEmailPassword(formState));
  };

  const onGoogleSignIn = (event) => {
    event.preventDefault();
    dispatch(startGoogleSingIn(formState));
  };

  return (
    <AuthLayout title='Login'>
      <form
        onSubmit={onSubmit}
        className='animate__animated animate__fadeIn animated__faster'
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Correo'
              type='email'
              placeholder='correo@gmail.com'
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Contraseña'
              type='password'
              placeholder=''
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                fullWidth
                disabled={isAuthenticating}
              >
                {isAuthenticating ? (
                  <CircularProgress color='primary' size={30} />
                ) : (
                  <Typography>Login</Typography>
                )}
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant='contained'
                color='primary'
                fullWidth
                onClick={onGoogleSignIn}
                disabled={isAuthenticating}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ m: 1 }}
            // eslint-disable-next-line no-extra-boolean-cast
            display={!!errorMessage ? '' : 'none'}
          >
            <Alert severity='error'>{errorMessage}</Alert>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to='/auth/register'>
              <Typography>Crear una cuenta</Typography>
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
