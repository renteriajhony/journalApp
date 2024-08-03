import {
  registerWithEmailPassword,
  signInWithGoogle,
  loginWithEmailPassword,
  logoutFirebase,
} from '../../firebase/provider';
import { checkingCredentials, logout, login } from './';

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSingIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    if (!result.ok)
      return dispatch(logout({ errorMessage: result.errorMessage }));

    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await registerWithEmailPassword({
      email,
      password,
      displayName,
    });

    if (!result.ok)
      return dispatch(logout({ errorMessage: result.errorMessage }));

    dispatch(login(result));
  };
};

export const startSingInWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await loginWithEmailPassword({ email, password });
    if (!result.ok)
      return dispatch(logout({ errorMessage: result.errorMessage }));

    dispatch(login(result));
  };
};

export const startLogouth = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(logout({ errorMessage: null }));
  };
};
