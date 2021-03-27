import React from "react";
import { Provider } from "react-redux";
import SimpleMapPage from "./map/simple_map_page";
import store from "./root/store";

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<SimpleMapPage />
			</Provider>
		);
	}
}
