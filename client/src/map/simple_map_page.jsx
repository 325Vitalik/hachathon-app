/*
 * Base Google Map example
 */
import React, { Component } from "react";

import GoogleMap from "google-map-react";
import MyGreatPlace from "./my_great_place.jsx";
import { config } from "../config.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getEventsFromDb } from '../AddEventPage/eventActions';

class SimpleMapPage extends Component {
	static defaultProps = {
		center: [49.065783, 33.410033],
		zoom: 13,
	};

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getEventsFromDb();
	}

	render() {
		return (
			<div className="myMap">
				<GoogleMap
					bootstrapURLKeys={{ key: config.apiKey }}
					center={this.props.center}
					zoom={this.props.zoom}
				>
					{this.props.events.map((item, i) => (
						<MyGreatPlace
							lat={item.location.coordinates[1]}
							lng={item.location.coordinates[0]}
							name={item.name}
							type={item.type}
							description={item.description}
							key={item._id}
						/>
					))}
				</GoogleMap>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getEventsFromDb,
        },
        dispatch
    );
}

function mapStateToProps(state) {
    return {
		events: state.events.eventsData
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleMapPage);