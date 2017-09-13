import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'

import configureStore from './shared/configureStore'
import AppNavigation from './shared/AppNavigation';

const store = configureStore()

class App extends Component {
	render() {
		return (
			<Provider store={store} >
				<AppNavigation/>
			</Provider>
		);
	}
}

AppRegistry.registerComponent('tour', () => App);