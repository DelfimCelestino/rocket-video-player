"use client";

import { usePlayer } from "@/contexts/player-context";

export function VideoPlayer() {
  const { currentLesson } = usePlayer();

  return (
    <div className="w-full max-h-[40vh] lg:max-h-[60vh] aspect-video bg-zinc-900 relative">
      {currentLesson ? (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${currentLesson.videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-zinc-400">
          <p>Selecione uma aula para começar</p>
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
