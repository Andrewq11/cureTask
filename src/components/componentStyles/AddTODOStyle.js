import { makeStyles } from "@material-ui/core";

// Styling for input field and label text
export const useStyle = makeStyles({
  textField: {
    margin: "2rem",
    marginLeft: "calc(3.5rem + 2vw)",
    marginRight: "calc(3.5rem + 2vw)",
  },

  labelStyle: {
    fontSize: "calc(1rem + 0.2vw)",
    fontWeight: 600,
  },

  "@media (max-width: 40rem)": {
    textField: {
      marginTop: "2rem",
      marginBottom: "0.5rem",
      marginLeft: "8vw",
      marginRight: "8vw",
    },

    labelStyle: {
      fontSize: "2.5vw",
      fontWeight: 600,
    },
  },
});