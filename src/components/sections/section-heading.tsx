interface SectionHeadingProps {
  kicker: string;
  title: string;
  body?: string;
  center?: boolean;
  /** Oversized outlined stage number, rendered as a watermark. Caller section must be `relative`. */
  stage?: string;
}

export function SectionHeading({ kicker, title, body, center, stage }: SectionHeadingProps) {
  return (
    <>
      {stage ? (
        <span
          aria-hidden="true"
          className="text-outline font-display pointer-events-none absolute right-0 top-2 select-none text-[6rem] font-black leading-none opacity-15 sm:text-[10rem]"
        >
          {stage}
        </span>
      ) : null}
      <div className={center ? "mx-auto max-w-2xl text-center" : "relative max-w-2xl"}>
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-signal">
          {kicker}
        </p>
        <h2 className="font-display mt-3 text-3xl font-black tracking-tight sm:text-5xl">
          {title}
        </h2>
        {body ? (
          <p className="mt-4 text-base/7 text-muted-foreground sm:text-lg/8">{body}</p>
        ) : null}
      </div>
    </>
  );
}
