import styles from "./styles/titleSection.module.css";
import { motion } from "framer-motion";

const TitleSection = ({
	children,
	subtitle,
	start,
	styleSubtitle,
	styleTitle,
	isDark,
	noTitle,
	noSubtitle,
	style,
}) => {
	return (
		<motion.div
			className={styles.titleWrapper}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{
				once: true,
				margin: "-100px",
			}}
			style={{
				...style,
				margin: start ? "0" : "0 auto",
				textAlign: start ? "left" : "center",
				color: isDark ? "white" : "currentColor",
			}}
		>
			{!noSubtitle && (
				<h2 className={styles.subtitle} style={{ ...styleSubtitle }}>
					{subtitle}
				</h2>
			)}
			{!noTitle && (
				<h1 className={styles.title} style={{ ...styleTitle }}>
					{children}
				</h1>
			)}
		</motion.div>
	);
};

TitleSection.defaultProps = {
	orientation: styles.center,
	isDark: false,
	children: "Titulo",
	subtitle: "Subtitulo",
	start: false,
};

export default TitleSection;
