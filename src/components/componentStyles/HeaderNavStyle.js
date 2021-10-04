import { makeStyles } from "@material-ui/core";

// Styling for header
export const useStyles = makeStyles({
  buttonEnd: {
    marginRight: "5%",
  },
  button: {
    marginRight: "7%",
  },
  buttonText: {
    fontWeight: 800,
    color: "#2B3856",
    fontSize: "1.2rem",
  },
  titleText: {
    fontWeight: 800,
    color: "#2B3856",
    fontSize: "2rem",
  },
  toolMargin: {
    marginBottom: "2%",
  },

  '@media (max-width: 40rem)': {
    button: {
      marginRight: "2%"
    },
    titleText: {
      fontWeight: 800,
      color: "#2B3856",
      fontSize: "1rem",
      textAlign: 'center'
    },

    buttonText: {
      fontWeight: 800,
      color: "#2B3856",
      fontSize: "0.8rem",
    },

    buttonEnd: {
      marginRight: "1%",
    },
  }
});
