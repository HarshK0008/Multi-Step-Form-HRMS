"use client";

import { sidebar_menu_items } from "@/constants/constants";
import { usePathname } from "next/navigation";
import styles from "./uConstruction.module.css";

export default function UnderConstruction() {
	const pathname = usePathname();
	const [headingData] = sidebar_menu_items.filter((value) => {
		return pathname === value.link;
	});
	return (
		<div className={styles.under_construction}>
			<h1>{headingData?.item_name} Page</h1>
			<h2>Under Construction</h2>
		</div>
	);
}
