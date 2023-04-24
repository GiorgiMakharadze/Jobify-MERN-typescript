import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from "../src/context/action";

export interface IContextState {
  isLoading: boolean;
  showAlert: boolean;
  alertText: string;
  alertType: string;
}

export interface IDisplayAlertAction {
  type: typeof DISPLAY_ALERT;
}
export interface IClearAlertAction {
  type: typeof CLEAR_ALERT;
}
export interface IRegisterUserBegin {
  type: typeof REGISTER_USER_BEGIN;
}
export interface IRegisterUserSuccess {
  type: typeof REGISTER_USER_SUCCESS;
  payload: any;
  token?: string;
}
export interface IRegisterUserError {
  type: typeof REGISTER_USER_ERROR;
  payload: any;
}
