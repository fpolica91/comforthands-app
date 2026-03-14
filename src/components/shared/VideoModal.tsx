"use client";

import { useState, useRef, useCallback } from "react";
import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

interface VideoModalProps {
  src: string;
  poster?: string;
  title?: string;
  autoOpen?: boolean;
  className?: string;
}

export default function VideoModal({
  src,
  poster,
  title = "Video",
  autoOpen = false,
  className,
}: VideoModalProps) {
  const [open, setOpen] = useState(autoOpen);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleOpenChange = useCallback(
    (nextOpen: boolean) => {
      setOpen(nextOpen);
      if (!nextOpen && videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    },
    []
  );

  return (
    <>
      {/* Play Button Trigger */}
      <button
        onClick={() => handleOpenChange(true)}
        className={`group relative cursor-pointer overflow-hidden rounded-xl ${className ?? ""}`}
        aria-label={`Play ${title}`}
      >
        {poster ? (
          <img
            src={poster}
            alt={title}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full aspect-video rounded-xl bg-secondary/10" />
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary text-white shadow-lg transition-transform group-hover:scale-110">
            <Play className="h-8 w-8 ml-1" fill="white" />
          </div>
        </div>
      </button>

      {/* Dialog Modal */}
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent
          showCloseButton
          className="sm:max-w-lg bg-black p-0 border-none ring-0 max-h-[85vh] overflow-hidden"
        >
          <DialogTitle className="sr-only">{title}</DialogTitle>
          <video
            ref={videoRef}
            className="w-full max-h-[80vh] rounded-xl object-contain"
            controls
            autoPlay
            playsInline
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </DialogContent>
      </Dialog>
    </>
  );
}
