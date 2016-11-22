var React = require('react');

// var About = React.createClass({
//     render: function () {
//         return (
//             <h3>About Component</h3>
//         );
//     }
// });

// Refactored from above - whewen only a render function - STATELESS FUNCTIONAL COMPONENT
var About = (props) => {
    return (
            <h3>About Component</h3>
        )
};
module.exports = About;