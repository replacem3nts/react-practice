import './VideoItem.css';
import React from 'react';

const VideoItem = ({ snippet }) => {
  console.log(snippet);
  return (
    <div className="video-item item">
      <img
        className="ui image"
        src={snippet.thumbnails.medium.url}
        alt={snippet.description}
      />
      <div className="content">
        <div className="header">{snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
