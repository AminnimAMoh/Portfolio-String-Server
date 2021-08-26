import { jsx as _jsx } from "react/jsx-runtime";
import { Typography } from '@material-ui/core';
import React from 'react';
import useStyle from '../styles';
function Undeveloped() {
    const classes = useStyle();
    return (_jsx("div", { children: _jsx(Typography, Object.assign({ variant: 'h3', className: classes.topick_heading }, { children: "This page is temporary unavailable." }), void 0) }, void 0));
}
export default Undeveloped;
//# sourceMappingURL=index.js.map