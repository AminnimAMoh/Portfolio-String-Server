import React from 'react';
import useStyle from '../styles';
import useMeasure from "react-use-measure";
function YouTubeEmbed({ embedID }) {
    const classes = useStyle();
    const [videoContainer, { width }] = useMeasure();
    return (React.createElement("div", { className: classes.video_container, ref: videoContainer },
        React.createElement("div", { className: classes.video_root },
            React.createElement("div", { className: classes.video_responsive },
                React.createElement("iframe", { width: "100%", height: width / 2, src: `https://www.youtube.com/embed/${embedID}`, frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true, title: "Embedded youtube" })))));
}
export default YouTubeEmbed;
//# sourceMappingURL=index.js.map