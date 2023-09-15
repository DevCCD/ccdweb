import { motion } from "framer-motion";
import Image from "next/image";
import CheckIcon from "../Icons/CheckIcon";
import styles from "./styles/dualgrid.module.css";

const DualGrid = ({
	title,
	children,
	image,
	reverse,
	subtitle,
	rightComponent,
	style,
}) => {
	return (
		<div
			className={
				reverse
					? `${styles.servicio} ${styles.reverse}`
					: `${styles.servicio}`
			}
			style={style}
		>
			{rightComponent ? (
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.15 }}
					viewport={{
						once: true,
						margin: "-50px",
					}}
				>
					{rightComponent}
				</motion.div>
			) : (
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
			)}

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
				{subtitle && (
					<h4 className={styles.servicioSubtitle}>
						{idioma === "es" ? "Servicio" : "Service"}
					</h4>
				)}
				{title && <h3 className={styles.servicioTitle}>{title}</h3>}
				<div className={styles.servicioDescription}>{children}</div>
			</motion.div>
		</div>
	);
};

const Item = ({ children }) => {
	return (
		<div className={styles.description}>
			<div className={styles.icon}>
				<CheckIcon />
			</div>
			<p className={styles.text}>{children}</p>
		</div>
	);
};

const Title = ({ children, css }) => {
	return (
		<h3 className={styles.servicioTitle} style={css}>
			{children}
		</h3>
	);
};

DualGrid.Item = Item;
DualGrid.Title = Title;

export default DualGrid;
