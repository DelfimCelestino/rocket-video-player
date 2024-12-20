"use client";

import { LESSONS, Lesson } from "@/config/lessons";
import { createContext, useContext, useState } from "react";

interface PlayerContextType {
  currentLesson: Lesson | null;
  play: (lesson: Lesson) => void;
}

const PlayerContext = createContext({} as PlayerContextType);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(LESSONS[0]);

  function play(lesson: Lesson) {
    setCurrentLesson(lesson);
  }

  return (
    <PlayerContext.Provider value={{ currentLesson, play }}>
      {children}
    </PlayerContext.Provider>
  );
}

export const usePlayer = () => useContext(PlayerContext);
