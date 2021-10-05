import { makeStyles } from "@material-ui/core";

// Styling for history page and task lists
export const useStyles = makeStyles({
  back: {
    minHeight: "100vh",
    minWidth: "100vw",
    backgroundColor: "#2B3856",
    paddingBottom: "2rem",
  },

  outerDiv: {
    display: "flex",
    justifyContent: "center",
  },

  mainDiv: {
    backgroundColor: "#D6D6D7",
    borderRadius: "8px",
    marginTop: "4vh",
    margin: "2vw",
    minHeight: "28vh",
    marginBottom: "2vh",
    minWidth: "40vw",
    display: "flex",
    flexDirection: "column",
  },

  mainText: {
    fontWeight: 700,
    fontSize: "1.2rem",
    color: "#2B3856",
    margin: "1rem",
  },

  "@media (max-width: 40rem)": {
    mainDiv: {
      backgroundColor: "#D6D6D7",
      borderRadius: "8px",
      marginTop: "4vh",
      margin: "2vw",
      minHeight: "28vh",
      marginBottom: "2vh",
      minWidth: "10vw",
      display: "flex",
      flexDirection: "column",
      alignItems: 'center',
      padding: '0.5rem'
    },

    mainText: {
      fontWeight: 700,
      fontSize: "1rem",
      color: "#2B3856",
      margin: "1rem",
    },
  },
});
