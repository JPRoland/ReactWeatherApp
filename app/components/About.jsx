const React = require('react');

const About = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        This is a simple weather application built with React.<br/>
        The code for this app is available on <a href="https://github.com/JPRoland/ReactWeatherApp">Github</a>
      </p>
      <p>Some of the tools used to build this app:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a>
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
