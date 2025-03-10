"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function RouterButtonElement(path) {
	const router = useRouter();

	const handleClick = () => {
		router.push("/all-employees/add-new-employee/personal-information");
	};
	return (
		<Button onClick={handleClick} sx={{ bgcolor: "#7152F3", color: "#fff", width: "200px" }}>
			Add New Employee
		</Button>
	);
}
