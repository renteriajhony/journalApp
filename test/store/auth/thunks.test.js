import { signInWithGoogle } from '../../../src/firebase/provider';
import { checkingCredentials, login } from '../../../src/store/auth';
import {
  checkingAuthentication,
  startGoogleSingIn,
} from '../../../src/store/auth/thunks';
import { demoUser } from '../../fixtures/authFixtures';

jest.mock('../../../src/firebase/provider');
describe('Test file thunks', () => {
  console.log(process.env);

  test('Should call checkingCredentials', async () => {
    const dispach = jest.fn();
    await checkingAuthentication()(dispach);
    expect(dispach).toHaveBeenCalledWith(checkingCredentials());
  });

  test('startGoogleSignIn and login ok', async () => {
    const dispach = jest.fn();
    const loginData = { ok: true, ...demoUser };
    await signInWithGoogle.mockResolvedValue(loginData);
    await startGoogleSingIn()(dispach);
    expect(dispach).toHaveBeenCalledWith(checkingCredentials());
    expect(dispach).toHaveBeenCalledWith(login(loginData));
  });
});
