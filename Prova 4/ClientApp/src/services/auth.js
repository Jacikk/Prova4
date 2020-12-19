export const TOKEN_KEY = "@EvenBetterEvents/token";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getId = () => localStorage.getItem("UserId");
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const userId = id => {
  localStorage.setItem("UserId", id);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem("UserId");
};
