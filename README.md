# react-sharethis
React component for ShareThis widgets.

This component helps you integrating ShareThis.com widgets into your React application. 

Usage:

You have to add the following javascript to your HTML:

```
<script type="text/javascript" src="http://w.sharethis.com/button/buttons.js"></script>
<script type="text/javascript">
    stLight.options({
            publisher:'12345',
    });
</script>
```

Then you can render your component:

```
var React = require('react');
var ReactDOM = require('react-dom');
var ShareThisButton = require('react-sharethis');

ReactDOM.render(
  React.createElement(ShareThisButton, { service: 'sharethis', url: 'http://www.sharethis.com', title: 'ShareThis' }),
  document.getElementById('content')
);
```
