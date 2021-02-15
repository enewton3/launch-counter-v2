import { ThemeProvider } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import theme from "./styles/muiTheme";
import MainContainer from "./containers/MainContainer/MainContainer";
import Layout from "./components/shared/Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Switch>
          <Route path="/">
            <MainContainer />
          </Route>
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
