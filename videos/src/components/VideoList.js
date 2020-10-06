import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  console.log(videos);
  const renderedList = videos.map((video) => (
    <VideoItem key={video.id.videoId} {...video} />
  ));
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
