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
      display: "flex",
      flexDirection: "column",
    },
  
    countText: {
      fontWeight: 600,
      fontSize: "1.2vw",
      color: "white",
      marginLeft: "57vw",
    },
  
  });