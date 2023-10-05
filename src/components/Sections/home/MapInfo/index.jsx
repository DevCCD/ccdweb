import { contactNumber } from "../../../../data";
import Collapse from "../../../Collapse";
import Section from "../../../Section";
import styles from "./styles/mapInfo.module.css";

const MapInfoSection = ({ idioma }) => {
	const stylesMap = {
		width: "100%",
		height: "100%",
		border: "0",
		position: "absolute",
		top: "0",
		left: "0",
		filter: "var(--map-filter)",
	};

	return (
		<Section id='map-contact'>
			<div className={styles.wrapper}>
				<div className={styles.tab_container}>
					<div className={styles.tab}>
						<div className={styles.tabHeader}>
							{idioma === "es"
								? "Ubicación e Info"
								: "Location and Info"}
						</div>
						<div className={styles.tabContent}>
							<Collapse
								border
								title={
									idioma === "es"
										? "Sede Central"
										: "Headquarters"
								}
								isActive
							>
								<div className={styles.infoItems}>
									<div className={styles.infoItem}>
										<p className={styles.infoTitle}>
											{idioma === "es"
												? "Celular:"
												: "Phone:"}
										</p>
										<a href={`tel:+51${contactNumber}`}>
											{contactNumber}
										</a>
									</div>
									<div className={styles.infoItem}>
										<p className={styles.infoTitle}>
											Email:
										</p>
										<a
											className={styles.infoEmail}
											href={`mailto:melissa.sanchez@competitividadccd.com`}
										>
											melissa.sanchez@competitividadccd.com
										</a>
									</div>
									<div
										className={styles.infoItem}
										style={{ alignItems: "flex-start" }}
									>
										<p className={styles.infoTitle}>
											{idioma === "es"
												? "Dirección: "
												: "Address: "}
											&nbsp;&nbsp;Av. Felipe Pardo y
											Aliaga N° 699 San Isidro, LIMA
											(Lima)
										</p>
									</div>
									<div className={styles.infoItem}>
										<p className={styles.infoTitle}>
											{idioma === "es"
												? "Horario de Atención:"
												: "Opening Hours: "}
										</p>
										<p>9:00 am - 6:00 pm</p>
									</div>
								</div>
							</Collapse>
							{/* <Collapse
								border
								title={
									idioma === "es"
										? "Sede Central2"
										: "Headquartersdw"
								}
								isActive
							>
								Sede 2
							</Collapse> */}
						</div>
					</div>
				</div>
			</div>
			<div className={styles.map_wrapper}>
				<iframe
					name='google-maps'
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.0820035243637!2d-77.04113654922523!3d-12.106538546270375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c840cbc1f651%3A0xe32c9c6c2f00e30b!2sAv.%20Pardo%20y%20Aliaga%20699%2C%20San%20Isidro%2015073!5e0!3m2!1ses-419!2spe!4v1672269440143!5m2!1ses-419!2spe'
					width='600'
					height='450'
					style={stylesMap}
					allowFullScreen=''
					id='mapa'
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
				/>
			</div>
		</Section>
	);
};

export default MapInfoSection;
