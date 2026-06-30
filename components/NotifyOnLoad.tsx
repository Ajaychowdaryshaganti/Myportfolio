"use client";

import { useVisitorNotify } from "@/hooks/useVisitorNotify";

export default function NotifyOnLoad() {
  useVisitorNotify();
  return null;
}
