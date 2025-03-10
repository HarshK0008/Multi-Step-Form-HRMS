import * as yup from "yup";
import { calculateAge } from "./validationFunctions";
import { errorMessages } from "./errorMessages";

export const schemaForPersonalInfo = yup.object().shape({
	firstName: yup
		.string()
		.required(errorMessages.first_name_required)
		.min(3, errorMessages.minimum_three_characters)
		.matches(/^(?!\s)(?!.*\s$)(?!.*\s{2,}).*$/, errorMessages.no_extra_spaces),
	lastName: yup
		.string()
		.required(errorMessages.last_name_required)
		.min(3, errorMessages.minimum_three_characters)
		.matches(/^(?!\s)(?!.*\s$)(?!.*\s{2,}).*$/, errorMessages.no_extra_spaces),
	email: yup
		.string()
		.required(errorMessages.email_required)
		.email(errorMessages.email_validation)
		.matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, errorMessages.email_validation),
	mobileNumber: yup
		.string()
		.required(errorMessages.mobile_number_required)
		.matches(/^\d{10}$/, errorMessages.mobile_number_validation),
	dateOfBirth: yup
		.date()
		.required(errorMessages.dob_required)
		.test("is-18-or-older", errorMessages.dob_validation, (value) => {
			return calculateAge(value) >= 18;
		}),
});

export const schemaForAddress = yup.object().shape({
	addresses: yup.array().of(
		yup.object().shape({
			addressLine1: yup
				.string()
				.required(errorMessages.address_line1_required)
				.min(5, errorMessages.minimum_five_characters)
				.matches(/^(?!\s)(?!.*\s$)(?!.*\s{2,}).*$/, errorMessages.no_extra_spaces),
			addressLine2: yup
				.string()
				.optional()
				.matches(/^(?!\s)(?!.*\s$)(?!.*\s{2,}).*$/, errorMessages.no_extra_spaces), // Optional, but if provided, no extra spaces
			city: yup
				.string()
				.required(errorMessages.city_required)
				.matches(/^(?!\s)(?!.*\s$)(?!.*\s{2,}).*$/, errorMessages.no_extra_spaces),
			country: yup.string().required(errorMessages.country_required),
			state: yup.string().required(errorMessages.state_required),
			zipCode: yup
				.string()
				.required(errorMessages.zip_code_required)
				.matches(/^\d{6}(-\d{4})?$/, errorMessages.zip_code_validation),
		})
	),
});

export const schemaForAccountDetails = yup.object().shape({
	username: yup
		.string()
		.required(errorMessages.username_required) // Using error message for required field
		.test("username-availability", errorMessages.username_taken, async (value) => {
			// will simulate API call here, to check if the username is taken already.
			// const available = await checkUsernameAvailability(value);
			// return available;
			return true; // For now, returning true. 'placeholder'
		}),
	password: yup
		.string()
		.required(errorMessages.password_required)
		.min(8, errorMessages.password_min_length)
		.matches(/[A-Z]/, errorMessages.password_uppercase)
		.matches(/[a-z]/, errorMessages.password_lowercase)
		.matches(/[0-9]/, errorMessages.password_number)
		.matches(/[\W_]/, errorMessages.password_special_char),
	confirmPassword: yup
		.string()
		.required(errorMessages.confirm_password_required)
		.oneOf([yup.ref("password"), null], errorMessages.confirm_password_match),
	securityQuestion: yup.string().required(errorMessages.security_question_required),
	securityAnswer: yup.string().required(errorMessages.security_answer_required),
});

export const baseSchemaForAdditionalInfo = yup.object({
	profilePicture: yup
		.mixed()
		.test("required", errorMessages.profilePicture_required, (value) => {
			return value && value.length > 0; // Ensure a file is selected
		})
		.test("fileSize", errorMessages.profilePicture_file_size, (value) => {
			return value && value[0]?.size <= 200000; // Max 200kb for now.
		})
		.test("fileType", errorMessages.profilePicture_invalid_file, (value) => {
			return value && ["image/jpg", "image/jpeg", "image/png"].includes(value[0]?.type);
		}),

	bio: yup.string().max(250, errorMessages.bio_max_length).required(errorMessages.bio_required),

	preferences: yup.array().of(yup.string()),

	subscriptionPlan: yup.string(),
});

export const paymentSchema = yup.object({
	creditCardNumber: yup
		.string()
		.matches(/^\d{16}$/, errorMessages.creditCardNumber_invalid_format)
		.required(errorMessages.creditCardNumber_required),
	expirationDate: yup
		.date()
		.min(new Date(), errorMessages.expirationDate_invalid)
		.required(errorMessages.expirationDate_required),
	cvv: yup
		.string()
		.matches(/^\d{3,4}$/, errorMessages.cvv_invalid_format)
		.required(errorMessages.cvv_required),
});

export const referralCodeSchema = yup.object({
	referralCode: yup
		.string()
		.matches(/^[a-zA-Z0-9]{6,}$/, errorMessages.referralCode_invalid)
		.required(),
});
