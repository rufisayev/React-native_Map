var React = require('react-native');
var {
    AppRegistry,
    } = React;

var App = require('./App');

var test = React.createClass({
    render() {
        return <App />
    },
});

AppRegistry.registerComponent('AirMapsExplorer', () => test);
