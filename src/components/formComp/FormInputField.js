import { Box } from "@mui/material";
import { InputElement } from "../styledComp/StyledComp.js";

export const FormInputField = ({ register, name, type, placeholder, errors, touched, sx }) => {
	const error = errors[name];
	const isTouched = touched[name];
	return (
		<Box display="flex" flexDirection="column" gap="6px" width="48%">
			<InputElement
				{...register(name)}
				type={type}
				placeholder={placeholder}
				sx={{
					border: error
						? "2px solid red" // Red border on error
						: !isTouched // No error and untouched
						? "2px solid #A2A1A833" // Default border color (gray) for untouched fields
						: "2px solid green", // Green border when valid
					...sx,
				}}
			/>
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

export const FormInputFieldAddress = ({ register, name, type, placeholder, errors, touched, sx }) => {
	// Accessing error for dynamic fields
	const error = errors?.addresses?.[name.split("[")[1]?.split("]")[0]]?.[name.split("].")[1]]; // Adjust for dynamic field names
	const isTouched = touched?.addresses?.[name.split("[")[1]?.split("]")[0]]?.[name.split("].")[1]];

	return (
		<Box display="flex" flexDirection="column" gap="6px" width="48%">
			<InputElement
				{...register(name)}
				type={type}
				placeholder={placeholder}
				sx={{
					border: error ? "2px solid red" : !isTouched ? "2px solid #A2A1A833" : "2px solid green",
					...sx,
				}}
			/>
			<Box minHeight="20px">
				{error && (
					<Box minHeight="20px" color="red" fontSize="12px">
						{error.message}
					</Box>
				)}
			</Box>
		</Box>
	);
};
