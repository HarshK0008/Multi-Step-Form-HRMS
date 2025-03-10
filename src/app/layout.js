import { metaData, Sidebar } from "../components/sidebar/Sidebar";
import { Box } from "@mui/material";
import "./globals.css";
import styles from "./global.module.css";

export const metadata = {
	title: {
		default: "HRMS",
		template: "HRMS | %s",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<Box className={styles.main_div} component={"div"}>
					<Sidebar />
					{children}
				</Box>
			</body>
		</html>
	);
}
