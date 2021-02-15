import { ThemeProvider } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import theme from "./styles/muiTheme";
import MainContainer from "./containers/MainContainer/MainContainer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/">
          <MainContainer />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
