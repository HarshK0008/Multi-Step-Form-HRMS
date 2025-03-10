export function BriefcaseSvg(props) {
	const { isActive } = props;
	return (
		<>
			{isActive ? (
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M2.70422 12.5396C2.36948 12.4066 2 12.6494 2 13.0096V18.3749C2 20.5841 3.79086 22.3749 6 22.3749H18C20.2091 22.3749 22 20.5841 22 18.3749V13.0097C22 12.6495 21.6305 12.4067 21.2958 12.5397C20.029 13.0431 18.4079 13.5626 16.5036 13.9086C15.7992 14.0366 15.2884 14.6419 14.9597 15.2779C14.461 16.2428 13.454 16.9023 12.293 16.9023H11.7069C10.5459 16.9023 9.53891 16.2428 9.0402 15.2779C8.71148 14.6419 8.20068 14.0366 7.4963 13.9086C5.59207 13.5626 3.97099 13.0431 2.70422 12.5396Z"
						fill="#7152F3"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M18 6.375H6C3.79086 6.375 2 8.16586 2 10.375C2 10.5921 2.10742 10.7935 2.29492 10.9029C3.14278 11.3976 5.7673 12.7693 9.49817 13.2321V13.6891C9.49817 14.7937 10.3936 15.6891 11.4982 15.6891H12.5016C13.6062 15.6891 14.5016 14.7937 14.5016 13.6891V13.2322C18.2326 12.7694 20.8572 11.3976 21.7051 10.9029C21.8926 10.7935 22 10.5921 22 10.375C22 8.16586 20.2091 6.375 18 6.375ZM11.0751 12.4694C10.9647 12.4694 10.8751 12.5589 10.8751 12.6694V13.6582C10.8751 14.1 11.2333 14.4582 11.6751 14.4582H12.3248C12.7666 14.4582 13.1248 14.1 13.1248 13.6582V12.6694C13.1248 12.5589 13.0352 12.4694 12.9248 12.4694H11.0751Z"
						fill="#7152F3"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M10.9999 3.125C9.75724 3.125 8.74988 4.13236 8.74988 5.375V6.375C8.74988 6.78921 8.41409 7.125 7.99988 7.125C7.58566 7.125 7.24988 6.78921 7.24988 6.375V5.375C7.24988 3.30393 8.92881 1.625 10.9999 1.625H12.9999C15.0709 1.625 16.7499 3.30393 16.7499 5.375V6.375C16.7499 6.78921 16.4141 7.125 15.9999 7.125C15.5857 7.125 15.2499 6.78921 15.2499 6.375V5.375C15.2499 4.13236 14.2425 3.125 12.9999 3.125H10.9999Z"
						fill="#7152F3"
					/>
				</svg>
			) : (
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M8 6V5C8 3.34315 9.34315 2 11 2H13C14.6569 2 16 3.34315 16 5V6M2 10.3475C2 10.3475 5.11804 12.4244 9.97767 12.9109M22 10.3475C22 10.3475 18.882 12.4244 14.0223 12.9109M6 22H18C20.2091 22 22 20.2091 22 18V10C22 7.79086 20.2091 6 18 6H6C3.79086 6 2 7.79086 2 10V18C2 20.2091 3.79086 22 6 22Z"
						stroke="#16151C"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
					<path
						d="M14 12.1602V13.1602C14 13.1702 14 13.1702 14 13.1802C14 14.2702 13.99 15.1602 12 15.1602C10.02 15.1602 10 14.2802 10 13.1902V12.1602C10 11.1602 10 11.1602 11 11.1602H13C14 11.1602 14 11.1602 14 12.1602Z"
						stroke="#16151C"
						strokeWidth="1.5"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			)}
		</>
	);
}
