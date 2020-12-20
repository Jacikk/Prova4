import Api from '../services/api'

export const TOKEN_KEY = "@Agenda_backend/token";

export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => sessionStorage.getItem(TOKEN_KEY);

export const getId = () => sessionStorage.getItem("@Agenda_backend/UserId");

export const login = token => {
  sessionStorage.setItem(TOKEN_KEY, token);
};

export const userId = id => {
  sessionStorage.setItem("@Agenda_backend/UserId", id);
};

export const logout = () => {
  try {
    Api.post("/auth/Logout");

  } catch (err) {
    this.setState({
      error:
        "Houve um problema com o login, verifique suas credenciais."
    });
  } finally {
    console.log("Deslogou tudo certo");
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem("@Agenda_backend/UserId");
  }
};
