import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: "#f44336",
    },
  },
});

export default function CustomStyles() {
  return <ThemeProvider theme={theme} />;
}
