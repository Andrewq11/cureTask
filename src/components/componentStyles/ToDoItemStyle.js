import { makeStyles } from "@material-ui/core";

// Styling for ToDoItem card
export const useStyle = makeStyles({
  card: {
    backgroundColor: "#2B3856",
    padding: "1rem",
    display: "flex",
    flexDirection: "row",
    marginBottom: "1rem",
  },

  toDoText: {
    color: "white",
    alignSelf: "center",
    flex: "3",
    fontWeight: "500",
  },

  checkIcon: {
    marginLeft: "auto",
    color: "white",
  },

  "@media (max-width: 40rem)": {
    card: {
      backgroundColor: "#2B3856",
      paddingRight: "0.5rem",
      display: "flex",
      flexDirection: "row",
      marginBottom: "1rem",
      height: '1vh',
      alignItems: 'center',
      width: "30vw"
    },

    toDoText: {
      color: "white",
      alignSelf: "center",
      flex: "3",
      fontWeight: "500",
      fontSize: '3vw'
    },  

    checkIcon: {
      marginLeft: '-2vw',
      color: "white",
    },
  },
});
