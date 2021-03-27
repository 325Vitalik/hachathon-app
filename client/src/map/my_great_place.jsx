import React, { Component } from "react";
import shouldPureComponentUpdate from "react-pure-render/function";
import { Popup } from "semantic-ui-react";
import { greatPlaceStyle } from "./my_great_place_styles.js";

export default class MyGreatPlace extends Component {
	shouldComponentUpdate = shouldPureComponentUpdate;

	render() {
		return (
			<Popup
				trigger={
					<div className={this.props.type} style={greatPlaceStyle}>
						{this.props.type}
					</div>
				}
			>
				<Popup.Header className="descriptionTittle">{this.props.name}</Popup.Header>
				<Popup.Content>
					<div className="description">{this.props.description}</div>
				</Popup.Content>
			</Popup>
		);
	}
}
