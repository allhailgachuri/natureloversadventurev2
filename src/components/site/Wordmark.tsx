import { Link } from "@tanstack/react-router";

export function Wordmark({ tone = "light" }: { tone?: "light" | "dark" }) {
  const main = tone === "light" ? "text-cream" : "text-espresso";
  return (
    <Link to="/" className="flex flex-col leading-none">
      <span className={`font-display font-bold tracking-tight text-[18px] md:text-[20px] ${main}`}>
        NATURE LOVERS
      </span>
      <span className="font-sans-ui text-gold uppercase tracking-[0.35em] text-[9px] md:text-[10px] mt-1">
        Adventure
      </span>
    </Link>
  );
}
