import { useAtom } from "jotai";
import { menuNavPhoneAtom } from "../../../atoms/navbarAtom";
import styles from "../styles/navMenuPhone.module.css";
import LayoutPhoneMenu from "./Layout";

const NosotrosPageMenuPhone = ({ title, idioma }) => {
	const [, setMenuPhone] = useAtom(menuNavPhoneAtom);

	const nosotrosPageMenu = [
		{
			href: "/nosotros",
			title:
				idioma === "es"
					? "Nosotros - ¿Quienes somos?"
					: "About us - Who are we?",
			description:
				idioma === "es"
					? "Conoce nuestra gente, valores, compromiso y más."
					: "Meet our people, values, commitment and more.",
		},
		// {
		// 	href: "/nosotros/nuestra-gente-y-liderazgo",
		// 	title:
		// 		idioma === "es"
		// 			? "Nuestro equipo y liderazgo"
		// 			: "Our people and leadership",
		// 	description:
		// 		idioma === "es"
		// 			? "Conoce Nuestro equipo y liderazgo."
		// 			: "Meet our people and leadership.",
		// },
		{
			href: "/nosotros/proposito-mision-valores",
			title:
				idioma === "es"
					? "Propósito, misión y valores"
					: "Purpose, mission and values",
			description:
				idioma === "es"
					? "Conoce nuestra misión, visión, valores, compromiso y más."
					: "Meet our mission, vision, values, commitment and more.",
		},
		{
			href: "/nosotros/experiencia-nacional-e-internacional",
			title:
				idioma === "es"
					? "Experiencia Nacional e Internacional"
					: "National and International Experience",
			description:
				idioma === "es"
					? "Conoce nuestra experiencia nacional e internacional."
					: "Meet our national and international experience.",
		},
	];

	return (
		<LayoutPhoneMenu title={title} backIndex indice={"0"}>
			<LayoutPhoneMenu.Card>
				<nav className={styles.navmenu}>
					<ul>
						{nosotrosPageMenu.map((route, index) => (
							<li key={index}>
								<LayoutPhoneMenu.Item
									// onClick={route.onClick}
									type='link'
									href={route.href}
									titulo={route.title}
									onClick={() => {
										setMenuPhone(false);
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

export default NosotrosPageMenuPhone;
