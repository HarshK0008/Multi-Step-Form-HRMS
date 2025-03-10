"use client";

import { Box, Button, FormControl, FormControlLabel, Checkbox, RadioGroup, Radio, colors } from "@mui/material";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { baseSchemaForAdditionalInfo, paymentSchema } from "@/constants/yupSchema's/schema";
import { FormInputField } from "@/components/formComp/FormInputField";
import { FormTextAreaField } from "@/components/formComp/FormTextAreaField";
import { ButtonGroup } from "@/components/formComp/ButtonGroup.js";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { additionalInfoState } from "@/lib/reduxStore/features/userSlice";
import Image from "next/image";

export default function AdditionalInformation() {
	const [isClient, setIsClient] = useState(false);
	const [isPremium, setIsPremium] = useState(false);
	const [isReferralChecked, setIsReferralChecked] = useState(false);
	const [schema, setSchema] = useState(baseSchemaForAdditionalInfo);

	const router = useRouter();

	const additionalInformation = useSelector((state) => state.userData.additionalInformation);
	const dispatch = useDispatch();

	const {
		register,
		formState: { errors, touchedFields, isValid },
		handleSubmit,
		setValue,
		watch,
		setError,
		clearErrors,
	} = useForm({
		defaultValues: {
			profilePicture: additionalInformation?.profilePicture || null,
			bio: additionalInformation?.bio || "",
			preferences: additionalInformation?.preferences || [],
			subscriptionPlan: additionalInformation?.subscriptionPlan || "Free",
			creditCardNumber: additionalInformation?.creditCardNumber || "",
			expirationDate: additionalInformation?.expirationDate || null,
			cvv: additionalInformation?.cvv || "",
			referralCode: additionalInformation?.referralCode || "",
		},
		resolver: yupResolver(schema),
	});

	useEffect(() => {
		setIsClient(true);

		const savedData = localStorage.getItem("additionalInformation");

		if (savedData) {
			const parsedData = JSON.parse(savedData);
			setValue("profilePicture", parsedData.profilePicture || null);
			setValue("bio", parsedData.bio || "");
			setValue("preferences", parsedData.preferences || []);
			setValue("subscriptionPlan", parsedData.subscriptionPlan || "Free");
			setValue("creditCardNumber", parsedData.creditCardNumber || "");
			setValue("expirationDate", parsedData.expirationDate || null);
			setValue("cvv", parsedData.cvv || "");
			setValue("referralCode", parsedData.referralCode || "");
		}
	}, [setValue]);

	useEffect(() => {
		const subscriptionPlan = watch("subscriptionPlan");

		if (subscriptionPlan === "Premium") {
			setSchema(baseSchemaForAdditionalInfo.concat(paymentSchema));
		} else {
			setSchema(baseSchemaForAdditionalInfo);
		}
	}, [watch("subscriptionPlan")]);

	const onSubmit = (data) => {
		if (isValid) {
			const isoDate = data.expirationDate
				? new Date(data.expirationDate).toISOString().split("T")[0].trim()
				: null;

			const formData = { ...data, profilePicture: true, expirationDate: isoDate };

			dispatch(additionalInfoState(formData));

			localStorage.setItem("additionalInformation", JSON.stringify(data));

			// alert("Form Submitted Successfully");
			router.push("/all-employees/add-new-employee/review-page");
		} else {
			console.log("Form has errors", errors);
		}
	};

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) {
		return null;
	}

	const handleSubscriptionChange = (event) => {
		const selectedPlan = event.target.value;
		setIsPremium(selectedPlan === "Premium");
		setValue("subscriptionPlan", selectedPlan);
		if (!isPremium) {
			clearErrors("creditCardNumber", "expirationDate", "cvv");
		}
	};

	const handleReferralCheckboxChange = () => {
		setIsReferralChecked(!isReferralChecked);
		if (!isReferralChecked) {
			clearErrors("referralCode");
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Box
				display="flex"
				flexDirection="column"
				height="100%"
				minHeight="70vh" //64
				justifyContent="flex-start"
				gap={"10px"}
			>
				{/* Profile Picture */}
				<Box position={"relative"}>
					<FormInputField
						register={register}
						name="profilePicture"
						type="file"
						accept="image/*"
						errors={errors}
						touched={touchedFields}
						sx={{
							width: "100px",
							height: "100px",
							pt: "20px",
							cursor: "pointer",
							padding: "8px 4px",
							backgroundColor: "#A2A1A833",

							"::file-selector-button": {
								opacity: 0,
							},
						}}
					/>
					<Image
						src={"/otherSvgs/camera.svg"}
						height={24}
						width={24}
						alt="."
						style={{ position: "absolute", top: "32%", left: "44px", cursor: "pointer" }}
					/>
				</Box>

				{/* Bio */}
				<FormTextAreaField
					register={register}
					name="bio"
					placeholder="Write a short bio..."
					errors={errors}
					touched={touchedFields}
					maxLength={250}
				/>

				<Box display="flex" flexDirection="column" gap="10px">
					<FormControl component="fieldset">
						<label>Preferences</label>
						<FormControlLabel
							control={<Checkbox {...register("preferences")} value="newsletter" />}
							label="Subscribe to Newsletter"
						/>
						<FormControlLabel
							control={<Checkbox {...register("preferences")} value="notifications" />}
							label="Receive Notifications"
						/>
					</FormControl>
				</Box>

				<Box display="flex" flexDirection="column" gap="10px">
					<FormControl component="fieldset">
						<label>Subscription Plan</label>
						<RadioGroup
							aria-label="subscriptionPlan"
							value={watch("subscriptionPlan")}
							onChange={handleSubscriptionChange}
						>
							<FormControlLabel value="Free" control={<Radio />} label="Free" />
							<FormControlLabel value="Standard" control={<Radio />} label="Standard" />
							<FormControlLabel value="Premium" control={<Radio />} label="Premium" />
						</RadioGroup>
					</FormControl>
				</Box>

				{/* Conditionally, updating the cc payment fields */}
				{isPremium && (
					<Box display="flex" flexDirection="column" gap="10px">
						<FormInputField
							register={register}
							name="creditCardNumber"
							type="text"
							placeholder="Credit Card Number"
							errors={errors}
							touched={touchedFields}
						/>
						<FormInputField
							register={register}
							name="expirationDate"
							type="date"
							errors={errors}
							touched={touchedFields}
							sx={{ color: "grey" }}
						/>
						<FormInputField
							register={register}
							name="cvv"
							type="number"
							placeholder="CVV"
							errors={errors}
							touched={touchedFields}
						/>
					</Box>
				)}

				<Box display="flex" flexDirection={"column"} gap="10px">
					<FormControlLabel
						control={<Checkbox checked={isReferralChecked} onChange={handleReferralCheckboxChange} />}
						label="I have a referral code"
					/>
					{isReferralChecked && (
						<FormInputField
							register={register}
							name="referralCode"
							type="text"
							placeholder="Referral Code"
							errors={errors}
							touched={touchedFields}
						/>
					)}
				</Box>
			</Box>
			<ButtonGroup
				isValid={isValid}
				onButtonTwoClick={() => {
					router.push("/all-employees/add-new-employee/account-details");
				}}
			/>
		</form>
	);
}
