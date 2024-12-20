"use client";

import { Button } from "@/components/ui/button";
import { FileText, ImageIcon } from "lucide-react";
import { MaterialCard } from "./material-card";
import { usePlayer } from "@/contexts/player-context";

export function LessonContent() {
  const { currentLesson } = usePlayer();

  if (!currentLesson) {
    return (
      <div className="flex-1 max-w-[1100px] mx-auto p-4 lg:p-8">
        <div className="flex flex-col items-center justify-center text-zinc-400">
          <p>Selecione uma aula para começar</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 max-w-[1100px] mx-auto p-4 lg:p-8">
      <div className="max-w-4xl">
        <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-zinc-50">
          {currentLesson.title}
        </h1>
        <p className="text-zinc-400 text-base leading-relaxed mb-6 lg:mb-8">
          {currentLesson.description}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mb-8 lg:mb-10">
        <Button className="w-full lg:w-auto bg-emerald-500 hover:bg-emerald-600 transition-colors">
          COMUNIDADE NO DISCORD
        </Button>
        <Button
          variant="outline"
          className="w-full lg:w-auto border-emerald-500 text-emerald-500  bg-transparent"
        >
          ACESSE O DESAFIO
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 w-full">
        <MaterialCard
          icon={FileText}
          title="Material complementar"
          description="Acesse o material complementar para acelerar o seu desenvolvimento"
          className="h-full bg-zinc-800/60 hover:bg-zinc-800 transition-colors"
        />
        <MaterialCard
          icon={ImageIcon}
          title="Wallpapers exclusivos"
          description="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
          className="h-full bg-zinc-800/60 hover:bg-zinc-800 transition-colors"
        />
      </div>
    </div>
  );
}
