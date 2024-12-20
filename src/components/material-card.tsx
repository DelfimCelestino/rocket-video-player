"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MaterialCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function MaterialCard({
  icon: Icon,
  title,
  description,
  className,
}: MaterialCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg p-6 border border-zinc-700 flex items-start gap-6 cursor-pointer group",
        "hover:border-zinc-600 transition-all",
        className
      )}
    >
      <div className="rounded-lg bg-emerald-500/10 p-4 group-hover:bg-emerald-500/20 transition-colors">
        <Icon className="w-6 h-6 text-emerald-500" />
      </div>
      <div className="flex-1 min-w-0">
        <strong className="text-lg font-medium text-zinc-50 mb-2 block">
          {title}
        </strong>
        <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default MaterialCard;
