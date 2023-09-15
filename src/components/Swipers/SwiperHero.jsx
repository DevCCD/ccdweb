import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles/SwiperHero.module.css";
import { useState } from "react";
import { useAtom } from "jotai";
import { slideIndexAtom } from "../../atoms/heroAtom";
import { motion } from "framer-motion";

const SwiperHero = () => {
	const [swiper, setSwiper] = useState(null);
	const [activeIndex, setActiveIndex] = useAtom(slideIndexAtom);

	return (
		<div className={styles.container}>
			<motion.div
				className={styles.blank}
				initial={
					{
						// marginLeft: activeIndex !== 0 ? "0%" : "100%",
						// width: activeIndex !== 0 ? "0%" : "100%",
					}
				}
				animate={{ width: activeIndex !== 0 ? 0 : "720px" }}
				transition={{ duration: 0.5, delay: 0.25 }}
			></motion.div>
			<div className={styles.content}>
				<Swiper
					id='heroSwiper'
					className={styles.heroSwiper}
					slidesPerView={"auto"}
					spaceBetween={16}
					centeredSlides={true}
					onSwiper={setSwiper}
					onSlideChange={(swiper) => {
						setActiveIndex(swiper.realIndex);
					}}
				>
					<SwiperSlide className={styles.HeroSliderWrapper}>
						<div className={styles.heroSlide}>hola</div>
					</SwiperSlide>
					<SwiperSlide className={styles.HeroSliderWrapper}>
						<div className={styles.heroSlide}>
							hola
							{activeIndex}
						</div>
					</SwiperSlide>
					<SwiperSlide className={styles.HeroSliderWrapper}>
						<div className={styles.heroSlide}>hola</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default SwiperHero;
