import styles from "./styles/skeletonui.module.css";

const SkeletonUI = ({
	css,
	width,
	height,
	loading = true,
	children,
	radius,
	className,
}) => {
	const sizeStyle = {
		width: width,
		height: height,
		borderRadius: radius,
		...css,
	};

	return (
		<>
			{loading ? (
				<div
					className={
						className
							? `${styles.skeleton} ${className}`
							: styles.skeleton
					}
					style={sizeStyle}
				></div>
			) : (
				children
			)}
		</>
	);
};

export default SkeletonUI;
