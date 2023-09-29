import Link from "next/link";
import MenuNavLayout from "../../../layouts/MenuNavLayout";
import styles from "../styles/pagesMenu/pageMenu.module.css";
import { activeNavAtom } from "../../../atoms/navbarAtom";
import { useAtom } from "jotai";

const TresdPageMenu = ({ idioma }) => {
	return (
		<MenuNavLayout
			titulo={idioma === "es" ? "3D" : "3D"}
			description={
				idioma === "es"
					? "Día Del Desarrollo"
					: "Development Day"
			}
		>
			<div className={styles.container}>
				{/* <LinkCustom
					to={"/servicios"}
					title={
						idioma === "es" ? "Nuestros Servicios" : "Our Services"
					}
					description={
						idioma === "es"
							? "Conoce los servicios que ofrecemos a nuestros clientes."
							: "Meet the services we offer to our customers."
					}
				/> */}
				<LinkCustom
					to={"/tresd/diplomado"}
					title={
						idioma === "es"
							? "Día Del Desarrollo"
							: "Development Day"
					}
					description={
						idioma === "es"
							? "Diplomado o especialización simulada sobre Desarrollo."
							: "Diploma or simulated specialization in Development."
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

export default TresdPageMenu;