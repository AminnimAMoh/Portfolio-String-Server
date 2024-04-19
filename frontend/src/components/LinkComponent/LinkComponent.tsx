import React from "react";
import { LinkComponentProps } from "./LinkComponent.interface";

function LinkComponent({label, url}: LinkComponentProps) {

  return (
    <Link href={url} style={{ bottom: "0px" }}>
      <Typography variant="h5">
        {label}
      </Typography>
    </Link>
  );
}

export default LinkComponent;
