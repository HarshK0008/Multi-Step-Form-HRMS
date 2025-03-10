import { PersonalInfoSvg } from "@/components/svgComponents/addNewEmpNavbarSvg/PersonalInfoSvg";
import DashboardIcon from "./sidebarIconsComponents/DashboardIcon";
import { BriefcaseSvg } from "@/components/svgComponents/addNewEmpNavbarSvg/BriefcaseSvg";
import { AdditionalInfoSvg, NotepadSvg } from "@/components/svgComponents/addNewEmpNavbarSvg/AdditionalInfoSvg";
import { NotesOneSvg } from "@/components/svgComponents/addNewEmpNavbarSvg/NotesOneSvg";
import { Dashboard, DashboardSvg } from "@/components/svgComponents/sideBarSvg/DashboardSvg";
import { AllEmpSvg } from "@/components/svgComponents/sideBarSvg/AllEmpSvg";
import { AllDepartmentSvg } from "@/components/svgComponents/sideBarSvg/AllDepartmentSvg";
import { AttendanceSvg } from "@/components/svgComponents/sideBarSvg/AttendanceSvg";
import { PayrollSvg } from "@/components/svgComponents/sideBarSvg/PayrollSvg";
import { CandidateSvg } from "@/components/svgComponents/sideBarSvg/CandidateSvg";
import { LeavesSvg } from "@/components/svgComponents/sideBarSvg/LeavesSvg";
import { HolidaysSvg } from "@/components/svgComponents/sideBarSvg/HolidaysSvg";
import { SettingSvg } from "@/components/svgComponents/sideBarSvg/SettingSvg";
import { ReviewPageSvg } from "@/components/svgComponents/addNewEmpNavbarSvg/ReviewPageSvg";

export const sidebar_menu_items = [
	{
		item_name: "Dashboard",
		link: "/dashboard",
		icon: <DashboardSvg />,
	},
	{
		item_name: "All Employees",
		link: "/all-employees",
		icon: <AllEmpSvg />,
	},
	{
		item_name: "All Departments",
		link: "/all-departments",
		icon: <AllDepartmentSvg />,
	},
	{
		item_name: "Attendance",
		link: "/attendance",
		icon: <AttendanceSvg />,
	},
	{
		item_name: "Payroll",
		link: "/payroll",
		icon: <PayrollSvg />,
	},
	{
		item_name: "Jobs",
		link: "/jobs",
		icon: <BriefcaseSvg />,
	},
	{
		item_name: "Candidates",
		link: "/candidates",
		icon: <CandidateSvg />,
	},
	{
		item_name: "Leaves",
		link: "/leaves",
		icon: <LeavesSvg />,
	},
	{
		item_name: "Holidays",
		link: "/holidays",
		icon: <HolidaysSvg />,
	},
	{
		item_name: "Settings",
		link: "/settings",
		icon: <SettingSvg />,
	},
];

export const add_new_employee_page_nav_bar = [
	{
		item_name: "Personal Information ",
		link: "/all-employees/add-new-employee/personal-information",
		icon: <PersonalInfoSvg />,
	},
	{
		item_name: "Address Information ",
		link: "/all-employees/add-new-employee/address-information",
		icon: <BriefcaseSvg />,
	},
	{
		item_name: "Account Details ",
		link: "/all-employees/add-new-employee/account-details",
		icon: <NotesOneSvg />,
	},
	{
		item_name: "Additional Information ",
		link: "/all-employees/add-new-employee/additional-information",
		icon: <AdditionalInfoSvg />,
	},
	{
		item_name: "Review Page ",
		link: "/all-employees/add-new-employee/review-page",
		icon: <ReviewPageSvg />,
	},
];

