import React from 'react';
import YouTube from 'react-youtube';



const YouTubePlayer = ({ videoId }: {
  videoId: string
}) => {

  const onReady = (event: any) => {

    const player = event.target;

    player.playVideo();
  };

  const onError = (error: any) => {
    console.error('YouTube Player Error:', error);
  };

  return (
    <YouTube
      videoId={videoId}
      onReady={onReady}
      onError={onError}
      style={{
        width: '640px',
        height: '360px',
      }}
    />
  );
};

export default YouTubePlayer;  