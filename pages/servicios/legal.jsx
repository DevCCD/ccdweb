import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { idiomaAtom } from "../../src/atoms/idiomAtom";
import HeaderBanner from "../../src/components/Header";
import RecentArticlesSection from "../../src/components/Sections/nosotros/RecentArticles";
import LegalServiceSection from "../../src/components/Sections/servicios/Legal";
import MainLayout from "../../src/layouts/MainLayout";
import styles from "../../src/styles/HomePage.module.css";

const LegalServicePage = () => {
	const [idioma] = useAtom(idiomaAtom);
	return (
		<MainLayout title={"Servicio Legal"}>
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
						{idioma === "es" ? "Legal" : "Legal"}
					</h1>
					<p color='currentColor' className={styles.parrafo}>
						{idioma === "es"
							? "Administración política y pública, regulación, inversión y fondos sociales."
							: "Political and public administration, regulation, investment and social funds."}
					</p>
				</motion.div>
			</HeaderBanner>
			<LegalServiceSection idioma={idioma} />
			<RecentArticlesSection idioma={idioma} />
		</MainLayout>
	);
};

export default LegalServicePage;
