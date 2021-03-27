import React, { Component } from 'react';
import { Divider, Popup } from 'semantic-ui-react';
import { greatPlaceStyle } from './my_great_place_styles.js';

export default class MyGreatPlace extends Component {
    getDate(date) {
        const dateObj = new Date(date);

        return `${dateObj.getFullYear()}-${
            dateObj.getMonth() + 1
        }-${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
    }

	getType(type) {
		switch (type) {
            case 'flod':
                return 'Повінь';
            case 'fire':
                return 'Пожежа';
            case 'looting':
                return 'Пограбування / мародерство';
            case 'murder':
                return 'Вбивство';
            case 'accident':
                return 'Аварія';
        }
	}

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
                    <div className="description">Опис: {this.props.description}</div>
					<Divider/>
					<div>Тип пригоди: {this.getType(this.props.type)}</div>
					<Divider/>
                    <div>Додано: {this.getDate(this.props.createdAt)}</div>
                </Popup.Content>
            </Popup>
        );
    }
}
