"use client";

import { useState, useRef, useCallback } from "react";
import { Play, X } from "lucide-react";

interface VideoModalProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function VideoModal({ src, poster, className }: VideoModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openModal = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  return (
    <>
      {/* Play Button Trigger */}
      <button
        onClick={openModal}
        className={`group relative cursor-pointer overflow-hidden rounded-xl ${className ?? ""}`}
        aria-label="Play video"
      >
        {poster ? (
          <img
            src={poster}
            alt="Video thumbnail"
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full aspect-video bg-secondary/10 rounded-xl" />
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary text-white shadow-lg transition-transform group-hover:scale-110">
            <Play className="h-8 w-8 ml-1" fill="white" />
          </div>
        </div>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4"
          onClick={closeModal}
          onKeyDown={(e) => e.key === "Escape" && closeModal()}
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/40"
            aria-label="Close video"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Video */}
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              className="w-full rounded-xl"
              controls
              autoPlay
              playsInline
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
