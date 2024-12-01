import { SET_LANG } from "../actions/Actions";

const initialState = {
  lang: localStorage.getItem("lang") || "ar",
};

export function AuthReducer(state = initialState, action) {
  if (action.type === SET_LANG) {
    return {
      ...state,
      lang: action.payload,
    };
  }
  return state;
}
