import { useAtom } from "jotai";
import Link from "next/link";
import { activeNavAtom } from "../../../atoms/navbarAtom";
import MenuNavLayout from "../../../layouts/MenuNavLayout";
import styles from "../styles/pagesMenu/pageMenu.module.css";

const NosotrosPageMenu = ({ idioma }) => {
	return (
		<MenuNavLayout
			titulo={idioma === "es" ? "Nosotros" : "About us"}
			description={
				idioma === "es"
					? "Conoce nuestra gente, valores, compromiso y más."
					: "Meet our people, values, commitment and more."
			}
		>
			<div className={styles.container}>
				<LinkCustom
					to={"/nosotros"}
					title={
						idioma === "es"
							? "Nosotros - ¿Quiénes somos?"
							: "About us - Who are we?"
					}
					description={
						idioma === "es"
							? "Conoce nuestra gente, valores, compromiso y más."
							: "Meet our people, values, commitment and more."
					}
				/>
				{/* <LinkCustom
					to={"/nosotros/nuestra-gente-y-liderazgo"}
					title={
						idioma === "es"
							? "Nuestro equipo y liderazgo"
							: "Our people and leadership"
					}
					description={
						idioma === "es"
							? "Conoce Nuestro equipo y liderazgo."
							: "Meet our people and leadership."
					}
				/> */}
				<LinkCustom
					to={"/nosotros/proposito-mision-valores"}
					title={
						idioma === "es"
							? "Propósito, misión y valores"
							: "Purpose, mission and values"
					}
					description={
						idioma === "es"
							? "Conoce nuestra misión, visión, valores, compromiso y más."
							: "Meet our mission, vision, values, commitment and more."
					}
				/>
				<LinkCustom
					to={"/nosotros/experiencia-nacional-e-internacional"}
					title={
						idioma === "es"
							? "Experiencia Nacional e Internacional"
							: "National and International Experience"
					}
					description={
						idioma === "es"
							? "Conoce nuestra experiencia nacional e internacional."
							: "Meet our national and international experience."
					}
				/>
			</div>
		</MenuNavLayout>
	);
};

const LinkCustom = ({ to, icon, title, description }) => {
	const [, setIsMenuOpen] = useAtom(activeNavAtom);

	return (
		<Link
			href={to}
			className={styles.linkItem}
			onClick={() => setIsMenuOpen(false)}
		>
			<div className={styles.icon}>{icon}</div>
			<div className={styles.content}>
				<div className={styles.titleContet}>
					<h3 className={styles.title}>{title}</h3>
				</div>
				<p className={styles.description}>{description}</p>
			</div>
		</Link>
	);
};

export default NosotrosPageMenu;
