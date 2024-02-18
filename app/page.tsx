import { HeroParallax } from "@/components/ui/hero-parallax";

export default function Home() {
  const products = [
    {
      title: "XLVI International Congress of Theoretical Chemists of Latin Expression",
      link: "https://quitelcongress-showcase.netlify.app/",
      thumbnail: "/quitel.png",
    },
    {
      title: "Ecommerce Store",
      link: "https://ecommerce-store-ten-sandy.vercel.app/",
      thumbnail: "/store.png",
    },
    {
      title: "Ecommerce Admin",
      link: "https://github.com/joaquinjoaco/ecommerce-admin",
      thumbnail: "/admin.png",
    },
    {
      title: "MiFicha APP",
      link: "https://github.com/joaquinjoaco/ficha-medica",
      thumbnail: "/ficha-medica.png",
    },
    {
      title: "Laundrify CRUD",
      link: "https://laundrifycrudtest.netlify.app/home",
      thumbnail: "/laundrify-crud.png",
    },
    {
      title: "sorvisLater",
      link: "https://sorvislater.netlify.app/login",
      thumbnail: "/sorvisLater.png",
    },
    {
      title: "MiFicha APP",
      link: "https://github.com/joaquinjoaco/ficha-medica",
      thumbnail: "/ficha-medica.png",
    },
    {
      title: "Eventyr Banlist",
      link: "https://eventyrbanlistfirebaserealtime.netlify.app/",
      thumbnail: "/eventyr-banlist.png",
    },
    {
      title: "Eventyr Server Guide",
      link: "https://guiaeventyr.netlify.app/",
      thumbnail: "/eventyr-guia.png",
    },
    {
      title: "Bandicoot Website",
      link: "https://bandicoot.netlify.app/",
      thumbnail: "/bandicoot.png",
    },
    {
      title: "Laundrify landing page",
      link: "https://lavanderialaundrify.netlify.app/",
      thumbnail: "/laundrify-landing.png",
    },
    {
      title: "Laundrify CRUD",
      link: "https://laundrifycrudtest.netlify.app/home",
      thumbnail: "/laundrify-crud.png",
    },
    {
      title: "Bandicoot Website",
      link: "https://bandicoot.netlify.app/",
      thumbnail: "/bandicoot.png",
    },
    {
      title: "La física segun dios",
      link: "https://lafisicasegundios.netlify.app/",
      thumbnail: "/lafisicasegundios.png",
    },
  ]
  return (
    <div>
      <HeroParallax
        products={products}
      />
    </div>
  );
}
