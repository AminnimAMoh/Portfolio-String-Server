import React, { memo } from 'react'
import useMeasure from "react-use-measure";
import { BASE_URL } from './YouTubeEmbed.constants';
import { YouTubeEmbedProps } from './YouTubeEmbed.interface';

function YouTubeEmbed({ embedID }: YouTubeEmbedProps): React.ReactElement {
  const [videoContainer, {width}]=useMeasure();
  
  return (
    <div className="video_container" ref={videoContainer}>
      <div className="video_root">
        <div className="video_responsive">
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
