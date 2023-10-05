import { useAtom } from "jotai";
import { menuNavPhoneAtom } from "../../../atoms/navbarAtom";
import styles from "../styles/navMenuPhone.module.css";
import LayoutPhoneMenu from "./Layout";

const HomePageMenuPhone = ({ title, idioma, handleScroll }) => {
	const [, setMenuPhone] = useAtom(menuNavPhoneAtom);

	const homePageMenu = [
		{
			href: "hero",
			title:
				idioma === "es"
					? "Inicio - Presentación"
					: "Home - Presentation",
			description: "Centro para la competitividad y el desarrollo.",
		},
		{
			href: "nosotros",
			title:
				idioma === "es"
					? "Nosotros - ¿Quiénes somos?"
					: "About us - Who are we?",
			description: "Conócenos más.",
		},
		{
			href: "servicios",
			title:
				idioma === "es"
					? "Servicios - ¿Qué hacemos?"
					: "Services - What we do?",
			description: "Conoce nuestros servicios",
		},
		//-------------------------------------
		{
			href: "desarrollo",
			title:
				idioma === "es"
					? "Desarrollo"
					: "Services - What we do?",
			description: "Conoce nuestros servicios",
		},
		{
			href: "contacto",
			title:
				idioma === "es"
					? "Contacto - trabaje con nosotros"
					: "Contact - work with us",
			description: "Ofrecemos grandes oportunidades laborales",
		},
		{
			href: "map-contact",
			title:
				idioma === "es"
					? "Ubicación - ¿Dónde estamos?"
					: "Location - Where are we?",
			description: "Conoce nuestras ubicaciones.",
		},
	];

	return (
		<LayoutPhoneMenu title={title} backIndex indice={"0"}>
			<LayoutPhoneMenu.Card>
				<nav className={styles.navmenu}>
					<ul>
						{homePageMenu.map((route, index) => (
							<li key={index}>
								<LayoutPhoneMenu.Item
									// onClick={route.onClick}
									titulo={route.title}
									onClick={() => {
										setMenuPhone(false);
										handleScroll(route.href);
									}}
									description={route.description}
								/>
							</li>
						))}
					</ul>
				</nav>
			</LayoutPhoneMenu.Card>
		</LayoutPhoneMenu>
	);
};

export default HomePageMenuPhone;
