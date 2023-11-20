/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import { AppRegistry } from "react-native";
import App from './src/New_App';
import {name as appName} from './app.json';

// app 시작 진입점
AppRegistry.registerComponent(appName, ()=>App);