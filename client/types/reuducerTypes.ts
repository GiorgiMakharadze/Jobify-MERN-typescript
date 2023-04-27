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
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_JOB_BEGIN,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  GET_JOB_BEGIN,
  GET_JOB_SUCCESS,
  SET_EDIT_JOB,
} from "../src/context/action";

export type Action =
  | IDisplayAlertAction
  | IClearAlertAction
  | ISetupUserBegin
  | ISetupUserSuccess
  | ISetupUserError
  | IToggleSidebar
  | ILogoutUser
  | IUpdateUserBegin
  | IUpdateUserSuccess
  | IUpdateUserError
  | IHandleChange
  | IClearValues
  | ICreateJobSuccess
  | ICreateJobBegin
  | ICreateJobError
  | IGetJobBegin
  | IGetJobError
  | ISetEditJob;

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

export interface IHandleChange {
  type: typeof HANDLE_CHANGE;
  payload?: any;
}
export interface IClearValues {
  type: typeof CLEAR_VALUES;
  payload?: any;
}

export interface ICreateJobSuccess {
  type: typeof CREATE_JOB_SUCCESS;
  payload?: any;
}

export interface ICreateJobBegin {
  type: typeof CREATE_JOB_BEGIN;
  payload?: any;
}
export interface ICreateJobError {
  type: typeof CREATE_JOB_ERROR;
  payload?: any;
}

export interface IGetJobBegin {
  type: typeof GET_JOB_BEGIN;
  payload?: any;
}
export interface IGetJobError {
  type: typeof GET_JOB_SUCCESS;
  payload?: any;
}

export interface ISetEditJob {
  type: typeof SET_EDIT_JOB;
  payload?: any;
}
