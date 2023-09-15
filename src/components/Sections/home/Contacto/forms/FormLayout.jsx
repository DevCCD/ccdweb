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
						? "Creemos en el poder de la comunicación!"
						: "We believe in the power of communication!"}
				</h3>
				<p className={styles.description}>
					{idioma === "es"
						? "En Centro para la Competitividad y el Desarrollo (CCD) brindamos asesoría en procesos públicos, gestiones sociales y más. "
						: "At Centro para la Competitividad y el Desarrollo (CCD) we provide advice on public processes, social management and more."}
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
