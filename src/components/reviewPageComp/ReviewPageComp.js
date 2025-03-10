import { ReviewPageFields } from "@/constants/constants";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

export const ReviewPageComp = ({ heading, fieldsData, handleFunction }) => {
	const fieldsName = ReviewPageFields[heading];
	const objectEntry = Object.entries(fieldsName[0]);

	let data = [];

	/* Dynamic Addresses data Field, working on it, as receiving dynamic arrray fields from the address form
	Nearly achieved it too but its making some minor bugs for other fields, will work on it later.*/
	// if (fieldsData?.length > 0) {
	// 	for (let fieldData of fieldsData) {
	// 		console.log(fieldData);

	// 		objectEntry.map(([key, value], index) => {
	// 			data.push([[value], fieldData[key]]);
	// 		});
	// 	}
	// }

	objectEntry.map(([key, value], index) => {
		if (fieldsData["profilePicture"] === true) {
			if (value === "Profile Picture") {
				data.push(["Profile Picture", "Uploaded"]);
			} else {
				data.push([[value], fieldsData[key]]);
			}
		} else {
			data.push([[value], fieldsData[key]]);
		}
	});

	return (
		<Box border="1px solid #ccc" borderRadius="8px" padding="15px">
			<h2 style={{ fontWeight: "600", fontSize: "1.25rem", marginBottom: "12px" }}>{heading}</h2>
			{data?.map((value, index) => {
				return (
					<Box display={"flex"} flexDirection={"column"} gap={"8px"} key={value + index}>
						<p style={{ fontWeight: "300", fontSize: "1rem" }}>
							<strong>{value[0]}:</strong> {value[1]}
						</p>
					</Box>
				);
			})}
			<Button
				variant="contained"
				sx={{
					backgroundColor: "#7152F3",
					borderRadius: "12px",
					marginTop: "8px",
					fontWeight: "500",
					textTransform: "none",
				}}
				onClick={() => handleFunction(fieldsName[1])}
			>
				Edit {heading}
			</Button>
		</Box>
	);
};
