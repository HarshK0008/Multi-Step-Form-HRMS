"use client";

import { Box, Typography } from "@mui/material";
import { SearchTab } from "../searchTab/SearchTab";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import styles from "./allEmpBar.module.css";

export default function AllEmpBar() {
	const router = useRouter();
	const pathName = usePathname();

	let headingOne = "All Employees";
	let headingTwo = "All Employees Information";

	if (pathName.includes("add-new-employee")) {
		headingOne = "Add New Employee";
		headingTwo = `All Employees  >  Add New Employee`;
	}

	return (
		<>
			<Box component={"div"} className={styles.all_employees_bar}>
				<Box className={styles.all_employees_bar_heading}>
					<Box display={"flex"} flexDirection={"column"} width={"400px"} height={"52px"}>
						<Typography
							component={"span"}
							lineHeight={"30px"}
							fontSize={"20px"}
							fontWeight={"600"}
							fontFamily={"inherit"}
						>
							{headingOne}
						</Typography>
						<Typography
							component={"span"}
							lineHeight={"22px"}
							fontSize={"14px"}
							fontWeight={"300"}
							fontFamily={"inherit"}
						>
							{headingTwo}
						</Typography>
					</Box>
				</Box>
				<Box className={styles.all_employees_bar_right_half} display={"flex"} gap={"20px"}>
					<SearchTab />
					<Box
						className="all_employees_bar_right_notification_button"
						bgcolor="#A2A1A81A"
						height="50px"
						width="50px"
						borderRadius="15px"
						display={"flex"}
						alignItems={"center"}
						justifyContent={"center"}
						sx={{ cursor: "pointer" }}
					>
						<Image src={"/otherSvgs/notification.svg"} width={24} height={24} alt="Search-Icon" />
					</Box>
					<Box className={styles.all_employees_bar_right_profile_tab} sx={{ height: "50px", width: "184px" }}>
						<Image
							src="/otherSvgs/My Profile.svg"
							height="50"
							width="184"
							alt="profile_view"
							style={{ cursor: "pointer" }}
						></Image>
					</Box>
				</Box>
			</Box>
		</>
	);
}
