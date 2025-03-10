"use client";

import { Box, Button, FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ButtonGroup } from "@/components/formComp/ButtonGroup";
import { FormInputField } from "@/components/formComp/FormInputField";
import { schemaForAccountDetails } from "@/constants/yupSchema's/schema";
import { useRouter } from "next/navigation";
import { CustomSelect, PlaceholderMenuItem } from "@/components/styledComp/StyledComp";
import { useDispatch, useSelector } from "react-redux";
import { accountDetailsState } from "@/lib/reduxStore/features/userSlice";

export default function AccountDetails() {
	const [isClient, setIsClient] = useState(false);

	const router = useRouter();

	const accountDetails = useSelector((state) => state.userData.accountDetails);
	const dispatch = useDispatch();

	const {
		register,
		control,
		handleSubmit,
		formState: { errors, touchedFields, isValid },
		setValue,
		watch,
	} = useForm({
		resolver: yupResolver(schemaForAccountDetails),
		defaultValues: {
			username: accountDetails?.username || "",
			password: accountDetails?.password || "",
			confirmPassword: accountDetails?.confirmPassword || "",
			securityQuestion: accountDetails?.securityQuestion || "",
			securityAnswer: accountDetails?.securityAnswer || "",
		},
	});

	useEffect(() => {
		setIsClient(true);

		const savedData = localStorage.getItem("accountDetails");

		if (savedData) {
			const parsedData = JSON.parse(savedData);
			setValue("username", parsedData.username || "");

			// Avoiding the password here to get loaded for security reasons from the lcoal storage

			// setValue("password", );
			// setValue("confirmPassword", "");
			setValue("securityQuestion", parsedData.securityQuestion || "");
			setValue("securityAnswer", parsedData.securityAnswer || "");
		}
	}, [setValue]);

	const onSubmit = (data) => {
		if (isValid) {
			dispatch(accountDetailsState(data));

			localStorage.setItem("accountDetails", JSON.stringify(data));

			// alert("Form Submitted Successfully");
			router.push("/all-employees/add-new-employee/additional-information");
		} else {
			console.log("Form has errors", errors);
		}
	};

	if (!isClient) {
		return null;
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Box
				display="flex"
				flexDirection="column"
				height="100%"
				minHeight="64vh"
				justifyContent="flex-start"
				gap={"10px"}
			>
				<Box display="flex" flexWrap="wrap" gap="30px">
					<FormInputField
						register={register}
						name="username"
						type="text"
						placeholder="Username"
						errors={errors}
						touched={touchedFields}
					/>
				</Box>

				<Box display="flex" flexWrap="wrap" gap="30px">
					<FormInputField
						register={register}
						name="password"
						type="password"
						placeholder="Password"
						errors={errors}
						touched={touchedFields}
					/>

					<FormInputField
						register={register}
						name="confirmPassword"
						type="password"
						placeholder="Confirm Password"
						errors={errors}
						touched={touchedFields}
					/>
				</Box>

				<Box display="flex" flexWrap="wrap" gap="30px">
					<Box width="48%">
						<FormControl fullWidth>
							<Controller
								control={control}
								name="securityQuestion"
								render={({ field }) => (
									<CustomSelect
										{...field}
										value={watch("securityQuestion") || ""}
										onChange={field.onChange}
										error={errors.securityQuestion}
										touched={touchedFields.securityQuestion}
									>
										<PlaceholderMenuItem value="" disabled>
											Select a question
										</PlaceholderMenuItem>
										<PlaceholderMenuItem value="Your first pet's name?">
											Your first pet's name?
										</PlaceholderMenuItem>
										<PlaceholderMenuItem value="What is your mother's maiden name?">
											What is your mother's maiden name?
										</PlaceholderMenuItem>
										<PlaceholderMenuItem value="What was the name of your primary school?">
											What was the name of your primary school?
										</PlaceholderMenuItem>
									</CustomSelect>
								)}
							/>
						</FormControl>
						{errors.securityQuestion && (
							<Box color="red" fontSize="12px" mt="4px">
								{errors.securityQuestion.message}
							</Box>
						)}
					</Box>

					<FormInputField
						register={register}
						name="securityAnswer"
						type="text"
						placeholder="Security Answer"
						errors={errors}
						touched={touchedFields}
					/>
				</Box>
			</Box>
			<ButtonGroup
				isValid={isValid}
				// Navigate to previous page, passing it directly here because of single function.
				onButtonTwoClick={() => {
					router.push("/all-employees/add-new-employee/address-information");
				}}
			/>
		</form>
	);
}
