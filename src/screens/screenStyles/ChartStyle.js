import { makeStyles } from "@material-ui/core";


// Styling for chart page
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
      padding: "1rem",
      minHeight: "70vh",
      minWidth: "70vw",
    },
  
    secDiv: {
      borderRadius: "8px",
      marginTop: "4vh",
      minHeight: "70vh",
      marginBottom: "2vh",
      display: "flex",
      alignItems: "center",
    },
  
    mainText: {
      fontWeight: 700,
      fontSize: "2vw",
      color: "white",
      margin: "1rem",
    },
  });