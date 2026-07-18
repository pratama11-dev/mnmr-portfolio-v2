"use client";

import { GameProvider } from "@/context/GameContext";
import { Hud } from "@/components/hud";
import { Ticker } from "@/components/ticker";
import { StageRail } from "@/components/stage-rail";
import { Hero } from "@/components/sections/hero";
import { Chaos } from "@/components/sections/chaos";
import { Barriers } from "@/components/sections/barriers";
import { Principles } from "@/components/sections/principles";
import { Builder } from "@/components/sections/builder";
import { Method } from "@/components/sections/method";
import { Comparison } from "@/components/sections/comparison";
import { Vision } from "@/components/sections/vision";
import { Offer } from "@/components/sections/offer";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <GameProvider>
      <StageRail />
      <Hero />
      <Ticker />
      <Chaos />
      <Barriers />
      <Principles />
      <Builder />
      <Method />
      <Comparison />
      <Vision />
      <Offer />
      <Ticker />
      <Contact />
      <Hud />
    </GameProvider>
  );
}
