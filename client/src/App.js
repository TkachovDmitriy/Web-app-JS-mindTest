import React from "react";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./commponets/header/Header";
import MainContainer from "./commponets/mainContainer/MainContainer";
import {AdminPanel} from "./commponets/dashBoard/AdminPanel";
import QuizWindow from "./commponets/quizWindow/QuizWindow";
import Login from "./commponets/login/Login";
import Registry from "./commponets/registry/Registry";
import MainChooseCategory from "./commponets/mainChooseCategory/MainChooseCategory";
import Music from "./commponets/mainChooseCategory/categories/Music";
import Footer from "./commponets/footer/Footer";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ab47bc",
    },
    type: "dark",
    secondary: {
      main: "#ab47bc",
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/main" component={MainContainer} />
            <Route exact path="/admin" component={AdminPanel} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/registry" component={Registry} />
            <Route exact path="/choose" component={MainChooseCategory} />
            <Route exact path="/quiz" component={QuizWindow} />
            <Route exact path="/music" component={Music} />
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
