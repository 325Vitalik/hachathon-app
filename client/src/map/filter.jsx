import React, { PureComponent } from "react";
import { Button, Form, Item, Segment, Select } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRangePicker } from 'react-date-range';

class Filter extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            startDate : new Date(),
            endDate : new Date(),
            searchValue:''
        }
    }


    changeField = (keyword) => (e, {value}) => {
        this.setState({
            [keyword]: value,
        });
    };

    changeFieldDate = () => (e) => {
        this.setState({
            ["startDate"] : e.selection.startDate,
            ["endDate"] : e.selection.endDate
        })
    }
    render(){
        return (
            <Segment>
            <Form>
                <Form.Group widths="equal">
                    <Form.Input
                        value={this.state.name}
                        onChange={this.changeField('name')}
                        fluid
                        label="Назва події:"
                        placeholder="Щось сталось..."
                    />
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Field
                        value={this.state.type}
                        onChange={this.changeField('type')}
                        control={Select}
                        label="Тип події:"
                        options={[
                            { key: 'fire', text: 'Пожежа', value: 'fire' },
                            { key: 'flod', text: 'Паводок', value: 'flod' },
                            {
                                key: 'looting',
                                text: 'Пограбування / мародерство',
                                value: 'looting',
                            },
                            { key: 'murder', text: 'Вбивство', value: 'murder' },
                            { key: 'accident', text: 'Аварія', value: 'accident' },
                        ]}
                        placeholder="Оберіть тип інциденту"
                    />
                </Form.Group>
                <DateRangePicker
                    ranges={[{
                        startDate: this.state.startDate,
                        endDate: this.state.endDate,
                        key: 'selection',
                      }]}
                    onChange={this.changeFieldDate()}
                DateRangePicker/>
                <Button onClick={()=>this.props} type='submit'>Submit</Button>
            </Form>
            <Item>
                <Item.Content>
                    <Item.Header>{this.props.foundData}</Item.Header>
                </Item.Content>
            </Item>
            </Segment>
        )
    }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
		},
		dispatch,
	);
}

function mapStateToProps(state) {
	return {
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);