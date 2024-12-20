"use client";

import { Card } from "@/components/ui/card";
import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePlayer } from "@/contexts/player-context";
import { type Lesson } from "@/config/lessons";

export function LessonCard(props: Lesson) {
  const { play } = usePlayer();

  return (
    <Card
      onClick={() => props.isReleased && play(props)}
      className={cn(
        "group relative border border-zinc-800 bg-zinc-800/50 hover:bg-zinc-800 transition-all cursor-pointer",
        "before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px]",
        props.isReleased && "before:bg-emerald-500",
        !props.isReleased && "before:bg-orange-500 opacity-75 hover:opacity-100"
      )}
    >
      <div className="p-5">
        <time className="text-xs uppercase text-zinc-400 flex items-center gap-2">
          <div
            className={cn(
              "w-1.5 h-1.5 rounded-full",
              props.isReleased ? "bg-emerald-500" : "bg-orange-500"
            )}
          />
          {props.date}
        </time>

        <h3 className="font-bold text-[0.9375rem] text-zinc-50 mt-3 mb-4 leading-relaxed">
          {props.title}
        </h3>

        <div className="flex items-center justify-between">
          {props.isReleased ? (
            <span className="text-sm flex items-center gap-2 text-emerald-500">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm flex items-center gap-2 text-orange-500">
              <Lock className="w-4 h-4" />
              Em breve
            </span>
          )}

          <span
            className={cn(
              "text-[0.625rem] py-1 px-3 rounded-full border uppercase font-bold",
              props.type === "AO VIVO"
                ? "border-emerald-500 text-emerald-500"
                : "border-zinc-600 text-zinc-400"
            )}
          >
            {props.type}
          </span>
        </div>
      </div>
    </Card>
  );
}
