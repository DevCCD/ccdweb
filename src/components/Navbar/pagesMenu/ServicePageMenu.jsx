import Link from "next/link";
import MenuNavLayout from "../../../layouts/MenuNavLayout";
import styles from "../styles/pagesMenu/pageMenu.module.css";
import { activeNavAtom } from "../../../atoms/navbarAtom";
import { useAtom } from "jotai";

const ServicePageMenu = ({ idioma }) => {
	return (
		<MenuNavLayout
			titulo={idioma === "es" ? "Servicios" : "Services"}
			description={
				idioma === "es"
					? "Conoce nuestros servicios."
					: "Meet our services."
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
					to={"/servicios/desarrollo-y-competitividad"}
					title={
						idioma === "es"
							? "Desarrollo y Competitividad"
							: "Development and Competitiveness"
					}
					description={
						idioma === "es"
							? "Servicio de alcance comunal, distrital, provincial, regional y más."
							: "Service with a community, district, provincial, regional and more reach."
					}
				/>
				<LinkCustom
					to={"/servicios/politica-y-gestion-publica"}
					title={
						idioma === "es"
							? "Política y Gestión Pública"
							: "Public Policy and Management"
					}
					description={
						idioma === "es"
							? "Políticas públicas, estrategias y acciones sustentables en educación"
							: "Public policies, strategies and sustainable actions in education"
					}
				/>
				<LinkCustom
					to={"/servicios/estudios-economicos"}
					title={
						idioma === "es"
							? "Estudios Económicos"
							: "Economic Studies"
					}
					description={
						idioma === "es"
							? "Conoce el servicio que promueve el desarrollo sostenible del país."
							: "Meet the service that promotes sustainable development of the country."
					}
				/>
				<LinkCustom
					to={"/servicios/inversiones"}
					title={idioma === "es" ? "Inversiones" : "Investments"}
					description={
						idioma === "es"
							? "Público y privados, trabajos por impuestos, Apps. Ips e Invierte.pe."
							: "Public and private, tax works, Apps. Ips and Invierte.pe."
					}
				/>
				<LinkCustom
					to={"/servicios/legal"}
					title={idioma === "es" ? "Servicio Legal" : "Legal Service"}
					description={
						idioma === "es"
							? "Administración política y pública, regulación, inversión y fondos sociales."
							: "Political and public administration, regulation, investment and social funds."
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

export default ServicePageMenu;
