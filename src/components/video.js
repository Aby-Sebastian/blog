import React from "react"
const Video = ({ videoSrcURL, ...props }) => (
  <div className="video">
    <iframe
      src={videoSrcURL}
      title="hello guys"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video