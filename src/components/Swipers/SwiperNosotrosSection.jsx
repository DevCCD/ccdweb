import { Text } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles/SwiperNosotrosSection.module.css";
import { useState } from "react";

const SwiperNosotrosSection = ({ idioma }) => {
	const [swiper, setSwiper] = useState(null);
	const [indexSlide, setIndexSlide] = useState(0);

	return (
		<div className={styles.container}>
			<Swiper
				className={styles.swiper}
				spaceBetween={60}
				onSwiper={(swiper) => {
					setSwiper(swiper);
				}}
				onSlideChange={(swiper) => {
					setIndexSlide(swiper.realIndex);
				}}
			>
				<SwiperSlide className={styles.slide}>
					<div className={styles.slidewrapper}>
						<div
							className={styles.slideImagen}
							style={{
								background: `url("/assets/images/mision_vision/mision.png")`,
							}}
						/>
						<div className={styles.slideInfo}>
							<Text className={styles.slideTitle} h3>
								{idioma === "es"
									? "Nuestra Misión"
									: "Our Mission"}
							</Text>
							<Text className={styles.slideParrafo}>
								{idioma === "es"
									? "Brindar asesorías, consultorías y capacitaciones en el marco de la gestión social, la inversión pública y privada."
									: "To provide advice, consultancy and training in the framework of social management, public and private investment."}
							</Text>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.slidewrapper}>
						<div
							className={styles.slideImagen}
							style={{
								background: `url("/assets/images/mision_vision/vision.png")`,
							}}
						/>
						<div className={styles.slideInfo}>
							<Text className={styles.slideTitle} h3>
								{idioma === "es"
									? "Nuestra Visión"
									: "Our Vision"}
							</Text>
							<Text className={styles.slideParrafo}>
								{idioma === "es"
									? "Ser una empresa líder en consultoría en el marco de Inversión publica y privada."
									: "To be a leading company in consultancy in the framework of public and private investment."}
							</Text>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
			<div className={styles.bulletPagination}>
				{swiper &&
					swiper.slidesGrid.map((slide, index) => (
						<button
							key={index}
							className={
								indexSlide === index
									? styles.bulletActive
									: styles.bullet
							}
							onClick={() => {
								swiper.slideTo(index);
							}}
						>
							<span className={styles.bulletSpan} />
						</button>
					))}
			</div>
		</div>
	);
};

SwiperNosotrosSection.defaultProps = {
	idioma: "es",
};

export default SwiperNosotrosSection;
