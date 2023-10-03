import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles/SwiperRecentArticles.module.css";
import { useRouter } from "next/router";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination } from "swiper";
import SkeletonUI from "../Loaders/SkeletonUI";

const SwiperRecentArticles = ({ idioma }) => {
	// const [ruta, setRuta] = useState("");

	const Card = ({ title, description, category, image = false, link }) => {
		return (
			<div className={styles.card}>
				<Link href={link} className={styles.cardImage}>
					<Image
						width={1000}
						height={320}
						src={image ? image : "/assets/images/mision_vision.jpg"}
						alt={title}
					/>
					<SkeletonUI
						width={"100%"}
						height={"100%"}
						css={{
							position: "absolute",
							top: 0,
							left: 0,
							zIndex: -1,
							borderRadius: "0",
						}}
					/>
					<div className={styles.overlayBg} />
					<div className={styles.plus}>
						<div className={styles.line} />
						<div className={styles.line} />
					</div>
				</Link>
				<div className={styles.cardContent}>
					<h5 className={styles.cardCategory}>{category}</h5>
					<Link href={link} className={styles.cardTitle}>
						{title}
					</Link>
					<p className={styles.cardDescription}>{description}</p>
					<Link href={link} className={styles.cardLink}>
						{idioma === "es" ? "Leer más" : "Read more"}
					</Link>
				</div>
			</div>
		);
	};

	const router = useRouter();
	const primeraRuta = router.pathname.split("/")[1];
	const articuloPath = router.pathname;

	const rutasArticulos = [
		{
			path: "nosotros",
			articles: [
				{
					title:
						idioma === "es"
							? "Nosotros ¿Quienes Somos?"
							: "About us Who are we?",
					description:
						idioma === "es"
							? "Somos una institución cuyo fin es promover el desarrollo sostenible del país en base al principio de la competitividad y de esta forma mejorar la calidad de vida de los ciudadanos."
							: "We are an institution whose purpose is to promote sustainable development of the country based on the principle of competitiveness and thus improve the quality of life of citizens.",
					category: idioma === "es" ? "Nosotros" : "About us",
					link: "/nosotros",
					image: "https://res.cloudinary.com/dro4ur0kq/image/upload/f_auto,q_auto/v1680196475/ccd-web/nosotros/about_xulvkn",
				},
				{
					title:
						idioma === "es"
							? "Misión y visión"
							: "Mission and vision",
					description:
						idioma === "es"
							? "Promover el desarrollo sostenible en base al principio de la competitividad con el objetivo de mejorar la calidad de vida de los ciudadanos."
							: "Promote sustainable development based on the principle of competitiveness with the aim of improving the quality of life of citizens.",
					category: idioma === "es" ? "Nosotros" : "About us",
					link: "/nosotros/proposito-mision-valores",
					image: "https://res.cloudinary.com/dro4ur0kq/image/upload/f_auto,q_auto/v1680197048/ccd-web/nosotros/mision_f3kv68",
				},
				{
					title:
						idioma === "es"
							? "Experiencia Nacional e Internacional"
							: "National and International Experience",
					description:
						idioma === "es"
							? "Conoce la experiencia de los profesionales y del CCD, nuestro alcance de trabajo nacional e internacional."
							: "Know the experience of the professionals and the CCD, our national and international work reach.",
					category: idioma === "es" ? "Nosotros" : "About us",
					link: "/nosotros/experiencia-nacional-e-internacional",
					image: "https://res.cloudinary.com/dro4ur0kq/image/upload/f_auto,q_auto/v1680196728/ccd-web/nosotros/internacional_enloqw",
				},
			],
		},
		{
			path: "servicios",
			articles: [
				{
					title:
						idioma === "es"
							? "Desarrollo y Competitividad"
							: "Development and Competitiveness",
					description:
						idioma === "es"
							? "Servicio de Alcance comunal, distrital, provincial y regional. Competitividad y planes de desarrollo. Instituciones Públicas y negocios , como sectores económicos."
							: "Service of Communal, District, Provincial and Regional Reach. Competitiveness and development plans. Public Institutions and businesses, as economic sectors.",
					category:
						idioma === "es"
							? "Servicios - Nuestro trabajo"
							: "Services - Our work",
					link: "/servicios/desarrollo-y-competitividad",
					image: "https://res.cloudinary.com/dro4ur0kq/image/upload/f_auto,q_auto/v1678470932/ccd-web/servicios/desarrollo_compt_u4iltq",
				},
				{
					title:
						idioma === "es"
							? "Politica y Gestión Pública"
							: "Public Policy and Public Management",
					description:
						idioma === "es"
							? "Políticas públicas, estrategias y acciones sustentables en educación, salud e infraestructura. Sustentabilidad y finanzas públicas."
							: "Public policies, strategies and sustainable actions in education, health and infrastructure. Sustainability and public finances.",
					category:
						idioma === "es"
							? "Servicios - Nuestro trabajo"
							: "Services - Our work",
					link: "/servicios/politica-y-gestion-publica",
					image: "https://res.cloudinary.com/dro4ur0kq/image/upload/f_auto,q_auto/v1678484844/ccd-web/servicios/gestion_envtlg",
				},
				{
					title:
						idioma === "es"
							? "Estudios Económicos"
							: "Economic Studies",
					description:
						idioma === "es"
							? "Servicio que promueve el desarrollo sostenible del país en base al principio de la competitividad y de esta forma mejorar la calidad de vida de los ciudadanos."
							: "Service that promotes sustainable development of the country based on the principle of competitiveness and thus improve the quality of life of citizens.",
					category:
						idioma === "es"
							? "Servicios - Nuestro trabajo"
							: "Services - Our work",
					link: "/servicios/estudios-economicos",
					image: "https://res.cloudinary.com/dro4ur0kq/image/upload/f_auto,q_auto/v1673375567/ccd-web/servicios/estudios_economicos_reom3a",
				},
				{
					title: idioma === "es" ? "Inversiones" : "Investments",
					description:
						idioma === "es"
							? "Público y privados, trabajos por impuestos, Apps. Ips e Invierte.pe. Así como financiamiento e instrumentos de innovación."
							: "Public and private, tax works, Apps. Ips and Invierte.pe. As well as financing and innovation instruments.",
					category:
						idioma === "es"
							? "Servicios - Nuestro trabajo"
							: "Services - Our work",
					link: "/servicios/inversiones",
					image: "https://res.cloudinary.com/dro4ur0kq/image/upload/f_auto,q_auto/v1672335749/ccd-web/servicios/service4_ljezkq",
				},
				{
					title: idioma === "es" ? "Servicio Legal" : "Legal Service",
					description:
						idioma === "es"
							? "Administración política y pública, regulación, inversión y fondos sociales."
							: "Political and public administration, regulation, investment and social funds.",
					category:
						idioma === "es"
							? "Servicios - Nuestro trabajo"
							: "Services - Our work",
					link: "/servicios/legal",
					image: "https://res.cloudinary.com/dro4ur0kq/image/upload/f_auto,q_auto/v1672335749/ccd-web/servicios/service5_fc6kti",
				},
			],
		},
	];
	return (
		<Swiper
			className={styles.swiper}
			slidesPerView={1}
			spaceBetween={16}
			breakpoints={{
				678: {
					slidesPerView: 2,
					spaceBetween: 16,
				},
				1140: {
					slidesPerView: 3,
					spaceBetween: 16,
				},
			}}
		>
			{rutasArticulos.map((ruta) => {
				if (ruta.path === primeraRuta) {
					return ruta.articles.map((articulo) => {
						if (articulo.link !== articuloPath) {
							return (
								<SwiperSlide key={articulo.title}>
									<Card
										title={articulo.title}
										description={articulo.description}
										category={articulo.category}
										link={articulo.link}
										image={articulo.image}
									/>
								</SwiperSlide>
							);
						}
					});
				}
			})}
		</Swiper>
	);
};

export default SwiperRecentArticles;
