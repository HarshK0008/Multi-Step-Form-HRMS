import AllEmpBar from "@/components/allEmpHead/AllEmpBar";
import { Box } from "@mui/material";

export const metadata = {
	title: "All Employees",
};

export default function SideMenuLayout({ children }) {
	return (
		<>
			<Box
				className="all_employees_layout_div"
				display={"flex"}
				flexDirection={"column"}
				sx={{ height: "max-content", minHeight: "100vh", width: "79%" }}
			>
				<AllEmpBar />
				{children}
			</Box>
		</>
	);
}
