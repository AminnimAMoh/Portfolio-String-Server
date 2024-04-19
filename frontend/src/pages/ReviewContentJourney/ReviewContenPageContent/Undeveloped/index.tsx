import { Typography } from '@frontend-common/components/Typography'
import React, { memo } from 'react'


function Undeveloped(): React.ReactElement {
    return (
        <div>
            <Typography variant='h1'>
                This page is temporary unavailable.
            </Typography>
        </div>
    )
}

export default memo(Undeveloped)
