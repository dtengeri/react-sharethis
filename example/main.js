var React = require('react');
var ReactDOM = require('react-dom');
var ShareThisButton = require('react-sharethis');

ReactDOM.render(
  React.createElement(ShareThisButton, { service: 'sharethis', url: 'http://www.sharethis.com', title: 'ShareThis' }),
  document.getElementById('content')
);