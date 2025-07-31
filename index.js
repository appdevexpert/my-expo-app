import { registerRootComponent } from 'expo';
import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that you don't need to wrap your App component in a
// <AppContainer /> if you're using react-navigation.
registerRootComponent(App);
