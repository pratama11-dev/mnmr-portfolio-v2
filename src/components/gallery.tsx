"use client"

import Image from "next/image"
import React from "react"
import { cn } from "@/lib/utils"

export function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = React.useState(0)
  const hasImages = Array.isArray(images) && images.length > 0
  const safeImages = hasImages ? images : []

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!safeImages.length) return
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % safeImages.length)
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + safeImages.length) % safeImages.length)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [safeImages.length])

  if (!safeImages.length) {
    return <div className="w-full h-48 rounded-lg border border-border bg-muted" />
  }

  return (
    <div className="w-full">
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg border border-border bg-muted">
        <Image
          src={safeImages[index]}
          alt={alt}
          fill
          className="object-cover"
          priority
          sizes="(min-width: 768px) 768px, 100vw"
        />
      </div>
      {safeImages.length > 1 && (
        <div className="mt-3 grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {safeImages.map((src, i) => (
            <button
              key={src + i}
              onClick={() => setIndex(i)}
              className={cn(
                "relative aspect-video overflow-hidden rounded border",
                index === i ? "border-foreground" : "border-border"
              )}
              aria-label={`Show image ${i + 1}`}
            >
              <Image src={src} alt="" fill className="object-cover" sizes="128px" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
