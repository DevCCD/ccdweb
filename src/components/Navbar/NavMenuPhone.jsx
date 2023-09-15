import { useEffect } from "react";
import HomePageMenuPhone from "./pagesMenuPhone/HomePageMenuPhone";
import PageMenuPhone from "./pagesMenuPhone/PageMenuPhone";
import { useAtom } from "jotai";
import { menuIndexPhoneAtom, menuNavPhoneAtom } from "../../atoms/navbarAtom";
import NosotrosPageMenuPhone from "./pagesMenuPhone/NosotrosPageMenuPhone";
import ServicePageMenuPhone from "./pagesMenuPhone/ServicePageMenuPhone";

const NavMenuPhone = ({ idioma, handleScroll }) => {
	const [indexSlide, setIndexSlide] = useAtom(menuIndexPhoneAtom);
	const [menuPhone, setMenuPhone] = useAtom(menuNavPhoneAtom);

	useEffect(() => {
		if (!menuPhone) {
			setIndexSlide(0);
		}
	}, [menuPhone, setIndexSlide]);

	const routeSlide = [
		{
			component: (
				<PageMenuPhone
					title={idioma === "es" ? "Menú" : "Menu"}
					idioma={idioma}
					setIndexSlide={setIndexSlide}
					handleScroll={handleScroll}
				/>
			),
		},
		{
			component: (
				<HomePageMenuPhone
					title={idioma === "es" ? "Inicio" : "Home"}
					idioma={idioma}
					setIndexSlide={setIndexSlide}
					handleScroll={handleScroll}
				/>
			),
		},
		{
			component: (
				<NosotrosPageMenuPhone
					title={idioma === "es" ? "Nosotros" : "About"}
					idioma={idioma}
					setIndexSlide={setIndexSlide}
				/>
			),
		},
		{
			component: (
				<ServicePageMenuPhone
					title={idioma === "es" ? "Servicios" : "Services"}
					idioma={idioma}
					setIndexSlide={setIndexSlide}
				/>
			),
		},
	];

	return <>{routeSlide[indexSlide].component}</>;
};

export default NavMenuPhone;
