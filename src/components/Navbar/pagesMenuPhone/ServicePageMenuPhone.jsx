import { useAtom } from "jotai";
import { menuNavPhoneAtom } from "../../../atoms/navbarAtom";
import styles from "../styles/navMenuPhone.module.css";
import LayoutPhoneMenu from "./Layout";

const ServicePageMenuPhone = ({ title, idioma }) => {
	const [, setMenuPhone] = useAtom(menuNavPhoneAtom);

	const data = [
		{
			href: "/servicios/desarrollo-y-competitividad",
			title:
				idioma === "es"
					? "Desarrollo y Competitividad"
					: "Development and Competitiveness",
			description:
				idioma === "es"
					? "Servicio de alcance comunal, distrital, provincial, regional y más."
					: "Service with a community, district, provincial, regional and more reach.",
		},
		{
			href: "/servicios/politica-y-gestion-publica",
			title:
				idioma === "es"
					? "Política y Gestión Pública"
					: "Public Policy and Management",
			description:
				idioma === "es"
					? "Políticas públicas, estrategias y acciones sustentables en educación"
					: "Public policies, strategies and sustainable actions in education",
		},
		{
			href: "/servicios/estudios-economicos",
			title: idioma === "es" ? "Estudios Económicos" : "Economic Studies",
			description:
				idioma === "es"
					? "Conoce el servicio que promueve el desarrollo sostenible del país."
					: "Meet the service that promotes sustainable development of the country.",
		},
		{
			href: "/servicios/inversiones",
			title: idioma === "es" ? "Inversiones" : "Investments",
			description:
				idioma === "es"
					? "Público y privados, trabajos por impuestos, Apps. Ips e Inverite.pe."
					: "Public and private, tax works, Apps. Ips and Inverite.pe.",
		},
		{
			href: "/servicios/legal",
			title: idioma === "es" ? "Servicio Legal" : "Legal Service",
			description:
				idioma === "es"
					? "Administración política y pública, regulación, inversión y fondos sociales."
					: "Political and public administration, regulation, investment and social funds.",
		},
	];

	return (
		<LayoutPhoneMenu title={title} backIndex indice={"0"}>
			<LayoutPhoneMenu.Card>
				<nav className={styles.navmenu}>
					<ul>
						{data.map((route, index) => (
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

export default ServicePageMenuPhone;