export const countriesData = [
	{
		country: "India",
		states: [
			{
				name: "Andhra Pradesh",
				zipCodes: ["500001", "500002", "500003"],
			},
			{
				name: "Bihar",
				zipCodes: ["800001", "800002", "800003"],
			},
			{
				name: "Delhi",
				zipCodes: ["110001", "110002", "110003"],
			},
			{
				name: "Goa",
				zipCodes: ["403001", "403002", "403003"],
			},
			{
				name: "Haryana",
				zipCodes: ["122001", "122002", "122003"],
			},
			{
				name: "Karnataka",
				zipCodes: ["560001", "560002", "560003"],
			},
			{
				name: "Maharashtra",
				zipCodes: ["400001", "400002", "400003"],
			},
			{
				name: "Punjab",
				zipCodes: ["140001", "140002", "140003"],
			},
			{
				name: "Rajasthan",
				zipCodes: ["302001", "302002", "302003"],
			},
			{
				name: "Tamil Nadu",
				zipCodes: ["600001", "600002", "600003"],
			},
			{
				name: "Uttar Pradesh",
				zipCodes: ["201001", "201002", "201003"],
			},
			{
				name: "West Bengal",
				zipCodes: ["700001", "700002", "700003"],
			},
		],
	},
	{
		country: "USA",
		states: [
			{
				name: "California",
				zipCodes: ["90001", "90002", "90003"],
			},
			{
				name: "Texas",
				zipCodes: ["75001", "75002", "75003"],
			},
			{
				name: "Florida",
				zipCodes: ["33101", "33102", "33103"],
			},
			{
				name: "New York",
				zipCodes: ["10001", "10002", "10003"],
			},
			{
				name: "Illinois",
				zipCodes: ["60601", "60602", "60603"],
			},
			{
				name: "Pennsylvania",
				zipCodes: ["19101", "19102", "19103"],
			},
			{
				name: "Ohio",
				zipCodes: ["44101", "44102", "44103"],
			},
			{
				name: "Georgia",
				zipCodes: ["30301", "30302", "30303"],
			},
			{
				name: "North Carolina",
				zipCodes: ["28201", "28202", "28203"],
			},
			{
				name: "Michigan",
				zipCodes: ["48201", "48202", "48203"],
			},
		],
	},
	{
		country: "Germany",
		states: [
			{
				name: "Bavaria",
				zipCodes: ["80331", "80333", "80335"],
			},
			{
				name: "Berlin",
				zipCodes: ["10115", "10117", "10119"],
			},
			{
				name: "Hamburg",
				zipCodes: ["20095", "20097", "20099"],
			},
			{
				name: "Hessen",
				zipCodes: ["60311", "60313", "60314"],
			},
			{
				name: "North Rhine-Westphalia",
				zipCodes: ["40210", "40211", "40212"],
			},
			{
				name: "Baden-Württemberg",
				zipCodes: ["70173", "70174", "70176"],
			},
			{
				name: "Saxony",
				zipCodes: ["01067", "01069", "01097"],
			},
		],
	},
];

export const ReviewPageFields = {
	"Personal Information": [
		{
			firstName: "First Name",
			lastName: "Last Name",
			email: "Email Address",
			mobileNumber: "Mobile Number",
			dateOfBirth: "Date of Birth",
		},
		"personal-information",
	],
	"Address Information": [
		{
			addressLine1: "Address Line 1",
			addressLine2: "Address Line 2",
			city: "City",
			country: "Country",
			state: "State/Province",
			zipCode: "ZIP/Postal Code",
		},
		"address-information",
	],
	"Account Details": [
		{
			username: "Username",
			// password: "Password",
			securityQuestion: "Security Question",
			securityAnswer: "Security Answer",
		},
		"account-details",
	],
	"Additional Information": [
		{
			profilePicture: "Profile Picture",
			bio: "Bio",
			subscriptionPlan: "Subscription Plan",
			creditCardNumber: "Credit Card Number",
			expirationDate: "Expiry Date",
			cvv: "CVV",
			referralCode: "Referral Code",
		},
		"additional-information",
	],
};
