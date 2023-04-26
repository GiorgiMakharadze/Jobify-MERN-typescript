import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
} from "../src/context/action";

const token = localStorage.getItem("token");

export interface IContextState {
  isLoading: boolean;
  showAlert: boolean;
  alertText: string;
  alertType: string;
  token: undefined | null | typeof token;
  user: undefined | null;
  userLocation: string;
  jobLocation: string;
  showSidebar: boolean;
}

export interface IDisplayAlertAction {
  type: typeof DISPLAY_ALERT;
}
export interface IClearAlertAction {
  type: typeof CLEAR_ALERT;
}

export interface ISetupUserBegin {
  type: typeof SETUP_USER_BEGIN;
  payload?: any;
}
export interface ISetupUserSuccess {
  type: typeof SETUP_USER_SUCCESS;
  payload?: any;
}
export interface ISetupUserError {
  type: typeof SETUP_USER_ERROR;
  payload?: any;
}

export interface IToggleSidebar {
  type: typeof TOGGLE_SIDEBAR;
}

export interface ILogoutUser {
  type: typeof LOGOUT_USER;
}

export interface IUpdateUserBegin {
  type: typeof UPDATE_USER_BEGIN;
  payload?: any;
}
export interface IUpdateUserSuccess {
  type: typeof UPDATE_USER_SUCCESS;
  payload?: any;
}
export interface IUpdateUserError {
  type: typeof UPDATE_USER_ERROR;
  payload?: any;
}
