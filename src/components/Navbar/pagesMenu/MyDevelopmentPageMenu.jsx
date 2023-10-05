import Link from "next/link";
import MenuNavLayout from "../../../layouts/MenuNavLayout";
import styles from "../styles/pagesMenu/pageMenu.module.css";
import { activeNavAtom } from "../../../atoms/navbarAtom";
import { useAtom } from "jotai";

const MyDevelopmentPageMenu = ({ idioma }) => {
	return (
		<MenuNavLayout
			titulo={idioma === "es" ? "Mi Desarrollo" : "My Development"}
			description={
				idioma === "es"
					? "Conoce nuestro Desarrollo"
					: "Meet our development."
			}
		>
			<div className={styles.container}>
				<LinkCustom
					to={"/desarrollo/graficos"} // agregar url
					title={
						idioma === "es"
							? "Gráficos"
							: "Graphics"
					}
					description={
						idioma === "es"
							? "Descripción."
							: "Description."
					}
				/>
				<LinkCustom
					to={"/desarrollo/regiones"} // agregar url
					title={
						idioma === "es"
							? "Regiones graficos"
							: "Graphics regions"
					}
					description={
						idioma === "es"
							? "Descripción."
							: "Description."
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

export default MyDevelopmentPageMenu;
