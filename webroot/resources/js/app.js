// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Import Framework7
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import Framework7-React Plugin
import Framework7React from 'framework7-react';

// Import Icons and App Custom Styles
import '../sass/app.scss';

// Import App Component
import App from './front-end/components/app.jsx';

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

// Init F7 Vue Plugin
Framework7.use(Framework7React)

// Mount React App
ReactDOM.render(
  React.createElement(App),
  document.getElementById('app'),
);
