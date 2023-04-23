import {
  IClearAlertAction,
  IContextState,
  IDisplayAlertAction,
} from "../../types/contextTypes";
import { DISPLAY_ALERT, CLEAR_ALERT } from "./action";

type Action = IDisplayAlertAction | IClearAlertAction;

const reducer = (state: IContextState, action: Action): IContextState => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values!",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }
  throw new Error(`no such action: ${action}`);
};

export default reducer;
