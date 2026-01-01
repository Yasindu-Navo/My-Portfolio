import { HeroSection } from "../components/HeroSection";
import { NavBar } from "../components/NavBar";
import { StarBackground } from "../components/StarBackground";
import { ToggleTheme } from "../components/ToggleTheme";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
     
      {/* toggle theme */}
      <ToggleTheme />

      {/* background effects */}

      <StarBackground />

          {/* navigation bar */}
          <NavBar />

          {/* main content */}
          <main>
              <HeroSection />
          </main>
    </div>
  );
};
