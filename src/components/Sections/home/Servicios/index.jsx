import Image from "next/image";
import Link from "next/link";
import ArrowRightIcon from "../../../Icons/ArrowRightIcon";
import CheckIcon from "../../../Icons/CheckIcon";
import Section from "../../../Section";
import TitleSection from "../../../TitleSection";
import styles from "./styles/servicios.module.css";
import { motion } from "framer-motion";

const ServiciosSection = ({ idioma }) => {
	const cloudinary_url =
		"https://res.cloudinary.com/dro4ur0kq/image/upload/f_auto,q_auto/v1672329012/ccd-web/servicios/";

	const Servicio = ({ title, children, image, url, reverse }) => {
		return (
			<div
				className={
					reverse
						? `${styles.servicio} ${styles.reverse}`
						: `${styles.servicio}`
				}
			>
				<motion.div
					className={styles.servicioImage}
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.65, delay: 0.5 }}
					viewport={{
						once: true,
						margin: "-10px",
					}}
				>
					<Image
						fill
						src={image}
						alt={
							title
								? `imagen de ${title.toLowerCase()}`
								: "imagen"
						}
						title={
							title
								? `imagen de ${title.toLowerCase()}`
								: "imagen"
						}
						sizes='(max-width: 768px) 100vw, 50vw'
					/>
				</motion.div>
				<motion.div
					className={styles.servicioInfo}
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.15 }}
					viewport={{
						once: true,
						margin: "-50px",
					}}
				>
					{/* <h4 className={styles.servicioSubtitle}>
						{idioma === "es" ? "Servicio" : "Service"}
					</h4> */}
					<h3 className={styles.servicioTitle}>{title}</h3>
					<div className={styles.servicioDescription}>{children}</div>
					<Link href={url} className={styles.link}>
						{idioma === "es"
							? "Más información sobre este servicio"
							: "More information about this service"}
						<ArrowRightIcon />
					</Link>
				</motion.div>
			</div>
		);
	};

	const Description = ({ children }) => {
		return (
			<div className={styles.description}>
				<div className={styles.icon}>
					<CheckIcon />
				</div>
				<p className={styles.text}>{children}</p>
			</div>
		);
	};

	return (
		<Section id='servicios'>
			<div className='wrapper container'>
				<TitleSection subtitle={idioma === "es" ? "Conoce" : "know"}>
					{idioma === "es" ? "Nuestro Trabajo" : "Our Work"}
				</TitleSection>
				<div className={styles.serviciosWrapper}>
					<Servicio
						title={
							idioma === "es"
								? "Competitividad y Desarrollo"
								: "Development and Competitiveness"
						}
						image={`${cloudinary_url}service1_hxls8s`}
						url='/servicios/desarrollo-y-competitividad'
					>
						<Description>
							{idioma === "es"
								? "Visión y productividad."
								: "Vision and productivity."}
						</Description>
						<Description>
							{idioma === "es"
								? "Cierre de brechas, KPIs y calidad de vida de personas."
								: "Closing gaps, KPIs and quality of life of people."}
						</Description>
						<Description>
							{idioma === "es"
								? "Educación, salud, infraestructura, cadenas productivas y clústers, emprendimientos, calidad de instituciones y dotación de recursos naturales."
								: "Education, health, infrastructure, productive chains and clusters, entrepreneurship, quality of institutions and provision of natural resources."}
						</Description>
						<Description>
							{idioma === "es"
								? "Potencialidades y vectores de valor."
								: "Potentialities and vectors of value."}
						</Description>
						<Description>
							{idioma === "es"
								? "Intervenciones programas y proyectos."
								: "Interventions programs and projects."}
						</Description>
						<Description>
							{idioma === "es"
								? "Medición de intervenciones: pertinencia, eficacia, eficiencia, impacto y sostenibilidad."
								: "Measurement of interventions: relevance, effectiveness, efficiency, impact and sustainability."}
						</Description>
						<Description>
							{idioma === "es"
								? "Corredores económicos, sinergias y economías de escala en el desarrollo."
								: "Economic corridors, synergies and economies of scale in development."}
						</Description>
						<Description>
							{idioma === "es"
								? "Escala comunal, distrital, provincial o regional."
								: "Communal, district, provincial or regional scale."}
						</Description>
						<Description>
							{idioma === "es"
								? "Planificación y gestión de la competitividad y el desarrollo."
								: "Planning and management of competitiveness and development."}
						</Description>
					</Servicio>
					<Servicio
						reverse
						title={
							idioma === "es"
								? "Politica y Gestion Pública"
								: "Public Policy and Management"
						}
						image={`${cloudinary_url}service2_lg7tel`}
						url='/servicios/politica-y-gestion-publica'
					>
						<Description>
							{idioma === "es"
								? "Políticas públicas, estrategias y acciones sustentables en educación, salud e infraestructura."
								: "Public policies, strategies and sustainable actions in education, health and infrastructure."}
						</Description>
						<Description>
							{idioma === "es"
								? "Sustentabilidad y finanzas públicas."
								: "Sustainability and public finances."}
						</Description>
					</Servicio>
					<Servicio
						title={
							idioma === "es"
								? "Estudios Económicos"
								: "Economic Studies"
						}
						image={`${cloudinary_url}service3_gge4xt`}
						url='/servicios/estudios-economicos'
					>
						<p className={styles.text}>
							{idioma === "es"
								? "Promover el desarrollo sostenible del país en base al principio de la competitividad y de esta forma mejorar la calidad de vida de los ciudadanos."
								: "Promote sustainable development of the country based on the principle of competitiveness and thus improve the quality of life of citizens."}
						</p>
					</Servicio>
					<Servicio
						reverse={true}
						title={idioma === "es" ? "Inversiones" : "Investments"}
						image={`${cloudinary_url}service4_ljezkq`}
						url='/servicios/inversiones'
					>
						<p className={styles.text}>
							{idioma === "es"
								? "Público y privados, trabajos por impuestos, Apps. Ips e Invierte.pe. Así como financiamiento e instrumentos de innovación."
								: "Public and private, tax work, Apps. Ips and Invierte.pe. As well as financing and innovation instruments."}
						</p>
					</Servicio>
					<Servicio
						title={idioma === "es" ? "Legal" : "Legal"}
						image={`${cloudinary_url}service5_fc6kti`}
						url='/servicios/legal'
					>
						<p className={styles.text}>
							{idioma === "es"
								? "Administración política y pública, regulación, inversión y fondos sociales."
								: "Political and public administration, regulation, investment and social funds."}
						</p>
					</Servicio>
				</div>
			</div>
		</Section>
	);
};

export default ServiciosSection;
