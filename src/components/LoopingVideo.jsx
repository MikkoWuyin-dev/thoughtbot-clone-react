import { useRef, useState } from 'react';
import { PlayIcon, PauseIcon } from './icons.jsx';

/**
 * Autoplaying, muted, looping video with a pause/play control, matching the
 * original markup (two <video> elements: the autoplay one and a controls
 * fallback for reduced-motion users).
 */
export default function LoopingVideo({ src, label, small = false, className = '' }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  // The video element is the single source of truth: onPlay/onPause listeners
  // below keep React state (and the aria-pressed attribute) in sync no matter
  // what paused the video (button, keyboard, browser UI, autoplay policy).
  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const onKeyDown = (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      toggle();
    }
  };

  const cls = ['video'];
  if (small) cls.push('video--sm');
  if (className) cls.push(className);

  return (
    <figure className={cls.join(' ')}>
      <div className="video__file-container">
        <button
          name="button"
          type="button"
          className={`video__controls${small ? ' video__controls--small' : ''} cutout cutout--bottom-right`}
          aria-pressed={!playing}
          aria-label={playing ? 'Pause video' : 'Play video'}
          onClick={toggle}
          onKeyDown={onKeyDown}
        >
          <PauseIcon />
          <PlayIcon />
        </button>
        <video
          ref={videoRef}
          aria-label={label}
          className="video__file"
          autoPlay
          playsInline
          loop
          muted
          disablePictureInPicture
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          <source src={src} type="video/mp4" preload="none" />
          Your browser does not support the video tag.
        </video>
        <video
          aria-label={label}
          className="video__file video__file--reduced-motion"
          controls
          playsInline
          loop
          muted
          disablePictureInPicture
        >
          <source src={src} type="video/mp4" preload="none" />
          Your browser does not support the video tag.
        </video>
      </div>
    </figure>
  );
}
