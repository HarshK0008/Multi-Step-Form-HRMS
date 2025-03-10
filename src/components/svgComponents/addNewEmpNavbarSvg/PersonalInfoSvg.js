export function PersonalInfoSvg(props) {
	const { isActive } = props;
	return (
		<>
			{isActive ? (
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11ZM12 21C15.866 21 19 19.2091 19 17C19 14.7909 15.866 13 12 13C8.13401 13 5 14.7909 5 17C5 19.2091 8.13401 21 12 21Z"
						fill={isActive && "#7152F3"}
					/>
				</svg>
			) : (
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<ellipse
						cx="12"
						cy="17.5"
						rx="7"
						ry="3.5"
						stroke="#16151C"
						strokeWidth="1.5"
						strokeLinejoin="round"
					/>
					<circle cx="12" cy="7" r="4" stroke="#16151C" strokeWidth="1.5" strokeLinejoin="round" />
				</svg>
			)}
		</>
	);
}
