import { useEffect } from "react";
import { useState } from "react";
import styles from "./styles/peruMapSvg.module.css";

const MapSvg = ({ data, setData, dataPoints, filterData, styleMap }) => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [selected, setSelected] = useState(null);

	const { locations, viewBox } = data;

	const [dataMap, setDataMap] = useState(locations);

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);
	}, []);

	function handleMouseMove(e) {
		setMousePosition({ x: e.pageX, y: e.pageY });
	}

	const handleMouseEnter = (e) => {
		setData && setData(e.target.getAttribute("name"));
		setSelected(e.target.getAttribute("name"));
	};

	const handleMouseLeave = () => {
		setData && setData(null);
		setSelected(null);
	};

	return (
		<>
			<div
				style={{
					top: mousePosition.y,
					left: mousePosition.x,
					display: selected ? "block" : "none",
				}}
				className={styles.tooltip}
			>
				{selected}
			</div>
			<div
				className={styles.map}
				style={styleMap}
				onMouseMove={handleMouseMove}
			>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox={viewBox}>
					{dataMap.map((location, index) => {
						const fillStyle = {
							fill: location.fill ? location.fill : "#fdbe03",
							cursor: location.fill && "pointer",
						};

						const filterStyle = {
							fill: location.categories?.includes(
								filterData?.value
							)
								? filterData?.color
								: "#f0f2f5",
						};

						return (
							<path
								key={index}
								className={styles.path}
								d={location.path}
								id={location.id}
								stroke='#000'
								name={location.name}
								style={
									filterData?.value ? filterStyle : fillStyle
								}
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
							/>
						);
					})}
				</svg>
				{dataPoints && (
					<div className={styles.containerPoints}>{dataPoints}</div>
				)}
			</div>
		</>
	);
};

export default MapSvg;
