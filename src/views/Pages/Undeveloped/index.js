import { Typography } from '@material-ui/core';
import React from 'react';
import useStyle from '../styles';
function Undeveloped() {
    const classes = useStyle();
    return (React.createElement("div", null,
        React.createElement(Typography, { variant: 'h3', className: classes.topick_heading }, "This page is temporary unavailable.")));
}
export default Undeveloped;
//# sourceMappingURL=index.js.map