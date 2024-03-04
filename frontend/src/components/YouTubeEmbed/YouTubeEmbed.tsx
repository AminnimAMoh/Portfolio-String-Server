import React, { memo } from 'react'
import useStyle from '@pages/styles'
import useMeasure from "react-use-measure";
import { BASE_URL } from './YouTubeEmbed.constants';
import { YouTubeEmbedProps } from './YouTubeEmbed.interface';

function YouTubeEmbed({ embedID }: YouTubeEmbedProps): React.ReactElement {
  const classes = useStyle();
  const [videoContainer, {width}]=useMeasure();
  
  return (
    <div className={classes.video_container} ref={videoContainer}>
      <div className={classes.video_root}>
        <div className={classes.video_responsive}>
          <iframe
            width="100%"
            height= {width/2}
            src={`${BASE_URL}${embedID}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="Embedded youtube"
          />
        </div>
      </div>
    </div>
  )
}

export default memo(YouTubeEmbed)
