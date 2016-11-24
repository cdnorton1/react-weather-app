var React = require('react');


var About = (props) => {
    return (
            <div>
                <h1 className="text-center">About</h1>
                <p>This a weather app built using React</p>
                <p>Some of the tools used for this app:</p>
                <ul>
                    <li><a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.</li>
                    <li><a href="http://openweathermap.org">Open Weather Map</a> - This was used to search for weather data by city name.</li>
                    <li><a href="https://github.com/cdnorton1">GitHub</a> - This is where I have my code stored.</li>
                </ul>
            </div>
        )
};

module.exports = About;