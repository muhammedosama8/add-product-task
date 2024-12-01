export const SET_LANG = "lang";

export function setLang(status) {
  localStorage.setItem("lang", status);
  document.body.className = status;

  return {
    type: SET_LANG,
    payload: status,
  };
}
