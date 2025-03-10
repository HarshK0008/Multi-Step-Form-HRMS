import { Box, Button } from "@mui/material";

export const ButtonGroup = ({
	buttonOneName = "Next",
	buttonTwoName = "Prev",
	onButtonOneClick,
	onButtonTwoClick,
	isValid,
}) => {
	return (
		<Box display={"flex"} flexDirection={"row-reverse"}>
			<Button
				type="submit"
				onClick={onButtonOneClick}
				style={{
					height: "50px",
					width: "91px",
					backgroundColor: "#7152F3",
					color: "white",
					borderRadius: "15px",
				}}
				// disabled={!isValid}
				sx={!isValid && { cursor: "not-allowed" }}
			>
				{buttonOneName}
			</Button>
			<Button
				type="button"
				onClick={onButtonTwoClick}
				style={{
					height: "50px",
					width: "91px",
					backgroundColor: "inherit",
					color: "#7152F3",
					borderRadius: "15px",
				}}
			>
				{buttonTwoName}
			</Button>
		</Box>
	);
};
