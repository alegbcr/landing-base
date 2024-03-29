"use client";
import { useState } from "react";
import { useWidthViewport } from "@/hook/useWidthViewport";
import Image from "next/image";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import styles from "./Header.module.css";

const menuItems = [
	{
		name: "Sobre nosotros",
		href: "#about_us",
	},
	{
		name: "Servicios",
		href: "#our_services",
	},
	{
		name: "Cotización",
		href: "#talk_to_us",
	},
	{
		name: "Galería",
		href: "#gallery",
	},
	{
		name: "Contacto",
		href: "#container",
	},
];

export const Header = () => {
	const { widthViewport } = useWidthViewport();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="navbar navbar-expand-lg navbar-light  position-relative">
			<div className="container">
				<a className="navbar-brand" href="#main">
					<Image
						width={100}
						height={100}
						src="/images/logo-black.svg"
						alt="logo de estación gourmet"
					/>
				</a>
				{widthViewport <= 768 ? (
					<button
						className={styles.button__toggle}
						type="button"
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? (
							<AiOutlineClose className={styles.menu__icon} />
						) : (
							<AiOutlineMenu className={styles.menu__icon} />
						)}
					</button>
				) : (
					<ul className="d-flex">
						{menuItems.map((item, index) => (
							<li className="nav-item" key={index}>
								<a className="nav-link mx-2" href={item.href}>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				)}
				{isOpen ? (
					<ul className={styles.menuList_mobile}>
						{menuItems.map((item, index) => (
							<li
								className="nav-item my-2"
								onClick={() => setIsOpen(false)}
								key={index}
							>
								<a className={`${styles.itemList} nav-link`} href={item.href}>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				) : null}
			</div>
		</nav>
	);
};
