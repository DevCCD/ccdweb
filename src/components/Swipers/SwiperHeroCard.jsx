import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles/Swiper.module.css";
// import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper";

const SwiperHeroCard = () => {
	const slides = [
		{
			id: 1,
			title: "Slide 1",
		},
		{
			id: 2,
			title: "Slide 2",
		},
		{
			id: 3,
			title: "Slide 3",
		},
	];

	return (
		<div className={styles.heroSwiperCards_container}>
			<div
				style={{
					width: "100%",
					height: "100%",
					position: "absolute",
					top: 0,
					left: 0,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Swiper
					className={styles.heroSwiperCards}
					effect='creative'
					grabCursor={true}
					// auto width slides
					creativeEffect={{
						prev: {
							shadow: true,
							translate: [0, 0, -100],
							// rotate: [0, 0, -2],
						},
						next: {
							translate: ["108%", 0, 0],
						},
					}}
					modules={[EffectCreative]}
				>
					{slides.map((slide) => (
						<SwiperSlide
							key={slide.id}
							className={styles.sliderHeroCards}
						>
							{/* <h>{slide.title}</h> */}
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default SwiperHeroCard;
