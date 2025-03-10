export const errorMessages = {
	//! Personal Information Error Messages
	first_name_required: "Please Enter Your First Name",
	minimum_three_characters: "Minimum 3 characters required",
	last_name_required: "Please Enter Your Last Name",
	email_required: "Please Enter Your Email",
	email_validation: "Must be a Valid Email, Example: user@example.com",
	mobile_number_required: "Please Enter Your Mobile Number",
	mobile_number_validation: "Mobile number must be a valid 10-digit number, Example: 1234567890",
	dob_required: "Please Enter Your Date of Birth",
	dob_validation: "You must be at least 18 years old",
	no_extra_spaces: "No extra spaces allowed, Remove extra spaces...",

	//! Address Error Messages
	address_line1_required: "Please Enter Address Line 1",
	minimum_five_characters: "Address Line 1 must be at least 5 characters",
	city_required: "Please Enter City",
	country_required: "Please Select Country",
	state_required: "Please Select State/Province",
	zip_code_required: "Please Enter ZIP/Postal Code",
	zip_code_validation: "Please Enter a Valid ZIP Code",

	//! Account Details Error Messages
	username_required: "Username is required",
	username_taken: "Username is already taken", // To be used later on api check
	password_required: "Password is required",
	password_min_length: "Password must be at least 8 characters",
	password_uppercase: "Password must contain at least one uppercase letter",
	password_lowercase: "Password must contain at least one lowercase letter",
	password_number: "Password must contain at least one number",
	password_special_char: "Password must contain at least one special character",
	confirm_password_required: "Please confirm your password",
	confirm_password_match: "Passwords must match",
	security_question_required: "Security question is required",
	security_answer_required: "Security answer is required",

	//! Additional Information Error Messages.
	profilePicture_required: "Profile picture is required",
	profilePicture_invalid_file: "Invalid file type. Only JPG, JPEG and PNG are allowed.",
	profilePicture_file_size: "File size exceeds 1MB. Please upload a smaller image.",
	bio_required: "Bio cannot be longer than 250 characters.",
	bio_max_length: "Bio cannot be longer than 250 characters.",
	preferences_required: "Please select at least one preference.",

	//! Payment Info (only if 'Premium' is selected)
	creditCardNumber_required: "Credit Card Number is required.",
	creditCardNumber_invalid_format: "Credit Card Number must be 16 digits.",
	expirationDate_required: "Expiration Date is required.",
	expirationDate_invalid: "Expiration date must be in the future.",
	cvv_required: "CVV is required.",
	cvv_invalid_format: "CVV must be 3 or 4 digits.",

	referralCode_invalid: "Referral code must be alphanumeric and between 6 to 10 characters.",
	referralCode_required: "Referal Code is required",
};
