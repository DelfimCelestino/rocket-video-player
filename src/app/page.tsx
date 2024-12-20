import { Suspense } from "react";
import { LESSONS } from "@/config/lessons";
import { Platform } from "@/components/platform";

export default function PlatformPage() {
  return (
    <Suspense fallback={<div className="h-screen bg-zinc-950" />}>
      <Platform lessons={LESSONS} />
    </Suspense>
  );
}
