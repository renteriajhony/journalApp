import { authState } from './../../../src/store/auth/authState';
import { authSlice, login, logout } from '../../../src/store/auth/authSlice';
import {
  initialState,
  authenticatedState,
  notAuthenticatedState,
  demoUser,
} from './../../fixtures/authFixtures';

describe('Test file authSlice', () => {
  test('Should return the initial state and be called "auth"', () => {
    const state = authSlice.reducer(initialState, {});
    expect(authSlice.name).toBe('auth');
    expect(state).toEqual(initialState);
  });
  test('Should i do the authentication', () => {
    const state = authSlice.reducer(initialState, login(demoUser));
    expect(state.status).toEqual(authState.authenticated);
    // expect(state).toEqual(authenticatedState);
  });
  test('Should i do the logouth without arguments', () => {
    let state = authSlice.reducer(authenticatedState, demoUser);
    expect(state.status).toEqual(authState.authenticated);
    state = authSlice.reducer(initialState, logout());
    expect(state.status).toEqual(authState.notAuthenticated);
  });

  test('Should i do the logouth without arguments', () => {
    let state = authSlice.reducer(authenticatedState, demoUser);
    expect(state.status).toEqual(authState.authenticated);
    state = authSlice.reducer(initialState, logout({ errorMessage: 'Nada' }));
    expect(state.errorMessage).toEqual('Nada');
  });
});
