"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { type Lesson } from "@/config/lessons";
import { PlayerProvider } from "@/contexts/player-context";

const VideoPlayer = dynamic(
  () => import("./video-player").then((mod) => mod.VideoPlayer),
  { loading: () => <div className="w-full aspect-video bg-zinc-900" /> }
);

const LessonContent = dynamic(
  () => import("./lesson-content").then((mod) => mod.LessonContent),
  { loading: () => <div className="animate-pulse bg-zinc-800/50 h-96" /> }
);

const MobileHeader = dynamic(
  () => import("./mobile-header").then((mod) => mod.MobileHeader),
  { ssr: false }
);

const LessonCard = dynamic(
  () => import("./lesson-card").then((mod) => mod.LessonCard),
  {
    loading: () => (
      <div className="h-24 bg-zinc-800/50 rounded-lg animate-pulse" />
    ),
  }
);

interface PlatformProps {
  lessons: Lesson[];
}

export function Platform({ lessons }: PlatformProps) {
  return (
    <PlayerProvider>
      <div className="flex flex-col lg:flex-row h-screen bg-zinc-950 text-zinc-100">
        <Suspense fallback={null}>
          <MobileHeader />
        </Suspense>

        <main className="flex-1 flex flex-col min-h-0">
          <div className="flex-1 overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]">
            <Suspense
              fallback={<div className="w-full aspect-video bg-zinc-900" />}
            >
              <VideoPlayer />
            </Suspense>
            <Suspense
              fallback={<div className="animate-pulse bg-zinc-800/50 h-96" />}
            >
              <LessonContent />
            </Suspense>
          </div>
        </main>

        <aside className="hidden lg:block w-[480px] xl:w-[520px] border-l border-zinc-800 bg-zinc-900 p-6 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]">
          <h2 className="text-2xl font-bold mb-6 text-zinc-50">
            Cronograma das aulas
          </h2>
          <div className="flex flex-col gap-4">
            {lessons.map((lesson, index) => (
              <Suspense
                key={index}
                fallback={
                  <div className="h-24 bg-zinc-800/50 rounded-lg animate-pulse" />
                }
              >
                <LessonCard
                  date={lesson.date}
                  title={lesson.title}
                  isReleased={lesson.isReleased}
                  type={lesson.type}
                  videoId={lesson.videoId}
                  description={lesson.description}
                />
              </Suspense>
            ))}
          </div>
        </aside>
      </div>
    </PlayerProvider>
  );
}
