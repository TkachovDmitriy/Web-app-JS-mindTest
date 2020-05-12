import React from "react";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import purple from "@material-ui/core/colors/purple";
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

import MainCheckCategory from "./commponets/mainCheckCategory/MainCheckCategory";
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
            <Route exact path="/" component={MainContainer} />
            <Route exact path="/admin" component={AdminPanel} />
            <Route exact path="/p" component={MainCheckCategory} />
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
