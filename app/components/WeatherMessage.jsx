var React = require('react');

// var WeatherMessage = React.createClass({
// 	render: function () {
// 		var {temp, location} = this.props;
// 		return (
// 			<h3>It's {temp} in {location} !</h3>
// 		)
// 	}
// });

// refactoring from above - stateless functional components
// var WeatherMessage = (props) => {
// 	var {temp, location} = props;
// 		return (
// 			<h3>It's {temp} in {location} !</h3>
// 		)
// };

// OR
var WeatherMessage = ({temp, location}) => {
		return (
			<h3>It's {temp} in {location} !</h3>
		)
};

module.exports = WeatherMessage;