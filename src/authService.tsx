// Replace with your API URL

const AuthService = {
  logout: () => {
    sessionStorage.removeItem("token");
  },

  getToken: () => {
    return sessionStorage.getItem("token");
  },

  isAuthenticated: () => {
    sessionStorage.getItem("token");

    return false;
  },
};

export default AuthService;
