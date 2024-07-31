// Next
import Image from 'next/image';

// React
import { useState, useRef, useEffect } from 'react';

// Assets
import play_dark from 'assets/icons/play_video.svg';
import play from 'assets/icons/play.svg';

// Styles
import * as S from './VideoHome.styles';

interface VideoProps {
  src: string;
  lng?: string;
}

const VideoHome = ({ src, lng }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = src;
      videoRef.current.load();
      setIsPlaying(false);
    }
  }, [src]);

  return (
    <S.Component>
      {!isPlaying && <S.BG />}
      <S.Video ref={videoRef} controls={false} id={`video-${src}`}>
        <source src={src} type="video/mp4" />
        <track kind="captions" label={lng} srcLang={lng} default />
      </S.Video>
      <span className={!isPlaying ? 'play' : 'stop'}>
        <button onClick={!isPlaying ? playVideo : pauseVideo} aria-label={!isPlaying ? 'play' : 'stop'}>
          <Image
            src={!isPlaying ? play : play_dark}
            alt={!isPlaying ? 'play' : 'stop'}
            draggable="false"
            width={100}
          />
        </button>
      </span>
    </S.Component>
  );
};

export default VideoHome;
