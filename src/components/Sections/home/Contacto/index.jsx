import styles from "./styles/contacto.module.css";
import Section from "../../../Section";
import TitleSection from "../../../TitleSection";
import { MailFillIcon } from "../../../Icons/Interface";
import BriefcaseIcon from "../../../Icons/Interface/BriefcaseIcon";
import { useState } from "react";
import { ContactenosForm, TrabajeConNosotrosForm } from "./forms";

const ContactoSection = ({ idioma }) => {
	const [activeTab, setActiveTab] = useState(0);

	const handleTabClick = (index) => {
		setActiveTab(index);
	};

	const tabs = [
		{
			icon: <MailFillIcon />,
			title: idioma === "es" ? "Contáctenos" : "Contact Us",
			onClick: () => handleTabClick(0),
		},
		{
			icon: <BriefcaseIcon />,
			title: idioma === "es" ? "Trabaja con Nosotros" : "Work with Us",
			onClick: () => handleTabClick(1),
		},
	];

	return (
		<Section id='contacto'>
			<div className={styles.section}>
				<div className={styles.bg} />
				<div
					className='wrapper container'
					style={{ position: "relative", zIndex: 1 }}
				>
					<TitleSection
						isDark={true}
						styleSubtitle={{ color: "white" }}
						subtitle={
							idioma === "es"
								? "Expertos en competitividad y desarrollo"
								: "Experts in development and competitiveness"
						}
					>
						{idioma === "es"
							? "Únete a nosotros y vive la experiencia de la pasión por el desarrollo"
							: "Join Us and live the experience of the development"}
					</TitleSection>
				</div>
				<div className={styles.wrapper}>
					<div className={styles.tabsContainer}>
						{tabs.map((tab, index) => (
							<button
								key={index}
								className={`${styles.tab} ${
									activeTab === index ? styles.active : ""
								}`}
								onClick={tab.onClick}
							>
								{tab.icon}
								<h3 className={styles.tab_text}>{tab.title}</h3>
							</button>
						))}
					</div>
				</div>
			</div>
			<div className={styles.container_form}>
				<div className={styles.wrapper}>
					{activeTab === 0 ? (
						<ContactenosForm idioma={idioma} />
					) : (
						<TrabajeConNosotrosForm idioma={idioma} />
					)}
				</div>
			</div>
		</Section>
	);
};

export default ContactoSection;
