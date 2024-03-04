import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  title_container: {
    color: "white",
    paddingRight: theme.spacing(4),
    "& > .MuiGrid-item img": {
      width: "100%",
    },
  },
  topic_heading: {
    color: "white",
    "& >*:not(:first-child)": {
      paddingTop: "8px",
    },
  },
  link_label: {
    color: "#5C3B42",
  },
}));

export default useStyle;
