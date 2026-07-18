import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

/** Media query GSAP animations should respect. */
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";
