import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import styles from "./styles/Swiper.module.css";
import Image from "next/image";
import { EffectFade } from "swiper";

const SwiperHome = () => {
	return (
		<Swiper
			className={styles.homeSwiper}
			effect={"fade"}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
			}}
			// no swiping or dragging
			modules={[EffectFade]}
		>
			<SwiperSlide>
				<Image
					fill
					src='/assets/images/carousel/img.jpg'
					className={styles.imagen}
					alt='Centro para la competitividad y el desarrollo'
					quality={100}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					fill
					src='/assets/images/carousel/img0.jpg'
					className={styles.imagen}
					alt='Centro para la competitividad y el desarrollo'
				/>
			</SwiperSlide>
		</Swiper>
	);
};

export default SwiperHome;
