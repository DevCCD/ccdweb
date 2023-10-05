import MenuNavLayout from "../../../layouts/MenuNavLayout";
import styles from "../styles/pagesMenu/pageMenu.module.css";
import { useAtom } from "jotai";
import { activeNavAtom } from "../../../atoms/navbarAtom";

const HomePagaMenu = ({ idioma, handleScroll }) => {
	const homePageMenu = [
		{
			href: "hero",
			title:
				idioma === "es"
					? "Inicio - Presentación"
					: "Home - Presentation",
			description:
				idioma === "es"
					? "Centro para la Competitividad y el Desarrollo."
					: "Center for Competitiveness and Development.",
		},
		{
			href: "nosotros",
			title:
				idioma === "es"
					? "Nosotros - ¿Quiénes somos?"
					: "About us - Who are we?",
			description: idioma === "es" ? "Conócenos más." : "Know us more.",
		},
		{
			href: "servicios",
			title:
				idioma === "es"
					? "Servicios - ¿Qué hacemos?"
					: "Services - What we do?",
			description:
				idioma === "es"
					? "Conoce nuestros servicios."
					: "Know our services.",
		},
		{
			href: "contacto",
			title:
				idioma === "es"
					? "Contacto - trabaje con nosotros"
					: "Contact - work with us",
			description:
				idioma === "es"
					? "Ofrecemos grandes oportunidades laborales."
					: "We offer great job opportunities.",
		},
		{
			href: "map-contact",
			title:
				idioma === "es"
					? "Ubicación - ¿Dónde estamos?"
					: "Location - Where are we?",
			description:
				idioma === "es"
					? "Conoce nuestra ubicación."
					: "Know our location.",
		},
	];

	return (
		<MenuNavLayout
			titulo={idioma === "es" ? "Inicio" : "Home"}
			description={idioma === "es" ? "Menú de inicio" : "Home menu"}
		>
			<div className={styles.container}>
				{homePageMenu.map((item, index) => {
					return (
						<LinkScrollCustom
							key={index}
							to={item.href}
							title={item.title}
							description={item.description}
							handleScroll={handleScroll}
						/>
					);
				})}
			</div>
		</MenuNavLayout>
	);
};

const LinkScrollCustom = ({ to, icon, title, description, handleScroll }) => {
	const [, setIsMenuOpen] = useAtom(activeNavAtom);

	return (
		<div className={styles.linkItem} onClick={() => handleScroll(to)}>
			<div className={styles.icon}></div>
			<div className={styles.content}>
				<div className={styles.titleContet}>
					<h3 className={styles.title}>{title}</h3>
				</div>
				<p className={styles.description}>{description}</p>
			</div>
		</div>
	);
};

export default HomePagaMenu;
