"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTransition } from "@/context/TransitionContext";

export function Preloader() {
  const { toggleCompleted } = useTransition();
  const container = useRef<HTMLDivElement | null>(null);
  const [hidden, setHidden] = useState(false);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => {
          toggleCompleted(true);
          setHidden(true);
        },
      });

      tl.set(container.current, { autoAlpha: 1 })
        .from(".preloader-mark", {
          opacity: 0,
          y: 12,
          duration: 0.5,
          ease: "power2.out",
        })
        .to(
          ".preloader-bar-fill",
          {
            scaleX: 1,
            duration: 0.9,
            ease: "power1.inOut",
            transformOrigin: "left center",
          },
          "-=0.1"
        )
        .to(
          ".preloader-mark, .preloader-bar",
          { opacity: 0, duration: 0.35, ease: "power1.in" },
          "+=0.1"
        )
        .to(
          container.current,
          { autoAlpha: 0, duration: 0.5, ease: "power2.inOut" },
          "-=0.1"
        );
    },
    { scope: container }
  );

  if (hidden) return null;

  return (
    <div
      ref={container}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-background invisible"
    >
      <div className="preloader-mark text-center">
        <p className="text-3xl font-black tracking-[0.3em]">MAKIR</p>
        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">
          by M.I.N.O
        </p>
      </div>
      <div className="preloader-bar h-px w-40 overflow-hidden bg-border">
        <div className="preloader-bar-fill h-full w-full origin-left scale-x-0 bg-signal" />
      </div>
    </div>
  );
}
