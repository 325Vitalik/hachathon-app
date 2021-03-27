import React, { Component } from "react";
import shouldPureComponentUpdate from "react-pure-render/function";

import { greatPlaceStyle } from "./my_great_place_styles.js";

export default class MyGreatPlace extends Component {
	shouldComponentUpdate = shouldPureComponentUpdate;

	render() {
		return (
			<div className={this.props.type} style={greatPlaceStyle}>
				{this.props.text}
			</div>
		);
	}
}
