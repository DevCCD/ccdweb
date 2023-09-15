import ContactPageMenu from "../components/Navbar/pagesMenu/ContactPageMenu";
import HomePagaMenu from "../components/Navbar/pagesMenu/HomePagaMenu";
import NosotrosPageMenu from "../components/Navbar/pagesMenu/NosotrosPageMenu";

export const routesPage = [
    {
        name: idioma === "es" ? "Inicio" : "Home",
        url: "/",
        onMouseEnter: () => handleSlide("/", <HomePagaMenu />),
        onmouseleave: () => handleLeave(),
    },
    {
        name: idioma === "es" ? "Nosotros" : "About",
        url: "/nosotros",
        onMouseEnter: () => handleSlide("/nosotros", <NosotrosPageMenu />),
        onmouseleave: () => handleLeave(),
    },
    {
        name: idioma === "es" ? "Servicios" : "Services",
        url: "/servicios",
        onMouseEnter: () => handleSlide("/servicios", <NosotrosPageMenu />),
        onmouseleave: () => handleLeave(),
    },
    {
        name: idioma === "es" ? "Contacto" : "Contact",
        url: "/contact",
        onMouseEnter: () => handleSlide("/contact", <ContactPageMenu />),
        onmouseleave: () => handleLeave(),
    },
]
