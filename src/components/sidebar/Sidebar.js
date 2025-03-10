"use client";

import Image from "next/image";
import { sidebar_menu_items } from "@/constants/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import React from "react";

import styles from "./sidebar.module.css";

export function Sidebar() {
	const router = useRouter();

	const pathname = usePathname();
	return (
		<Box component="div" className={styles.sidebar} bgcolor={"#A2A1A80D"}>
			<Image
				className={styles.sidebar_logo}
				height={50}
				width={123}
				src="/sidebarAssets/Logo.svg"
				alt="sidebar_logo_HRMS"
				onClick={() => {
					router.push("/");
				}}
			/>
			<div className={styles.sidebar_menu_items}>
				{sidebar_menu_items?.map((value, index) => {
					const isActive = pathname === value.link || pathname.startsWith(value.link);
					return (
						<Link
							className={isActive ? styles.sidebar_menu_item_active : styles.sidebar_menu_item}
							key={value.item_name}
							href={value.link}
						>
							<div className={styles.sidebar_menu_item_icon}>
								{React.isValidElement(value.icon) && React.cloneElement(value.icon, { isActive })}
							</div>

							<span
								className={
									isActive ? styles.sidebar_menu_item_name_active : styles.sidebar_menu_item_name
								}
							>
								{value.item_name}
							</span>
						</Link>
					);
				})}
			</div>
			<div className={styles.sidebar_toggle_buttons}></div>
		</Box>
	);
}
