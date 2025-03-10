import { add_new_employee_page_nav_bar } from "@/constants/constants.js";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { PersonalInfoSvg } from "@/components/svgComponents/addNewEmpNavbarSvg/PersonalInfoSvg";
import React from "react";
import styles from "./newEmpNavbar.module.css";

export default function NewEmpNavbar() {
	const navbarData = add_new_employee_page_nav_bar;
	const router = useRouter();
	const pathname = usePathname();

	return (
		<div className={styles.add_new_emp_navbar_div}>
			{navbarData?.map((value, index) => {
				const isActive = pathname === value.link || pathname.startsWith(value.link);
				return (
					/* Use <Link>, to turn on the navigation of the Add New Employee NavBar for testing purpose only.
					to maintain the proper flow of the form and redux and local storage integrity.
					*/
					<div
						// <Link
						className={isActive ? styles.add_new_emp_navbar_item_active : styles.add_new_emp_navbar_item}
						key={value.item_name + index}
						href={value.link}
					>
						{React.isValidElement(value.icon) && React.cloneElement(value.icon, { isActive })}
						<span
							className={
								isActive
									? styles.add_new_emp_navbar_item_name_active
									: styles.add_new_emp_navbar_item_name
							}
						>
							{value.item_name} &nbsp;
						</span>
						{/* </Link> */}
					</div>
				);
			})}
		</div>
	);
}
