export function AdditionalInfoSvg(props) {
	const { isActive } = props;
	return (
		<>
			{isActive ? (
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12 2.25C9.37665 2.25 7.25 4.37665 7.25 7V7.0702C5.39935 7.42125 4 9.04721 4 11V17C4 19.2091 5.79086 21 8 21H16C18.2091 21 20 19.2091 20 17V11C20 9.04721 18.6006 7.42125 16.75 7.0702V7C16.75 4.37665 14.6234 2.25 12 2.25ZM15.25 7C15.25 5.20507 13.7949 3.75 12 3.75C10.2051 3.75 8.75 5.20507 8.75 7H15.25ZM14 14C14 15.1046 13.1046 16 12 16C10.8954 16 10 15.1046 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14Z"
						fill="#7152F3"
					/>
				</svg>
			) : (
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M16 8H8M16 8C18.2091 8 20 9.79086 20 12V18C20 20.2091 18.2091 22 16 22H8C5.79086 22 4 20.2091 4 18V12C4 9.79086 5.79086 8 8 8M16 8V6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6V8M14 15C14 16.1046 13.1046 17 12 17C10.8954 17 10 16.1046 10 15C10 13.8954 10.8954 13 12 13C13.1046 13 14 13.8954 14 15Z"
						stroke="#16151C"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			)}
		</>
	);
}
