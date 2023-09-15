const FilterExperiencia = () => {
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

	const handleFilterData = (color, value) => {
		if (filterData.color === color) {
			setFilterData(initialFilterState);
			return;
		}
		setFilterData({
			color,
			value,
		});
	};

	return <div>Enter</div>;
};

export default FilterExperiencia;
