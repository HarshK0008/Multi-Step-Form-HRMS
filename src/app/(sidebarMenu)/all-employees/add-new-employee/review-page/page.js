"use client";

import { Box, Button, CircularProgress, Backdrop } from "@mui/material";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { ButtonGroup } from "@/components/formComp/ButtonGroup";
import {
	resetPersonalInfo,
	resetAddressInfo,
	resetAccountDetails,
	resetAdditionalInfo,
} from "@/lib/reduxStore/features/userSlice";
import { useState } from "react";
import { ReviewPageComp } from "@/components/reviewPageComp/ReviewPageComp";

export default function ReviewAndSubmit() {
	const router = useRouter();
	const dispatch = useDispatch();

	const personalInformation = useSelector((state) => state.userData.personalInformation);
	const addressInformation = useSelector((state) => state.userData.addressInformation);
	const accountDetails = useSelector((state) => state.userData.accountDetails);
	const additionalInformation = useSelector((state) => state.userData.additionalInformation);

	const [loading, setLoading] = useState(false);

	const handleEditClick = (step) => {
		router.push(`/all-employees/add-new-employee/${step}`);
	};

	const handleSubmit = () => {
		setLoading(true);
		setTimeout(() => {
			localStorage.clear();
			dispatch(resetAddressInfo());
			dispatch(resetAccountDetails());
			dispatch(resetAdditionalInfo());
			dispatch(resetPersonalInfo());
			// alert("Form submitted successfully!");
			setLoading(false);
			// router.push(`/all-employees`);
		}, 4000);
	};

	const onCancel = () => {
		localStorage.clear();
		dispatch(resetAddressInfo());
		dispatch(resetAccountDetails());
		dispatch(resetAdditionalInfo());
		dispatch(resetPersonalInfo());
		router.push(`/all-employees`);
	};

	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="flex-start"
			minHeight="70vh"
			gap="30px"
			position={"relative"}
		>
			{/* Personal-Information */}
			<ReviewPageComp
				heading={"Personal Information"}
				fieldsData={personalInformation}
				handleFunction={handleEditClick}
			/>

			{/* <ReviewPageComp
				heading={"Address Information"}
				fieldsData={addressInformation?.addresses}
				handleFunction={handleEditClick}
			/> */}

			<Box border="1px solid #ccc" borderRadius="8px" padding="15px">
				<h2 style={{ fontWeight: "600", fontSize: "1.25rem", marginBottom: "12px" }}>Address Information</h2>
				{addressInformation?.addresses?.map((address, index) => (
					<Box key={index} display={"flex"} flexDirection={"column"} gap={"8px"}>
						<p style={{ fontWeight: "300", fontSize: "1rem" }}>
							<strong>Address Line 1:</strong> {address.addressLine1}
						</p>
						<p style={{ fontWeight: "300", fontSize: "1rem" }}>
							<strong>Address Line 2:</strong> {address.addressLine2}
						</p>
						<p style={{ fontWeight: "300", fontSize: "1rem" }}>
							<strong>City:</strong> {address.city}
						</p>
						<p style={{ fontWeight: "300", fontSize: "1rem" }}>
							<strong>Country:</strong> {address.country}
						</p>
						<p style={{ fontWeight: "300", fontSize: "1rem" }}>
							<strong>State/Province:</strong> {address.state}
						</p>
						<p style={{ fontWeight: "300", fontSize: "1rem" }}>
							<strong>ZIP/Postal Code:</strong> {address.zipCode}
						</p>
						<hr />
					</Box>
				))}
				<Button
					variant="contained"
					sx={{
						backgroundColor: "#7152F3",
						borderRadius: "12px",
						marginTop: "8px",
						fontWeight: "500",
						textTransform: "none",
					}}
					onClick={() => handleEditClick("address-information")}
				>
					Edit Address Information
				</Button>
			</Box>

			{/* Account Details */}
			<ReviewPageComp heading={"Account Details"} fieldsData={accountDetails} handleFunction={handleEditClick} />

			<ReviewPageComp
				heading={"Additional Information"}
				fieldsData={additionalInformation}
				handleFunction={handleEditClick}
			/>

			{/* <Box border="1px solid #ccc" borderRadius="8px" padding="15px">
				<h2 style={{ fontWeight: "600", fontSize: "1.25rem", marginBottom: "12px" }}>Additional Information</h2>
				<Box display={"flex"} flexDirection={"column"} gap={"8px"}>
					<p style={{ fontWeight: "300", fontSize: "1rem" }}>
						<strong>Profile Picture:</strong>{" "}
						{additionalInformation?.profilePicture === true ? "Uploaded" : "Not Provided"}
					</p>
					<p style={{ fontWeight: "300", fontSize: "1rem" }}>
						<strong>Bio:</strong> {additionalInformation?.bio}
					</p>
					<p style={{ fontWeight: "300", fontSize: "1rem" }}>
						<strong>Subscription Plan:</strong> {additionalInformation?.subscriptionPlan}
					</p>
					{additionalInformation?.subscriptionPlan === "Premium" && (
						<>
							<p style={{ fontWeight: "300", fontSize: "1rem" }}>
								<strong>Credit Card Number:</strong> {additionalInformation?.creditCardNumber}
							</p>
							<p style={{ fontWeight: "300", fontSize: "1rem" }}>
								<strong>Expiry Date:</strong> {additionalInformation?.expirationDate}
							</p>
							<p style={{ fontWeight: "300", fontSize: "1rem" }}>
								<strong>CVV:</strong> {additionalInformation?.cvv}
							</p>
						</>
					)}
					<p style={{ fontWeight: "300", fontSize: "1rem" }}>
						<strong>Referral Code:</strong> {additionalInformation?.referralCode}
					</p>
				</Box>
				<Button
					variant="contained"
					sx={{
						backgroundColor: "#7152F3",
						borderRadius: "12px",
						marginTop: "8px",
						fontWeight: "500",
						textTransform: "none",
					}}
					onClick={() => handleEditClick("additional-information")}
				>
					Edit Additional Information
				</Button>
			</Box> */}

			{loading ? (
				<Backdrop
					open={loading}
					sx={{
						width: "inherit",
						height: "inherit",
						position: "absolute",
						top: "0px",
						zIndex: 1,
						backdropFilter: "blur(2px)", // Apply blur effect to background
						cursor: "wait",
					}}
				>
					<CircularProgress color="primary" />
				</Backdrop>
			) : (
				<ButtonGroup
					buttonOneName="Submit"
					isValid={true} //removing the "not-allowed cursor"
					onButtonOneClick={handleSubmit}
					buttonTwoName="Cancel"
					onButtonTwoClick={onCancel}
				/>
			)}
		</Box>
	);
}
