import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.jpeg";

export function Wordmark({ tone = "light" }: { tone?: "light" | "dark" }) {
  const main = tone === "light" ? "text-cream" : "text-espresso";
  return (
    <Link to="/" className="flex items-center gap-3 leading-none" aria-label="Nature Lovers Adventure — Home">
      <img
        src={logo}
        alt="Nature Lovers Adventure logo"
        className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover ring-1 ring-gold/40"
      />
      <span className="hidden sm:flex flex-col leading-none">
        <span className={`font-display font-bold tracking-tight text-[15px] md:text-[17px] ${main}`}>
          Nature Lovers
        </span>
        <span className="font-sans-ui text-gold uppercase tracking-[0.35em] text-[9px] md:text-[10px] mt-1">
          Adventure
        </span>
      </span>
    </Link>
  );
}
