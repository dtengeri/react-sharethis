'use strict';

var React = require('react');

var ShareThisButton = React.createClass({
  propTypes: {
    service: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    title: React.PropTypes.string,
    type: React.PropTypes.string,
  },

  getDefaultProps: function getDefaultProps() {
    return {
      title: '',
      type: 'large'
    };
  },

  componentDidMount: function componentDidMount() {
    stWidget.addEntry({
      service: this.props.service,
      element: this.refs.button,
      url: this.props.url,
      title: this.props.title,
      type: this.props.type,
    });
  },

  render: function render() {
    var classes = ['share', 'share-' + this.props.service];
    return React.createElement('span', {
      className: classes.join(' '),
      ref: 'button'
    });
  },
});

module.exports = ShareThisButton;
