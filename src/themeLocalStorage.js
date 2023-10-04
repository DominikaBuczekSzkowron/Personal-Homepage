const localStorageKey = "themeState";

export const saveThemeInLocalStorage = (theme) =>
  localStorage.setItem(localStorageKey, JSON.stringify(theme));

export const getThemeFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || "light";
