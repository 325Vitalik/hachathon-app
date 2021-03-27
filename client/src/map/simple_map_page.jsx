/*
 * Base Google Map example
 */
import React, { Component } from "react";
import shouldPureComponentUpdate from "react-pure-render/function";

import GoogleMap from "google-map-react";
import MyGreatPlace from "./my_great_place.jsx";

export default class SimpleMapPage extends Component {
	static defaultProps = {
		center: [59.938043, 30.337157],
		zoom: 9,
		greatPlaceCoords: { lat: 59.724465, lng: 30.080121 },
		placeCoordinate: [
			{
				lat: 59.955413,
				lng: 40.337844,
				text: "Car",
				type: "accident",
				description: "nothing",
			},
			{
				lat: 56.955413,
				lng: 10.337844,
				text: "Flood",
				type: "flood",
				description: "wood",
			},
			{
				lat: 18.955413,
				lng: 10.337844,
				text: "Fire",
				type: "fire",
				description: "House with 10people",
			},
		],
	};

	shouldComponentUpdate = shouldPureComponentUpdate;

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="myMap">
				<GoogleMap
					//	apiKey={"AIzaSyC5WoN00_PScWEK49sd4CcrVfRDmFHlRgA"}
					bootstrapURLKeys={{ key: "AIzaSyC5WoN00_PScWEK49sd4CcrVfRDmFHlRgA" }}
					center={this.props.center}
					zoom={this.props.zoom}
				>
					{this.props.placeCoordinate.map((item, i) => (
						<MyGreatPlace
							lat={item.lat}
							lng={item.lng}
							text={item.text}
							type={item.type} /* Kreyser Avrora */
							description={item.description}
							key={i}
						/>
					))}
				</GoogleMap>
			</div>
		);
	}
}

// export default class SimpleMapPage extends Component {
// 	static defaultProps = {
// 		center: [59.938043, 30.337157],
// 		zoom: 9,
// 		greatPlaceCoords: { lat: 59.724465, lng: 30.080121 },
// 	};

// 	shouldComponentUpdate = shouldPureComponentUpdate;

// 	constructor(props) {
// 		super(props);
// 	}

// 	render() {
// 		return (
// 			<div className="myMap">
// 				<GoogleMap
// 					//	apiKey={"AIzaSyC5WoN00_PScWEK49sd4CcrVfRDmFHlRgA"}
// 					bootstrapURLKeys={{ key: "AIzaSyC5WoN00_PScWEK49sd4CcrVfRDmFHlRgA" }}
// 					center={this.props.center}
// 					zoom={this.props.zoom}
// 				>

// 					<MyGreatPlace
// 						lat={59.955413}
// 						lng={30.337844}
// 						text={"A"} /* Kreyser Avrora */
// 					/>
// 					<MyGreatPlace
// 						{...this.props.greatPlaceCoords}
// 						text={"B"} /* road circle */
// 					/>
// 				</GoogleMap>
// 			</div>
// 		);
// 	}
// }
