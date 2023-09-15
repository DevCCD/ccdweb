import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import BrochureModal from "./BrochureModal";

const BrochurePortal = () => {
	const [isMounted, setIsMounted] = useState(false);
	const containerRef = useRef(null);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return isMounted
		? createPortal(<BrochureModal />, document.getElementById("ccd-modal"))
		: null;
};

export default BrochurePortal;
