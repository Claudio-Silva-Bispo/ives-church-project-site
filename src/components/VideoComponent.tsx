import React, { useEffect, useState } from 'react';

interface VideoComponentProps {
  videoSrc: string;
  width?: string;
  height?: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ width = "400", height = "auto" }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <video width={width} height={height} 
      controls
      autoPlay
      muted
      loop>
        <source src="/video-um.webm" type="video/webm"/>
        <source src="/video-um.mp4" type="video/mp4"/>
        Seu navegador não suporta a tag de vídeo.
      </video>
    </div>
  );
};

export default VideoComponent;