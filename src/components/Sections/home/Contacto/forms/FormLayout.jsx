import styles from "../styles/contacto.module.css";
import { motion } from "framer-motion";

const FormLayout = ({ children, idioma }) => {
	return (
		<div className={styles.formLayout}>
			{children}
			<motion.div
				className={styles.asideForm}
				initial={{ opacity: 0, x: 150 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{
					once: true,
					margin: "-100px",
				}}
			>
				<h3 className={styles.titleAside}>
					{idioma === "es"
						? "¡Creemos en tu potencial, experiencia y habilidades blandas!"
						: "We believe in your potential, experience and soft skills!"}
				</h3>
				<p className={styles.description}>
					{idioma === "es"
						? "Se parte de la institución líder del país en competitividad, con más de una década impulsando el desarrollo nacional, regional, provincial, distrital y comunal. "
						: "Be part of the leading institution in competitiveness in the country, with more than a decade promoting national, regional, provincial, district and communal development."}
				</p>
				<p className={styles.description}>
					Avenida Felipe Pardo y Aliaga
					<br />
					N° 699
					<br />
					SAN ISIDRO, LIMA (Lima)
				</p>
			</motion.div>
		</div>
	);
};

export default FormLayout;
