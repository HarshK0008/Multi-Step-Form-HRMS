import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	personalInformation: [
		// {
		// user_id: "",
		// firstName: "",
		// lastName: "",
		// mobileNumber: "",
		// emailAddress: "",
		// dateOfBirth: "",
		// },
	],
	addressInformation: [],
	accountDetails: [],
	additionalInformation: [],
};

const userSlice = createSlice({
	name: "userData",
	initialState,
	reducers: {
		personalInfoState: (state, action) => {
			state.personalInformation = action.payload;
		},

		resetPersonalInfo: (state) => {
			state.personalInformation = initialState.personalInformation;
		},

		addressInfoState: (state, action) => {
			state.addressInformation = action.payload;
		},

		resetAddressInfo: (state) => {
			state.addressInformation = initialState.addressInformation;
		},

		accountDetailsState: (state, action) => {
			state.accountDetails = action.payload;
		},

		resetAccountDetails: (state) => {
			state.accountDetails = initialState.accountDetails;
		},

		additionalInfoState: (state, action) => {
			state.additionalInformation = action.payload;
		},

		resetAdditionalInfo: (state) => {
			state.additionalInformation = initialState.additionalInformation;
		},
	},
});

export const {
	personalInfoState,
	resetPersonalInfo,
	addressInfoState,
	resetAddressInfo,
	accountDetailsState,
	resetAccountDetails,
	additionalInfoState,
	resetAdditionalInfo,
} = userSlice.actions;

export default userSlice.reducer;
