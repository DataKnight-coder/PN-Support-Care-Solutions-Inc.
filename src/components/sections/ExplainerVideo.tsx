'use client';

import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import styles from './ExplainerVideo.module.css';

export const ExplainerVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Replaced placeholder with the actual HeyGen explainer video
  const placeholderVideo = "/videos/pn-support-care-explainer.mp4";

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(error => {
          console.error("Video play failed:", error);
        });
      } else {
        videoRef.current.pause();
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <ScrollReveal>
          <div className={styles.header}>
            <span className={styles.eyebrow}>A MESSAGE FROM OUR TEAM</span>
            <h2 className={styles.title}>Experience the PN Support Difference</h2>
            <p style={{ color: 'var(--color-charcoal)', fontSize: '1.125rem' }}>
              Watch how our dedicated professionals are redefining the standard of home care across the GTA.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className={styles.videoWrapper} onClick={togglePlay}>
            <video 
              ref={videoRef}
              src={placeholderVideo}
              className={styles.videoElement}
              loop
              playsInline
              onClick={togglePlay}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
            
            <div className={`${styles.playOverlay} ${isPlaying ? styles.playing : ''}`}>
              <button className={styles.playButton} onClick={togglePlay} aria-label="Play Video">
                <Play size={36} style={{ marginLeft: '4px' }} fill="currentColor" />
              </button>
            </div>

            <div className={styles.controls} onClick={(e) => e.stopPropagation()}>
              <button className={styles.controlButton} onClick={toggleMute} aria-label={isMuted ? "Unmute" : "Mute"}>
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
