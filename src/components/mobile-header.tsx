"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { SheetContent, SheetTrigger } from "@/components/ui/sheet";
import * as Dialog from "@radix-ui/react-dialog";
import { LessonCard } from "./lesson-card";
import { LESSONS } from "@/config/lessons";

export function MobileHeader() {
  return (
    <div className="lg:hidden flex items-center justify-between p-4 border-b border-zinc-800">
      <h1 className="text-xl font-bold">Ignite Lab</h1>
      <Dialog.Root>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="border-zinc-700 bg-transparent"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-full sm:w-[440px] p-6 bg-zinc-900 border-zinc-800 overflow-y-auto"
        >
          <Dialog.Title className="text-2xl font-bold mb-6 text-zinc-50">
            Cronograma das aulas
          </Dialog.Title>
          <div className="flex flex-col gap-4">
            {LESSONS.map((lesson, index) => (
              <LessonCard key={index} {...lesson} />
            ))}
          </div>
        </SheetContent>
      </Dialog.Root>
    </div>
  );
}
