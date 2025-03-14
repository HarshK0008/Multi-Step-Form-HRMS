export function AttendanceSvg(props) {
	const { isActive } = props;
	return (
		<>
			{isActive ? (
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M8.75 2C8.75 1.58579 8.41421 1.25 8 1.25C7.58579 1.25 7.25 1.58579 7.25 2V3.5H7C4.79086 3.5 3 5.29086 3 7.5V8.25H21V7.5C21 5.29086 19.2091 3.5 17 3.5H16.75V2C16.75 1.58579 16.4142 1.25 16 1.25C15.5858 1.25 15.25 1.58579 15.25 2V3.5H8.75V2ZM21 9.75H3V18C3 20.2091 4.79086 22 7 22H17C19.2091 22 21 20.2091 21 18V9.75ZM15.5645 13.4939C15.8372 13.1822 15.8056 12.7083 15.4939 12.4356C15.1822 12.1628 14.7084 12.1944 14.4356 12.5061L11.5657 15.786C11.4776 15.8867 11.3258 15.9002 11.2214 15.8166L9.46855 14.4144C9.1451 14.1556 8.67313 14.208 8.41438 14.5315C8.15562 14.8549 8.20806 15.3269 8.53151 15.5857L10.2843 16.9879C11.0156 17.5729 12.0779 17.4786 12.6946 16.7738L15.5645 13.4939Z"
						fill="#7152F3"
					/>
				</svg>
			) : (
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M8 2V5"
						stroke="#16151C"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M16 2V5"
						stroke="#16151C"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M3 7.5C3 5.29086 4.79086 3.5 7 3.5H17C19.2091 3.5 21 5.29086 21 7.5V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V7.5Z"
						stroke="#16151C"
						strokeWidth="1.5"
					/>
					<path
						d="M9 15L10.7528 16.4023C11.1707 16.7366 11.7777 16.6826 12.1301 16.2799L15 13"
						stroke="#16151C"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path d="M3 9H21" stroke="#16151C" strokeWidth="1.5" strokeLinecap="round" />
				</svg>
			)}
		</>
	);
}
