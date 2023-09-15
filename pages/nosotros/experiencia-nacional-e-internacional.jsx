import { useAtom } from "jotai";
import { idiomaAtom } from "../../src/atoms/idiomAtom";
import HeaderBanner from "../../src/components/Header";
import MainLayout from "../../src/layouts/MainLayout";
import { motion } from "framer-motion";
import styles from "../../src/styles/HomePage.module.css";
import RecentArticlesSection from "../../src/components/Sections/nosotros/RecentArticles";
import ExperienciaSection from "../../src/components/Sections/nosotros/Experiencia";

const ExperienciaNeIPage = () => {
	const [idioma] = useAtom(idiomaAtom);

	return (
		<MainLayout title='Experiencia Nacional e Internacional'>
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
							? "Nuestra Experiencia"
							: "Our Experience"}
					</h1>
					<p color='currentColor' className={styles.parrafo}>
						{idioma === "es"
							? "Conoce la experiencia de los profesionales y del CCD, nuestro alcance de trabajo nacional e internacional."
							: "Know the experience of the professionals and the CCD, our national and international work reach."}
					</p>
				</motion.div>
			</HeaderBanner>
			<ExperienciaSection idioma={idioma} />
			<RecentArticlesSection idioma={idioma} />
		</MainLayout>
	);
};

export default ExperienciaNeIPage;
