import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Form, Grid, Segment, Select, TextArea } from 'semantic-ui-react';
import SelectAddress from './SelectAddress';
import { addEvent } from './eventActions';

class AddEventComponent extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            location: null,
            locationCoordinates: null,
            type: '',
            description: '',
        };
    }

    onSubmit = (e) => {
        this.props.addEvent(this.state);
    };

    changeField = (keyword) => (e, {value}) => {
        this.setState({
            [keyword]: value,
        });
    };

    render() {
        return (
            <div className="background-img">
                <div className="overlay">
                    <Grid textAlign="center" className="add-event" verticalAlign="middle">
                        <Grid.Column style={{ maxWidth: 450 }}>
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
                                    <Form.Group className="google-autocomplete" widths="equal">
                                        <label className="google-autocomplete-label">Адреса події: </label>
                                        <SelectAddress
                                            location={this.state.location}
                                            onChangeCoordinates={(coordinates) =>
                                                this.setState({
                                                    locationCoordinates: coordinates,
                                                })
                                            }
                                            onChangeLocation={(addressData) =>
                                                this.setState({
                                                    location: addressData,
                                                })
                                            }
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
                                    <Form.Field
                                        value={this.state.description}
                                        onChange={this.changeField('description')}
                                        control={TextArea}
                                        label="Опис події:"
                                        placeholder="Опишіть деталі події..."
                                    />
                                    <Button onClick={this.onSubmit} className="btn" color="primary" fluid size="large">
                                        Додати подію
                                    </Button>
                                </Form>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            addEvent,
        },
        dispatch
    );
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEventComponent);
