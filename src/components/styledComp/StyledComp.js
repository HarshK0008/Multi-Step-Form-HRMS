"use client";

import { styled } from "@mui/system";
import { TextareaAutosize } from "@mui/material";

// InputElement Component
export const InputElement = styled("input")(
	() => `
    height: 38px;
    width: 95%;
    max-width: 510px
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    padding: 8px 12px;
    border-radius: 8px;
    color: black;
    background: #fff;
    border: 2px solid #A2A1A833;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    outline: none;

    &:hover {
    border-color: #7152F3;
    }
`
);

export const TextArea = styled(TextareaAutosize)(
	() => `
    height: 72px;
    min-height: 38px;
    max-height: 200px;
    width: 95%;
    min-width: 400px;
    max-width: 470px;
    font-weight: 300;
    font-size: 16px;
    line-height: 36px;
    padding: 8px 12px;
    border-radius: 8px;
    color: black; // Match color of InputElement
    background: #fff;
    border: 2px solid #A2A1A833;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    outline: none;
    font-family: lexend;

    &:hover {
        border-color: #7152F3;
    }

    `
);

export const ErrorMessage = styled("p")(
	() => `
	color: red;
	font-size: 12px;
	margin: 0;
	padding-left: 5px;
    `
);

export const CustomSelect = styled("select")(({ error, touched }) => ({
	height: "56px",
	width: "100%",
	maxWidth: "510px",
	fontWeight: 300,
	fontSize: "16px",
	lineHeight: "24px",
	padding: "8px 12px 8px 12px",
	borderRadius: "8px",
	color: "grey",
	background: "#fff",
	border: error ? "2px solid red" : !touched ? "2px solid #a2a1a833" : "2px solid green",
	boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
	outline: "none",

	"&:focus": {
		borderColor: "#7152f3",
	},

	"&:hover": {
		borderColor: "#7152f3",
		cursor: "pointer",
	},

	"&:disabled": {
		backgroundColor: "#f0f0f0",
		color: "#A2A1A8",
		cursor: "not-allowed",
	},
}));

// Placeholder MenuItem
export const PlaceholderMenuItem = styled("option")({
	color: "black",
	backgroundColor: "#f0f0f0",
	fontSize: "14px",
	padding: "10px",
	fontWeight: "300",
	border: "none",
});

export const InputFieldRadio = styled("input")({
	height: "30px",
	// width: "190px",
	border: "none",
	borderRadius: "15px",
	// margin: "0px 10px 0px 10px",
	padding: "10px 10px",
});

export const InputLabelField = styled("label")({});
