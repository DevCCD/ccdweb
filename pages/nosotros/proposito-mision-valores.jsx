import HeaderBanner from "../../src/components/Header";
import MainLayout from "../../src/layouts/MainLayout";
import { motion } from "framer-motion";
import styles from "../../src/styles/HomePage.module.css";
import { useAtom } from "jotai";
import { idiomaAtom } from "../../src/atoms/idiomAtom";
import RecentArticlesSection from "../../src/components/Sections/nosotros/RecentArticles";
import PropositoSection from "../../src/components/Sections/nosotros/PropositoMisionValores";

const PropositoMisionValoresPage = () => {
	const [idioma] = useAtom(idiomaAtom);

	return (
		<MainLayout title='Propósito, Misión y Valores'>
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
							? "Propósito, misión y valores"
							: "Purpose, mission and values"}
					</h1>
					<p color='currentColor' className={styles.parrafo}>
						{idioma === "es"
							? "Promover el desarrollo sostenible en base al principio de la competitividad con el objetivo de mejorar la calidad de vida de los ciudadanos."
							: "Promote sustainable development based on the principle of competitiveness with the aim of improving the quality of life of citizens."}
					</p>
				</motion.div>
			</HeaderBanner>
			<PropositoSection idioma={idioma} />
			<RecentArticlesSection idioma={idioma} />
		</MainLayout>
	);
};

export default PropositoMisionValoresPage;
