import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import useStyle from '../styles';
import useMeasure from "react-use-measure";
function YouTubeEmbed({ embedID }) {
    const classes = useStyle();
    const [videoContainer, { width }] = useMeasure();
    return (_jsx("div", Object.assign({ className: classes.video_container, ref: videoContainer }, { children: _jsx("div", Object.assign({ className: classes.video_root }, { children: _jsx("div", Object.assign({ className: classes.video_responsive }, { children: _jsx("iframe", { width: "100%", height: width / 2, src: `https://www.youtube.com/embed/${embedID}`, frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true, title: "Embedded youtube" }, void 0) }), void 0) }), void 0) }), void 0));
}
export default YouTubeEmbed;
//# sourceMappingURL=index.js.map