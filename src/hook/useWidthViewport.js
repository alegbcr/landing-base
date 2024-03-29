import { useState, useEffect } from "react";

export const useWidthViewport = () => {
	const [widthViewport, setWidthViewport] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWidthViewport(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return { widthViewport };
};
