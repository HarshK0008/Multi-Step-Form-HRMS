import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";
import { useState } from "react";

export const CountrySelect = ({ register, name, fetchStates, setValue, watch, touched, errors }) => {
	const [countries] = useState(["Canada", "India", "USA"]); // Can add more countries
	const error = errors?.addresses?.[name.split("[")[1]?.split("]")[0]]?.[name.split("].")[1]]; // Adjust for dynamic field names
	const isTouched = touched?.addresses?.[name.split("[")[1]?.split("]")[0]]?.[name.split("].")[1]];

	return (
		<Box display="flex" flexDirection="column" gap="6px" width="48%">
			<FormControl fullWidth>
				<InputLabel>Country</InputLabel>
				<Select
					{...register(name)}
					value={watch(name) || ""}
					onChange={(e) => {
						setValue(name, e.target.value);
						fetchStates(e.target.value);
					}}
					label="Country"
					sx={errors?.country && { border: "2px solid red" }}
				>
					{countries.map((country, i) => (
						<MenuItem key={i} value={country}>
							{country}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<Box minHeight="20px">
				{errors[name] && (
					<Box minHeight="20px" color="red" fontSize="12px">
						{errors[name].message}
					</Box>
				)}
			</Box>
		</Box>
	);
};
