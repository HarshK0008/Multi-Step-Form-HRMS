"use client";

import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ButtonGroup } from "@/components/formComp/ButtonGroup";
import { schemaForPersonalInfo } from "@/constants/yupSchema's/schema";
import { FormInputField } from "@/components/formComp/FormInputField";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { personalInfoState, resetPersonalInfo } from "@/lib/reduxStore/features/userSlice";

export default function PersonalInformation() {
	const [isClient, setIsClient] = useState(false);
	const personalInformation = useSelector((state) => state.userData.personalInformation);
	const dispatch = useDispatch();
	// console.log(personalInformation);

	const {
		register,
		formState: { errors, touchedFields, isValid },
		handleSubmit,
		setValue,
	} = useForm({
		defaultValues: {
			firstName: personalInformation?.firstName || "",
			lastName: personalInformation?.lastName || "",
			email: personalInformation?.email || "",
			mobileNumber: personalInformation?.mobileNumber || "",
			dateOfBirth: personalInformation?.dateOfBirth || null,
		},
		resolver: yupResolver(schemaForPersonalInfo),
	});

	const router = useRouter();

	const onSubmit = (data) => {
		if (isValid) {
			//Split the time here for the databse integratrion of the time in the required format for db.
			const isoDate = data.dateOfBirth ? new Date(data.dateOfBirth).toISOString().split("T")[0].trim() : null;

			const formData = {
				...data,
				dateOfBirth: isoDate,
			};

			localStorage.setItem("personalInformation", JSON.stringify(formData));
			dispatch(personalInfoState(formData));
			router.push("/all-employees/add-new-employee/address-information");
		} else {
			console.log("Form has errors", errors);
			alert("Please fill all the required fields correctly.");
		}
	};

	//^ Cancel button function
	const onAbort = () => {
		localStorage.clear();
		dispatch(resetPersonalInfo());
		router.push(`/all-employees`);
	};

	useEffect(() => {
		setIsClient(true);

		const savedPersonalInfo = localStorage.getItem("personalInformation");

		if (savedPersonalInfo) {
			const parsedData = JSON.parse(savedPersonalInfo);

			setValue("firstName", parsedData.firstName);
			setValue("lastName", parsedData.lastName);
			setValue("email", parsedData.email);
			setValue("mobileNumber", parsedData.mobileNumber);
			setValue("dateOfBirth", parsedData.dateOfBirth);

			dispatch(personalInfoState(parsedData));
		}
	}, [dispatch, setValue]);

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
						name="firstName"
						type="text"
						placeholder="First Name"
						errors={errors}
						touched={touchedFields}
					/>

					<FormInputField
						register={register}
						name="lastName"
						type="text"
						placeholder="Last Name"
						errors={errors}
						touched={touchedFields}
					/>
				</Box>

				<Box display="flex" flexWrap="wrap" gap="30px">
					<FormInputField
						register={register}
						name="mobileNumber"
						type="text"
						placeholder="Mobile Number"
						errors={errors}
						touched={touchedFields}
					/>
					<FormInputField
						register={register}
						name="email"
						type="text"
						placeholder="Email Address"
						errors={errors}
						touched={touchedFields}
					/>
				</Box>

				<Box display="flex" flexWrap="wrap" gap="30px">
					<FormInputField
						register={register}
						name="dateOfBirth"
						type="date"
						errors={errors}
						touched={touchedFields}
						sx={{ color: "grey" }}
					/>
				</Box>
			</Box>
			<ButtonGroup buttonTwoName="Cancel" onButtonTwoClick={onAbort} isValid={isValid} />
		</form>
	);
}
