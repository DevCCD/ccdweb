import HeaderBanner from "../../src/components/Header";
import MainLayout from "../../src/layouts/MainLayout";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { idiomaAtom } from "../../src/atoms/idiomAtom";
import styles from "../../src/styles/HomePage.module.css";
import DesarrolloSection from "../../src/components/Sections/servicios/Desarrollo";
import RecentArticlesSection from "../../src/components/Sections/nosotros/RecentArticles";

const DyCompServicePage = () => {
	const [idioma] = useAtom(idiomaAtom);

	return (
		<MainLayout title={"Servicio Desarrollo y Competitividad"}>
			<HeaderBanner>
				<motion.div
					className={styles.headerContainer}
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.35,
						delay: 0.2,
					}}
				>
					<h1 color='currentColor' className={styles.title}>
						{idioma === "es"
							? "Desarrollo y Competitividad"
							: "Development and Competitiveness"}
					</h1>
					<p color='currentColor' className={styles.parrafo}>
						{idioma === "es"
							? "Servicio de Alcance comunal, distrital, provincial y regional. Competitividad y planes de desarrollo. Instituciones Públicas y negocios , como sectores económicos."
							: "Service of Communal, District, Provincial and Regional Reach. Competitiveness and development plans. Public Institutions and businesses, as economic sectors."}
					</p>
				</motion.div>
			</HeaderBanner>
			<DesarrolloSection idioma={idioma} />
			<RecentArticlesSection idioma={idioma} />
		</MainLayout>
	);
};

export default DyCompServicePage;
