export const SIGNIN_INIT = 'SIGNIN_INIT';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAIL = 'SIGNIN_FAIL';
export const LOGOUT = 'LOGOUT';

export interface actionTypes {
  type: string;
  payLoad: {
    email: string,
    uid: string,
    name: string,
  },
  error: string,
}
