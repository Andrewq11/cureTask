import { createTheme, ThemeProvider } from "@material-ui/core";
import { HashRouter as Router } from "react-router-dom";
import Main from "./components/Main";

// Creating theme for MaterialUI components and adjusting default settings
const theme = createTheme({
  palette: {
    primary: {
      main: "#2B3856",
    },
    secondary: {
      main: "#D6D6D7",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    h5: {
      fontWeight: 700,
    },
  },
});

// Providing Theme and Router to app tree
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Main />
      </Router>
    </ThemeProvider>
  );
}

export default App;
