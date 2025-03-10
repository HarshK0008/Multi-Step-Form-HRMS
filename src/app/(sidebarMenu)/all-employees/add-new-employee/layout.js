"use client";

import { store } from "@/lib/reduxStore/store";
import { Box, Paper } from "@mui/material";
import { Provider } from "react-redux";
import { add_new_employee_page_nav_bar } from "@/constants/constants";
import { usePathname, useRouter } from "next/navigation";
import NewEmpNavbar from "@/components/allEmpComp/addNewEmpNavbar/NewEmpNavbar";

export default function FormLayout({ children }) {
	const navbarData = add_new_employee_page_nav_bar;

	const router = useRouter();

	const pathname = usePathname();
	return (
		<>
			<Provider store={store}>
				<Paper
					elevation={2}
					sx={{
						height: "inherit",
						minHeight: "80vh",
						width: "92%",
						marginTop: "20px",
						marginLeft: "30px",
						marginBottom: "30px",
						padding: "20px",
					}}
				>
					<Box
						component={"div"}
						className="add_new_employee_page_nav_bar_main_div"
						sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
					>
						<NewEmpNavbar />
						{children}
					</Box>
				</Paper>
			</Provider>
		</>
	);
}
