var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
            <div>
                <h1 className="text-center">Examples</h1>
                <p>A few example locations to try out:</p>
                <ol>
                    <li>
                        <Link to="/?location=Huntersville">Huntersville, NC</Link>
                    </li>
                    <li>
                        <Link to="/?location=Las Vegas">Las Vegas, NV</Link>
                    </li>
                </ol>
            </div>
        )
};

module.exports = Examples;