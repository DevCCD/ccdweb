import HeaderBanner from "../../src/components/Header";
import MainLayout from "../../src/layouts/MainLayout";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { idiomaAtom } from "../../src/atoms/idiomAtom";
import styles from "../../src/styles/HomePage.module.css";
import EEconmicosSection from "../../src/components/Sections/servicios/Economicos";
import RecentArticlesSection from "../../src/components/Sections/nosotros/RecentArticles";

const EConomicosServicePage = () => {
	const [idioma] = useAtom(idiomaAtom);
	return (
		<MainLayout title={"Servicio Estudios Económicos"}>
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
							? "Estudios Económicos"
							: "Economic Studies"}
					</h1>
					<p color='currentColor' className={styles.parrafo}>
						{idioma === "es"
							? "Servicio que promueve el desarrollo sostenible del país en base al principio de la competitividad y de esta forma mejorar la calidad de vida de los ciudadanos."
							: "Service that promotes sustainable development of the country based on the principle of competitiveness and thus improve the quality of life of citizens."}
					</p>
				</motion.div>
			</HeaderBanner>
			<EEconmicosSection idioma={idioma} />
			<RecentArticlesSection idioma={idioma} />
		</MainLayout>
	);
};

export default EConomicosServicePage;
