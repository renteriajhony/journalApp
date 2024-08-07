import { authState } from './../../src/store/auth/authState';

export const initialState = {
  status: authState.cheking,
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};
export const authenticatedState = {
  status: authState.authenticated,
  uid: '111111',
  email: 'jr@google.com',
  displayName: 'Jhony Test',
  photoURL: 'https://demo.jpg',
  errorMessage: null,
};

export const notAuthenticatedState = {
  status: authState.notAuthenticated,
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: 'no-autenticado',
};

export const demoUser = {
  uid: '222222',
  email: 'demo@google.com',
  displayName: 'Demo User',
  photoURL: 'https://foto.jpg',
};
