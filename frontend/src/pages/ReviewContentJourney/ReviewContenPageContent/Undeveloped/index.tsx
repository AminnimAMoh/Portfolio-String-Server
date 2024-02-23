import { Typography } from '@material-ui/core'
import React, { memo } from 'react'
import useStyle from '../../../styles'


function Undeveloped(): React.ReactElement {
    const classes=useStyle();
    return (
        <div>
            <Typography>
                This page is temporary unavailable.
            </Typography>
        </div>
    )
}

export default memo(Undeveloped)
