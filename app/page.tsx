import About from "@/components/about-me";
import { Header as MobileHeader } from "@/components/header";
import { HeroParallax } from "@/components/hero-parallax";
import { ParallaxScroll } from "@/components/parallax-scroll";

export default function Home() {
  const projects = [
    {
      title: "XLVI International Congress of Theoretical Chemists of Latin Expression",
      href: "https://quitelcongress-showcase.netlify.app/",
      thumbnail: "/quitel.png",
    },
    {
      title: "Ecommerce Store",
      href: "https://github.com/joaquinjoaco/ecommerce-store/",
      thumbnail: "/ecommerce-store.png",
    },
    {
      title: "Ecommerce Admin",
      href: "https://github.com/joaquinjoaco/ecommerce-admin",
      thumbnail: "/ecommerce-admin.png",
    },
    {
      title: "MiFicha APP",
      href: "https://github.com/joaquinjoaco/ficha-medica",
      thumbnail: "/ficha-medica.png",
    },
    {
      title: "Laundrify CRUD",
      href: "https://laundrifycrudtest.netlify.app/home",
      thumbnail: "/laundrify-crud.png",
    },
    {
      title: "sorvisLater",
      href: "https://sorvislater.netlify.app/login",
      thumbnail: "/sorvisLater.png",
    },
    {
      title: "MiFicha APP",
      href: "https://github.com/joaquinjoaco/ficha-medica",
      thumbnail: "/ficha-medica.png",
    },
    {
      title: "Eventyr Banlist",
      href: "https://github.com/joaquinjoaco/eventyrbanlist",
      thumbnail: "/eventyrbanlist.png",
    },
    {
      title: "Eventyr Server Guide",
      href: "https://guiaeventyr.netlify.app/",
      thumbnail: "/eventyr-guia.png",
    },
    {
      title: "Bandicoot Website",
      href: "https://bandicoot.netlify.app/",
      thumbnail: "/bandicoot.png",
    },
    {
      title: "Laundrify landing page",
      href: "https://lavanderialaundrify.netlify.app/",
      thumbnail: "/laundrify-landing.png",
    },
    {
      title: "Laundrify CRUD",
      href: "https://github.com/joaquinjoaco/laundrify-crud",
      thumbnail: "/laundrify-crud.png",
    },
    {
      title: "Bandicoot Website",
      href: "https://bandicoot.netlify.app/",
      thumbnail: "/bandicoot.png",
    },
    {
      title: "La física segun dios",
      href: "https://lafisicasegundios.netlify.app/",
      thumbnail: "/lafisicasegundios.png",
    },
  ];

  const mobileProjects = [
    {
      title: "XLVI International Congress of Theoretical Chemists of Latin Expression",
      href: "https://quitelcongress-showcase.netlify.app/",
      thumbnail: "/quitel.png",
    },
    {
      title: "Ecommerce Store",
      href: "https://github.com/joaquinjoaco/ecommerce-store/",
      thumbnail: "/ecommerce-store.png",
    },
    {
      title: "Ecommerce Admin",
      href: "https://github.com/joaquinjoaco/ecommerce-admin",
      thumbnail: "/ecommerce-admin.png",
    },
    {
      title: "MiFicha APP",
      href: "https://github.com/joaquinjoaco/ficha-medica",
      thumbnail: "/ficha-medica.png",
    },
    {
      title: "Laundrify CRUD",
      href: "https://laundrifycrudtest.netlify.app/home",
      thumbnail: "/laundrify-crud.png",
    },
    {
      title: "sorvisLater",
      href: "https://sorvislater.netlify.app/login",
      thumbnail: "/sorvisLater.png",
    },

    {
      title: "Eventyr Banlist",
      href: "https://github.com/joaquinjoaco/eventyrbanlist",
      thumbnail: "/eventyrfirebase.png",
    },
    {
      title: "Eventyr Server Guide",
      href: "https://guiaeventyr.netlify.app/",
      thumbnail: "/eventyr-guia.png",
    },
    {
      title: "Bandicoot Website",
      href: "https://bandicoot.netlify.app/",
      thumbnail: "/bandicoot.png",
    },
    {
      title: "Laundrify landing page",
      href: "https://lavanderialaundrify.netlify.app/",
      thumbnail: "/laundrify-landing.png",
    },
    {
      title: "La física segun dios",
      href: "https://lafisicasegundios.netlify.app/",
      thumbnail: "/lafisicasegundios.png",
    },
  ];
  return (
    <div>
      <MobileHeader className="lg:hidden" />
      <HeroParallax
        projects={projects}
        className="hidden lg:block"
      />
      <ParallaxScroll
        projects={mobileProjects}
        className="lg:hidden"
      />
      <About className="pb-[25vh] h-[100vh]" />
    </div>
  );
}
