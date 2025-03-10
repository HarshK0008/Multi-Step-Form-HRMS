// export const metadata = {
// 	title: "All Employees",
// };

import RouterButtonElement from "@/components/allEmpComp/RouterButtonElement";

export default async function AllEmployees() {
	return (
		<>
			<h1>All Users Here</h1>
			<RouterButtonElement />
		</>
	);
}
// app/users/page.js (or any React component)

// "use client";

// import { useEffect, useState } from "react";
// import { Backdrop, CircularProgress } from "@mui/material";
// import { InputElement, InputField, TextArea } from "@/components/inputFIeld/InputField";

// export default function Users() {
// 	const [users, setUsers] = useState([]);
// 	const [loading, setLoading] = useState(true);
// 	const [error, setError] = useState(null);

// 	useEffect(() => {
// 		async function fetchUsers() {
// 			try {
// 				const res = await fetch("/api/employees");
// 				if (!res.ok) {
// 					throw new Error("Failed to fetch users");
// 				}
// 				const data = await res.json();
// 				console.log(data);
// 				setUsers(data);
// 			} catch (err) {
// 				setError(err.message);
// 			} finally {
// 				setLoading(false);
// 			}
// 		}

// 		fetchUsers();
// 	}, []);

// 	if (loading) {
// 		return (
// 			<Backdrop
// 				sx={{ color: "#fff", position: "absolute", zIndex: 1, backdropFilter: blur("10px") }}
// 				open={loading}
// 			>
// 				<CircularProgress color="inherit" />
// 			</Backdrop>
// 		);
// 		<div>Loading...</div>;
// 	}

// 	if (error) {
// 		return <div>Error: {error}</div>;
// 	}

// 	return (
// 		<div>
// 			<h1>User List:</h1>
// 			<ul>
// 				{users?.map((user) => (
// 					<li key={user.id}>
// 						{user.first_name} {user.last_name}
// 					</li>
// 				))}
// 			</ul>
// 			{/* <InputElement type="text" placeholder="Employee ID" sx={{ width: "511px" }} />
// 			<InputElement   placeholder="Employee ID" sx={{ width: "511px" }} />
// 			<TextArea placeholder="Bio" /> */}
// 		</div>
// 	);
// }
