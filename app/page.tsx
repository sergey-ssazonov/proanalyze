"use client";

import { LandingPage } from "@/src/screen/landing";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/about");
  }, [router]);
  return <LandingPage />;
}
