import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  buttonContainers: {
    position: "absolute",
    transition: "transform 1s ease-in-out",
  },
  iconButtons: {
    position: "relative",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "50%",
    cursor: "pointer",
    "&:hover, &:focus": {
      "&::after": {
        transform: "rotate(180deg) scale(1.1)",
        filter: "blur(3px)",
      },
      "&::before": {
        transform: "scale(1.2)",
        background: "rgba(18,57,61,.2)",
      },
    },
    "&::after": {
      content: '""',
      display: "block",
      position: "absolute",
      top: "0",
      right: 0,
      bottom: 0,
      left: "0",
      zIndex: -1,
      borderRadius: "inherit",
      width: "100%",
      height: "100%",
      transform: "scale(1.05)",
      background:
        "linear-gradient(155deg, rgba(122,145,147,1) 0%, rgba(6,22,33,1) 100%)",
      transition: "transform .5s ease-in, filter 500ms linear",
      "-webkit-transition":
        "-webkit-filter 500ms linear, -webkit-transform .5s ease-in",
    },
    "&::before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: "-1px",
      right: 0,
      bottom: 0,
      left: "-1px",
      zIndex: -2,
      borderRadius: "inherit",
      background: "rgba(0,0,0,.5)",
      filter: "blur(12px)",
      transition: "transform .2s ease-in-out",
    },
    "&.focused": {
      "&::before": {
        transform: "scale(1.2)",
        filter: "blur(12px)",
        background: "rgba(18,57,61,1)",
      },
    },
  },
}));

export default useStyle;
