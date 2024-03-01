import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => createStyles({
    root: {
      height: "100vh",
      display: "flex",
      flexFlow: "row-reverse",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        flexFlow: "column",
      },
      "&.open": {
        paddingRight: theme.spacing(20),
        [theme.breakpoints.down("md")]: {
          paddingRight: theme.spacing(0),
        },
      },
      "&.close": {
        paddingRight: 0,
      },
    },
}))

export default useStyle;