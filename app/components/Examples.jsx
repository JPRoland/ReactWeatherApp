const React = require('react');
const {Link} = require('react-router')

const Examples = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are some example locations to try out:</p>
      <ol>
        <li>
          <Link to="/?location=Columbus">Columbus, OH</Link>
        </li>
        <li>
          <Link to="/?location=London">London, UK</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
