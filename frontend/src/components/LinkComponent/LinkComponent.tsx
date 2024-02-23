import React from "react";
import { Typography, Link } from "@material-ui/core";
import useStyle from "./LinkComponent.style";
import { LinkComponentProps } from "./LinkComponent.interface";

function LinkComponent({label, url}: LinkComponentProps) {
  const classes = useStyle();

  return (
    <Link href={url} style={{ bottom: "0px" }}>
      <Typography variant="h5" className={classes.link_label}>
        {label}
      </Typography>
    </Link>
  );
}

export default LinkComponent;
