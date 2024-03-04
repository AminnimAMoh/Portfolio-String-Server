import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    boxSizing: 'content-box',
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    maxWidth: "250px",
    padding: "0 165px",
    zIndex: 1,
    transition: "transform 1s ease-in",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "20%",
      paddingTop: theme.spacing(15),
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(7),
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(1),
    },
  },
  menuButtons: {
    position: "absolute",
  },
  textOnPath: {
    position: "absolute",
    "&>path": {
      transform: "translate(-693.7247px, -269.9313px)",
      // fill: 'transparent',
    },
    "&>text": {
      fill: "white",
    },
  },
  introTexts_container: {
    position: "absolute",
    width: "max-content",
    transform: "translate(0, -50%)",
    top: "50%",
    left: "100%",
    paddingLeft: theme.spacing(2),
    zIndex: -3,
  },
  introTexts_text: {
    position: "relative",
    zIndex: 0,
    display: 'block',
    color: '#e4e5e7',
    padding: theme.spacing(1, 1, 1, 2),
    "&::before": {
      content: '""',
      display: "block",
      // backgroundColor: "#e4e5e7",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: "-40%",
      right: 0,
      zIndex: -3,
      borderRadius: '6px'
    },
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: "#061621",
      position: "absolute",
      transform: "scale(1.1)",
      top: 0,
      bottom: 0,
      left: "-30%",
      right: 0,
      zIndex: 1,
      transition: 'width 1s ease-in-out 1.1s, transform 1s ease-in-out'
    },
    "&.open": {
      "&::after": {
        width: 0,
        transform: 'translateX(100%) scale(1.1)',
      },
    },
    "&.close": {
      "&::after": {
        width: '130%',
        transform: 'translateX(0) scale(1.1)'
      },
    },
  },
}));

export default useStyle;
