import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => createStyles({
    landinginfo: {
      position: "absolute",
    },
    Splash: {
      position: "absolute",
      width: "100%",
      height: "100%",
      padding: theme.spacing(6),
      color: "white",
    },
    loading: {
      width: "100%",
      position: "absolute",
      top: 0,
      zIndex: 1,
    },
    snackbar:{
      cursor: 'pointer',
      // background: 'red',
      '& >*':{
        background: '#9c3c41',
      }
    }
  }));

  export default useStyle