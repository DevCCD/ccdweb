import HeaderBanner from "../../src/components/Header";
import MainLayout from "../../src/layouts/MainLayout";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { idiomaAtom } from "../../src/atoms/idiomAtom";
import styles from "../../src/styles/HomePage.module.css";
import InversionesSection from "../../src/components/Sections/servicios/Inversiones";
import RecentArticlesSection from "../../src/components/Sections/nosotros/RecentArticles";

const InversionesServicePage = () => {
	const [idioma] = useAtom(idiomaAtom);
	return (
		<MainLayout title={"Servicio Inversiones"}>
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
						{idioma === "es" ? "Inversiones" : "Investments"}
					</h1>
					<p color='currentColor' className={styles.parrafo}>
						{idioma === "es"
							? "Público y privados, trabajos por impuestos, Apps. Ips e Invierte.pe. Así como financiamiento e instrumentos de innovación."
							: "Public and private, tax works, Apps. Ips and Invierte.pe. As well as financing and innovation instruments."}
					</p>
				</motion.div>
			</HeaderBanner>
			<InversionesSection idioma={idioma} />
			<RecentArticlesSection idioma={idioma} />
		</MainLayout>
	);
};

export default InversionesServicePage;
