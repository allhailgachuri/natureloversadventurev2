import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Ayla } from "./Ayla";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-cream-light">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Ayla />
    </div>
  );
}
