// Next
import Image from 'next/image';

// React
import { useState, useRef, useEffect } from 'react';

// Assets
import play from 'assets/icons/play_video.svg';
import decore_presentation_first from 'assets/images/solutions/decore_presentation@first.svg';
import bg_black from 'assets/video/bg_black.png';
import bg_white from 'assets/video/bg_white.png';
import config from 'assets/video/config.svg';
import hour from 'assets/video/hour.svg';
import top_cel from 'assets/video/top_cel.svg';

// Styles
import * as S from './Video.styles';

// i18n
import useTranslations from 'i18n';

interface VideoProps {
  src: string;
  lng: string;
}

const Video = ({ src, lng }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const t = useTranslations();

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
    setIsPlaying(false);
  }, [src]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          pauseVideo();
        }
      });
    }, options);

    const videoElement = videoRef.current;
    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <S.Component>
      <S.Video>
        <Image src={config} className="config" alt="config" draggable="false" />
        <Image src={hour} className="hour" alt="hour" draggable="false" />
        <Image src={top_cel} className="top_cel" alt="top_cel" draggable="false" />
        <Image src={bg_black} className="bg_black" alt="bg_black" draggable="false" />
        <Image src={bg_white} className="bg_white" alt="bg_white" draggable="false" />
        <video ref={videoRef} controls={false} id={`video-${src}`}>
          <source src={src} type="video/mp4" />
          <track kind="captions" label={lng} srcLang={lng} default />
        </video>
        <span>
          {!isPlaying && (
            <button onClick={playVideo} className="play" aria-label="play">
              <Image src={play} className="play" alt="play" draggable="false" />
            </button>
          )}
          {isPlaying && (
            <button onClick={pauseVideo} className="pause" aria-label="pause">
              <Image src={play} className="stop" alt="stop" draggable="false" />
            </button>
          )}
        </span>
      </S.Video>
      <div className="decore_botton_container">
        <Image
          src={decore_presentation_first}
          className="decore_presentation_first"
          alt="decore_presentation_first"
          draggable="false"
        />
      </div>
      <p>{t('solutions.config.screen.presentation.watch')}</p>
    </S.Component>
  );
};

export default Video;
