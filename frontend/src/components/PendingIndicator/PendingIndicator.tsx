import React, { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

function DataPending(): React.ReactElement {
  const {dataStore: { errorState }}=useSelector((state: RootState)=> state)
  return (
    <div >
    </div>
  );
}

export default memo(DataPending);
