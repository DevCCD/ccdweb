import Section from "../../../Section";
import TitleSection from "../../../TitleSection";
import css from "./styles/experiencia.module.css";
import { Link as LinkScroll } from "react-scroll";
import MapSvg from "../../../Maps/MapSvg";
import { peruMap } from "../../../Maps/data/peruMap";
import { worldMap } from "../../../Maps/data/worldMap";
import { useAtom } from "jotai";
import {
	departSelectedAtom,
	countrySelectedAtom,
} from "../../../../atoms/hoverMapLocations";
import DataPointsPeru from "../../../Maps/points/DataPointsPeru";
import { useState } from "react";
import PieChartIcon from "../../../Icons/Interface/PieChartIcon";
import DataPointsWorld from "../../../Maps/points/DataPointsWorld";
import useMediaQuery from "../../../../hooks/useMediaQuery";

const ExperienciaSection = ({ idioma }) => {
	const isMediumScreen = useMediaQuery("(min-width: 980px)");
	const [departSelected, setDepartSelected] = useAtom(departSelectedAtom);
	const [countrySelected, setCountrySelected] = useAtom(countrySelectedAtom);
	const initialFilterStatePeru = {
		color: "",
		value: "",
	};
	const initialFilterStateWorld = {
		color: "",
		value: "",
	};

	const [filterDataPeru, setFilterDataPeru] = useState(
		initialFilterStatePeru
	);

	const [filterDataWorld, setFilterDataWorld] = useState(
		initialFilterStateWorld
	);

	const leyendaList = [
		{
			color: "#7A2599",
			colorFill: "#604a7b",
			text:
				idioma === "es"
					? "Competitividad y Desarrollo"
					: "Competitiveness and Development",
			value: "competitividad",
		},
		{
			color: "#C00000",
			colorFill: "#ae1414",
			text:
				idioma === "es"
					? "Política y Gestión Pública"
					: "Public Policy and Management",
			value: "politica",
		},
		{
			color: "#00B050",
			colorFill: "#3d8a3d",
			text: idioma === "es" ? "Estudios Económicos" : "Economic Studies",
			value: "economia",
		},
		{
			color: "#E46C0A",
			colorFill: "#b35a2c",
			text: idioma === "es" ? "Inversiones" : "Investments",
			value: "inversiones",
		},
		{
			color: "#0070C0",
			colorFill: "#3d6a8a",
			text: idioma === "es" ? "Legal" : "Legal",
			value: "legal",
		},
	];

	const handleFilterDataPeru = (color, value) => {
		if (filterDataPeru.color === color) {
			setFilterDataPeru(initialFilterStatePeru);
			return;
		}
		setFilterDataPeru({
			color,
			value,
		});
	};

	const handleFilterDataWorld = (color, value) => {
		if (filterDataWorld.color === color) {
			setFilterDataWorld(initialFilterStateWorld);
			return;
		}
		setFilterDataWorld({
			color,
			value,
		});
	};

	return (
		<Section
			id='nosotros_experiencia'
			css={{
				padding: "40px 0 50px 0",
			}}
		>
			<div className='wrapper container'>
				<div className={css.dualGrid}>
					<div className={css.wrapper_article}>
						<article id='experiencia_nacional'>
							<div className={css.content}>
								<div className={css.asideContent}>
									<TitleSection
										start={isMediumScreen}
										subtitle={
											idioma === "es" ? "Nuestra" : "Our"
										}
									>
										{idioma === "es"
											? "Experiencia Nacional"
											: "National Experience"}
									</TitleSection>
									<div className={css.leyenda}>
										<div className={css.leyendaHead}>
											<div className={css.headColor} />
											<p className={css.leyendaText}>
												{idioma === "es"
													? "Experiencia de profesionales CCD"
													: "CCD professional experience"}
											</p>
										</div>
										<div className={css.leyenda_title}>
											{idioma === "es"
												? "Leyenda - Filtro"
												: "Legend - Filter"}
										</div>
										<div className={css.leyendaBody}>
											{leyendaList &&
												leyendaList.map(
													(item, index) => {
														return (
															<button
																key={index}
																className={
																	filterDataPeru.value ===
																	item.value
																		? `${css.leyendaItem} ${css.active}`
																		: css.leyendaItem
																}
																title={`Filtrar por "${item.text}"`}
																onClick={() => {
																	handleFilterDataPeru(
																		item.colorFill,
																		item.value
																	);
																}}
																style={{
																	filter:
																		filterDataPeru.value &&
																		filterDataPeru.value !==
																			item.value
																			? "grayscale(100%)"
																			: "none",
																}}
															>
																<div
																	className={
																		css.itemColor
																	}
																	style={{
																		backgroundColor:
																			item.color,
																	}}
																/>
																<p
																	className={
																		css.itemText
																	}
																>
																	{item.text}
																</p>
															</button>
														);
													}
												)}
										</div>
									</div>
								</div>
								<div className={css.alcance_subnacional}>
									<MapSvg
										filterData={filterDataPeru}
										data={peruMap}
										setData={setDepartSelected}
										dataPoints={<DataPointsPeru />}
									/>
								</div>
							</div>
						</article>
						<article id='experiencia_internacional'>
							<TitleSection
								subtitle={idioma === "es" ? "Nuestra" : "Our"}
							>
								{idioma === "es"
									? "Experiencia Internacional"
									: "International Experience"}
							</TitleSection>
							<div className={css.content}>
								<div className={css.leyenda}>
									<div className={css.leyendaHead}>
										<div className={css.headColor} />
										<p className={css.leyendaText}>
											{idioma === "es"
												? "Experiencia de profesionales CCD"
												: "CCD professional experience"}
										</p>
									</div>
									<div className={css.leyenda_title}>
										{idioma === "es"
											? "Leyenda - Filtro"
											: "Legend - Filter"}
									</div>
									<div className={css.leyendaBody}>
										{leyendaList &&
											leyendaList.map((item, index) => {
												return (
													<button
														key={index}
														className={
															filterDataWorld.value ===
															item.value
																? `${css.leyendaItem} ${css.active}`
																: css.leyendaItem
														}
														title={`Filtrar por "${item.text}"`}
														onClick={() => {
															handleFilterDataWorld(
																item.colorFill,
																item.value
															);
														}}
														style={{
															filter:
																filterDataWorld.value &&
																filterDataWorld.value !==
																	item.value
																	? "grayscale(100%)"
																	: "none",
														}}
													>
														<div
															className={
																css.itemColor
															}
															style={{
																backgroundColor:
																	item.color,
															}}
														/>
														<p
															className={
																css.itemText
															}
														>
															{item.text}
														</p>
													</button>
												);
											})}
									</div>
								</div>
								<div className={css.alcance_internacional}>
									<MapSvg
										filterData={filterDataWorld}
										data={worldMap}
										setData={setCountrySelected}
										dataPoints={<DataPointsWorld />}
									/>
								</div>
							</div>
						</article>
					</div>
					<div className={css.aside_wrapper}>
						<div className={css.aside}>
							<div className={css.head_aside}>
								<TitleArticle>
									{idioma === "es" ? "Contenido" : "Content"}
								</TitleArticle>
							</div>
							<ul className={css.body_aside}>
								<li>
									<CustomLink to='experiencia_nacional'>
										{idioma === "es"
											? "Exp. Nacional"
											: "National Exp."}
									</CustomLink>
								</li>
								<li>
									<CustomLink to='experiencia_internacional'>
										{idioma === "es"
											? "Exp. Internacional"
											: "International Exp."}
									</CustomLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};

const CustomLink = ({ children, to }) => {
	return (
		<LinkScroll
			to={to}
			spy={true}
			smooth={true}
			offset={-45}
			duration={300}
			className={css.linkAside}
			activeClass={"activazo"}
		>
			{children}
		</LinkScroll>
	);
};

const TitleArticle = ({ children }) => {
	return (
		<h3 className={css.titleArticle}>
			{children}
			<span className={css.line}></span>
		</h3>
	);
};

export default ExperienciaSection;
