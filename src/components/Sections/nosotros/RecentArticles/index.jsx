import Image from "next/image";
import Section from "../../../Section";
import SwiperRecentArticles from "../../../Swipers/SwiperRecentArticles";
import TitleSection from "../../../TitleSection";
import styles from "./styles/recentArticles.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const RecentArticlesSection = ({ idioma }) => {
	const router = useRouter();

	return (
		<div
			style={{
				backgroundColor: "var(--sectionBgContrast)",
			}}
		>
			<Section
				id='recent_articles'
				css={{
					position: "relative",
					backgroundColor: "var(--primary-color)",
					paddingBottom: 0,
				}}
			>
				<div className={styles.bgHeadSection}>
					<div className={styles.bgMap}>
						<Image
							src='/assets/images/map.png'
							fill
							alt='map image dots vector'
						/>
					</div>
				</div>
				<div className='wrapper container'>
					<TitleSection
						isDark={true}
						styleSubtitle={{ color: "white" }}
						subtitle={idioma === "es" ? "Conoce más" : "Know more"}
					>
						{idioma === "es" ? "Artículos" : "Articles"}
					</TitleSection>
				</div>
				<div className={styles.space}></div>
			</Section>

			<div className='wrapper container'>
				<SwiperRecentArticles idioma={idioma} />
			</div>
		</div>
	);
};

export default RecentArticlesSection;
