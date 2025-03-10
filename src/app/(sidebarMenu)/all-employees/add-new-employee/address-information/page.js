"use client";

import { Box, Button, FormControl } from "@mui/material";
import { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaForAddress } from "@/constants/yupSchema's/schema";
import { FormInputFieldAddress } from "@/components/formComp/FormInputField";
import { CustomSelect, PlaceholderMenuItem } from "@/components/styledComp/StyledComp";
import { FormTextAreaFieldAddress } from "@/components/formComp/FormTextAreaField";
import { countriesData } from "@/constants/constants";
import { ButtonGroup } from "@/components/formComp/ButtonGroup";
import { useRouter } from "next/navigation";
import { addressInfoState } from "@/lib/reduxStore/features/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function AddressInformation() {
	const [isClient, setIsClient] = useState(false);
	const [statesPerAddress, setStatesPerAddress] = useState([]);

	const router = useRouter();
	const addressInformation = useSelector((state) => state.userData.addressInformation);
	const dispatch = useDispatch();

	const {
		control,
		handleSubmit,
		formState: { errors, touchedFields, isValid },
		setValue,
		watch,
		register,
		getValues,
		trigger,
	} = useForm({
		resolver: yupResolver(schemaForAddress),
		defaultValues: {
			addresses: addressInformation?.length
				? addressInformation
				: [{ addressLine1: "", addressLine2: "", city: "", country: "", state: "", zipCode: "" }],
		},
	});

	const { fields, append, remove } = useFieldArray({
		control,
		name: "addresses",
	});

	/* Loading stored data from the local storage., have a minor bug here an extra field of the last address
	sometimes getting loaded when data is getting loaded from the local storage but, on refreshing the page
	it goes away, and legit fields get displayed, will look into it.
	*/
	useEffect(() => {
		setIsClient(true);

		const savedAddressInfo = localStorage.getItem("addressInformation");

		if (savedAddressInfo) {
			const parsedData = JSON.parse(savedAddressInfo);

			parsedData.addresses.forEach((address, index) => {
				if (index === 0) {
					setValue(`addresses[${index}]`, address);
					fetchStates(address.country, index);
				} else {
					append(address);
					fetchStates(address.country, index);
				}
			});

			dispatch(addressInfoState(parsedData));
		}
	}, [dispatch, setValue, append]);

	useEffect(() => {
		if (addressInformation && addressInformation.length > 0) {
			addressInformation.forEach((address, index) => {
				if (index === 0) {
					setValue(`addresses[${index}]`, address);
				} else {
					append(address);
				}
			});
		}
	}, [addressInformation, append, setValue]);

	const fetchStates = async (selectedCountry, index) => {
		const countryData = countriesData.find((country) => country.country === selectedCountry);
		if (countryData) {
			setStatesPerAddress((prevStates) => {
				const newStates = [...prevStates];
				newStates[index] = countryData.states;
				return newStates;
			});
		} else {
			setStatesPerAddress((prevStates) => {
				const newStates = [...prevStates];
				newStates[index] = [];
				return newStates;
			});
		}
	};

	const handleCountryChange = (e, index) => {
		const selectedCountry = e.target.value;
		setValue(`addresses[${index}].country`, selectedCountry);
		setValue(`addresses[${index}].state`, "");
		fetchStates(selectedCountry, index);
		trigger(`addresses[${index}].country`);
	};

	const onSubmit = (data) => {
		if (isValid) {
			console.log("Form Data: ", data);
			localStorage.setItem("addressInformation", JSON.stringify(data));
			dispatch(addressInfoState(data));
			router.push("/all-employees/add-new-employee/account-details");
		} else {
			console.log("Form has errors", errors);
			alert("Please fill all the required fields correctly.");
		}
	};

	if (!isClient) {
		return null;
	}

	if (!fields || fields.length === 0) {
		return <div>Loading...</div>;
	}

	const getBorderColor = (fieldName, index) => {
		const fieldTouched = touchedFields?.addresses?.[index]?.[fieldName];
		const fieldError = errors?.addresses?.[index]?.[fieldName];
		const fieldValue = getValues(`addresses[${index}].${fieldName}`);

		if (fieldTouched && !fieldError && fieldValue) {
			return "green";
		} else if (fieldError) {
			return "red";
		} else {
			return "2px solid #a2a1a833";
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Box display="flex" flexDirection="column" gap="60px" minHeight="70vh" justifyContent="flex-start">
				{fields.map((item, index) => (
					<Box
						key={item.id}
						display="flex"
						flexDirection="column"
						gap="20px"
						padding="20px"
						border="1px solid #ccc"
						borderRadius="8px"
					>
						<Box display="flex" gap="30px">
							<FormInputFieldAddress
								register={register}
								name={`addresses[${index}].addressLine1`}
								type="text"
								placeholder="Address Line 1"
								errors={errors}
								touched={touchedFields}
								width="48%"
							/>

							<FormTextAreaFieldAddress
								register={register}
								name={`addresses[${index}].addressLine2`}
								type="text"
								placeholder="Address Line 2"
								errors={errors}
								touched={touchedFields}
								width="48%"
							/>
						</Box>

						<Box display="flex" gap="30px">
							<Box display="flex" flexDirection="column" gap="6px" width="48%">
								<FormControl>
									<CustomSelect
										{...register(`addresses[${index}].country`)}
										value={watch(`addresses[${index}].country`) || ""}
										onChange={(e) => handleCountryChange(e, index)}
										style={{ borderColor: getBorderColor("country", index) }}
									>
										<PlaceholderMenuItem value="" disabled>
											Country
										</PlaceholderMenuItem>
										<PlaceholderMenuItem value="Germany">Germany</PlaceholderMenuItem>
										<PlaceholderMenuItem value="India">India</PlaceholderMenuItem>
										<PlaceholderMenuItem value="USA">USA</PlaceholderMenuItem>
									</CustomSelect>
								</FormControl>
								<Box minHeight="20px">
									{errors?.addresses?.[index]?.country && (
										<Box color="red" fontSize="12px">
											{errors?.addresses?.[index]?.country?.message}
										</Box>
									)}
								</Box>
							</Box>

							<Box display="flex" flexDirection="column" gap="6px" width="48%">
								<FormControl>
									<CustomSelect
										{...register(`addresses[${index}].state`)}
										style={{ borderColor: getBorderColor("state", index) }}
									>
										<PlaceholderMenuItem value="" disabled>
											State/Provinces
										</PlaceholderMenuItem>
										{statesPerAddress[index]?.map((state, i) => (
											<PlaceholderMenuItem key={i} value={state.name}>
												{state.name}
											</PlaceholderMenuItem>
										))}
									</CustomSelect>
								</FormControl>
								<Box minHeight="20px">
									{errors?.addresses?.[index]?.state && (
										<Box color="red" fontSize="12px">
											{errors?.addresses?.[index]?.state?.message}
										</Box>
									)}
								</Box>
							</Box>
						</Box>

						{/* City and ZIP */}
						<Box display="flex" gap="30px">
							<FormInputFieldAddress
								register={register}
								name={`addresses[${index}].city`}
								type="text"
								placeholder="City"
								errors={errors}
								touched={touchedFields}
								width="48%"
							/>
							<FormInputFieldAddress
								register={register}
								name={`addresses[${index}].zipCode`}
								type="text"
								placeholder="ZIP/Postal Code"
								errors={errors}
								touched={touchedFields}
								sx={errors?.addresses?.[index]?.zipCode && { border: "2px solid red" }}
								width="48%"
							/>
						</Box>

						{/* Remove and Add Address Buttons */}
						<Box display="flex" justifyContent="space-between">
							<Button
								variant="outlined"
								onClick={() => {
									if (fields.length === 1) {
									} else {
										remove(index);
									}
								}}
								style={{
									height: "50px",
									width: "fit-content",
									backgroundColor: "inherit",
									color: "#7152F3",
									borderRadius: "15px",
									border: "1px solid #7152F3",
								}}
							>
								Remove Address
							</Button>
							<Button
								variant="contained"
								onClick={() => {
									if (fields.length < 5) {
										append({
											addressLine1: "",
											addressLine2: "",
											city: "",
											country: "",
											state: "",
											zipCode: "",
										});
									} else {
										alert("Limit to add addresses reached...");
									}
								}}
								style={{
									height: "50px",
									width: "fit-content",
									backgroundColor: "#7152F3",
									color: "white",
									borderRadius: "15px",
								}}
							>
								Add Address
							</Button>
						</Box>
					</Box>
				))}

				<ButtonGroup
					isValid={isValid}
					onButtonTwoClick={() => {
						router.push("/all-employees/add-new-employee/personal-information");
					}}
				/>
			</Box>
		</form>
	);
}
