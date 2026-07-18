/** Brand slogan from the deck's closing slide — locale-independent brand asset. */
const SLOGAN = "LET'S MAKE ANYTHING AND EVERYTHING EASIER, TOGETHER";

const ITEMS = [SLOGAN, "MAKIR", SLOGAN, "MAKIR"];

export function Ticker() {
  return (
    <div className="overflow-hidden border-y border-border bg-background/60 py-3" aria-hidden="true">
      <div className="marquee-track flex w-max items-center gap-10 pr-10">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-10">
            {ITEMS.map((item, index) => (
              <span key={index} className="flex items-center gap-10 whitespace-nowrap">
                <span
                  className={`font-display text-xl font-black tracking-tight sm:text-2xl ${
                    item === "MAKIR" ? "text-outline tracking-[0.2em]" : ""
                  }`}
                >
                  {item}
                </span>
                <span className="size-2 rotate-45 bg-signal" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
