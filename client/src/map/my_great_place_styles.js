const K_SIZE = 40;

const greatPlaceStyle = {
	// initially any map object has left top corner at lat lng coordinates
	// it's on you to set object origin to 0,0 coordinates
	position: "absolute",
	width: 60,
	height: 40,
	left: 40 / 2,
	top: -40 / 2,

	// border: "5px solid #f44336",
	// backgroundColor: "white",
	borderRadius: K_SIZE,
	textAlign: "center",
	fontSize: 9,
	fontWeight: "bold",
	cursor: "pointer",
};

const greatPlaceStyleHover = {
	...greatPlaceStyle,
	border: "5px solid #3f51b5",
	color: "#f44336",
};

export { greatPlaceStyle, greatPlaceStyleHover, K_SIZE };
