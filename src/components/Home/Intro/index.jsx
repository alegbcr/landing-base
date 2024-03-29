"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import styles from "./Intro.module.css";

const images = [
	"/images/home/atun.jpg",
	"/images/home/queque.jpg",
	"/images/home/sushi.jpg",
	"/images/home/products.jpg",
];

export const Intro = () => {
	const [currentImage, setCurrentImage] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage((currentImage + 1) % images.length);
		}, 3000);
		return () => clearInterval(interval);
	}, [currentImage]);

	return (
		<section className={styles.home__container}>
			<div className={styles.carousel__container} id="carousel_container">
				<picture className={styles.image__container}>
					<Image
						src={images[currentImage]}
						width={800}
						height={500}
						alt="atun"
						className={styles.image__item}
					/>
				</picture>
			</div>
			<div className={styles.overlay__container}>
				<h1 className={styles.text_center}>
					Somos amantes de la buena cuchara
				</h1>
			</div>
		</section>
	);
};
