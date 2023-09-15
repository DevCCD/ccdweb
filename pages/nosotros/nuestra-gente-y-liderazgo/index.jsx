import HeaderBanner from "../../../src/components/Header";
import MainLayout from "../../../src/layouts/MainLayout";
import { motion } from "framer-motion";
import styles from "../../../src/styles/HomePage.module.css";
import { idiomaAtom } from "../../../src/atoms/idiomAtom";
import { useAtom } from "jotai";
import RecentArticlesSection from "../../../src/components/Sections/nosotros/RecentArticles";
import GenteLiderazgoSection from "../../../src/components/Sections/nosotros/GenteLiderazgo";

const GenteLiderazgoPage = () => {
	const [idioma] = useAtom(idiomaAtom);

	return (
		<MainLayout title={"Nuestro equipo y liderazgo"}>
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
							? "Nuestro equipo y liderazgo"
							: "Our people and leadership"}
					</h1>
					<p color='currentColor' className={styles.parrafo}>
						{idioma === "es"
							? "Nuestra gente nos define y estamos profundamente comprometidos con la creación de una cultura diversa e inclusiva."
							: "Our people define us and we are deeply committed to creating a diverse and inclusive culture."}
					</p>
				</motion.div>
			</HeaderBanner>
			<GenteLiderazgoSection idioma={idioma} />
			<RecentArticlesSection idioma={idioma} />
		</MainLayout>
	);
};

export default GenteLiderazgoPage;
