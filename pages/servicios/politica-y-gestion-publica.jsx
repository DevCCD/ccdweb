import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { idiomaAtom } from "../../src/atoms/idiomAtom";
import HeaderBanner from "../../src/components/Header";
import RecentArticlesSection from "../../src/components/Sections/nosotros/RecentArticles";
import PoliticaSection from "../../src/components/Sections/servicios/Politica";
import MainLayout from "../../src/layouts/MainLayout";
import styles from "../../src/styles/HomePage.module.css";

const PoliticayGestionServicePage = () => {
	const [idioma] = useAtom(idiomaAtom);

	return (
		<MainLayout title={"Servicio Política y Gestión Pública"}>
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
							? "Política y Gestión Publica"
							: "Public Policy and Management"}
					</h1>
					<p color='currentColor' className={styles.parrafo}>
						{idioma === "es"
							? "Políticas públicas, estrategias y acciones sustentables en educación, salud e infraestructura. Sustentabilidad y finanzas públicas."
							: "Public policies, strategies and sustainable actions in education, health and infrastructure. Sustainability and public finances."}
					</p>
				</motion.div>
			</HeaderBanner>
			<PoliticaSection idioma={idioma} />
			<RecentArticlesSection idioma={idioma} />
		</MainLayout>
	);
};

export default PoliticayGestionServicePage;
