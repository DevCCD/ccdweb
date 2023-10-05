import { Text } from "@nextui-org/react";
import HeaderBanner from "../../src/components/Header";
import MainLayout from "../../src/layouts/MainLayout";
import styles from "../../src/styles/HomePage.module.css";
import { useAtom } from "jotai";
import { idiomaAtom } from "../../src/atoms/idiomAtom";
import { motion } from "framer-motion";
import AboutSection from "../../src/components/Sections/nosotros/About";
import RecentArticlesSection from "../../src/components/Sections/nosotros/RecentArticles";

const NosotrosPage = () => {
	const [idioma] = useAtom(idiomaAtom);

	return (
		<MainLayout
			title='Quiénes Somos Nosotros'
			description='Conoce quiénes somos nosotros, nuestra gente, valores, compromiso y más.'
		>
			<HeaderBanner titleImage='Quiénes Somos'>
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
						{idioma === "es" ? "QUIÉNES SOMOS" : "WHO WE ARE"}
					</h1>
					<p color='currentColor' className={styles.parrafo}>
						{idioma === "es"
							? "Somos una institución cuyo fin es promover el desarrollo sostenible del país en base al principio de la competitividad y de esta forma mejorar la calidad de vida de los ciudadanos."
							: "We are an institution whose purpose is to promote sustainable development of the country based on the principle of competitiveness and thus improve the quality of life of citizens."}
					</p>
				</motion.div>
			</HeaderBanner>
			<AboutSection idioma={idioma} />
			<RecentArticlesSection idioma={idioma} />
		</MainLayout>
	);
};

export default NosotrosPage;
