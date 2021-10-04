import { makeStyles } from "@material-ui/core";

// Styling for home page
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
    marginBottom: "2vh",
    minWidth: "50vw",
    maxWidth: "60vw",
    display: "flex",
    flexDirection: "column",
  },

  countDiv: {
    marginLeft: "auto",
    marginBottom: '1rem',
    display: "flex",
    direction: 'row'
  },

  countDivPlace: {
    marginRight: '2.5rem',
    width: "1rem",
    height: "1rem",
  },

  countText: {
    fontWeight: 600,
    fontSize: "1vw",
    color: "#2B3856",
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

    countDivPlace: {
      marginRight: '0.6rem',
      width: "1rem",
      height: "1rem",
    },
  
    countText: {
      fontWeight: 600,
      fontSize: "0.5rem",
      color: "#2B3856",
    },
  }
});
