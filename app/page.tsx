import About from "@/components/about-me";
import { Header as MobileHeader } from "@/components/header";
import { HeroParallax } from "@/components/hero-parallax";
import { ParallaxScroll } from "@/components/parallax-scroll";
import ProjectList from "@/components/project-list";
import { desktopProjects, mobileProjects } from "@/lib/projectRoutes";

export default function Home() {

  return (
    <div>
      <MobileHeader className="lg:hidden" />
      <HeroParallax
        projects={desktopProjects}
        className="hidden lg:block"
      />
      <ParallaxScroll
        projects={mobileProjects}
        className="lg:hidden"
      />
      <About className="scroll-m-32 sm:scroll-m-80 mt-0 md:mt-8" />
      <ProjectList />
    </div>
  );
}
