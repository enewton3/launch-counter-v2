import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core";
import { Switch, Route, useHistory } from "react-router-dom";
import theme from "./styles/muiTheme";
import MainContainer from "./containers/MainContainer/MainContainer";
import Layout from "./components/shared/Layout";
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";
import { UserContext } from "./context/UserContext";
import SignUp from "./screens/SignUp/SignUp";
import SignIn from "./screens/SignIn/SignIn";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handlVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handlVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogout = async () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={currentUser}>
        <Layout handleLogout={handleLogout}>
          <Switch>
            <Route path="/signin">
              <SignIn handleLogin={handleLogin} />
            </Route>
            <Route path="/signup">
              <SignUp handleRegister={handleRegister} />
            </Route>
            <Route exact path="/">
              <MainContainer />
            </Route>
          </Switch>
        </Layout>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
