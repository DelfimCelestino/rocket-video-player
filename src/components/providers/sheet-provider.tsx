"use client";

import { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";

interface SheetProviderProps {
  children: ReactNode;
}

export function SheetRootProvider({ children }: SheetProviderProps) {
  return <Dialog.Root>{children}</Dialog.Root>;
}
