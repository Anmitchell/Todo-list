import React from 'react' // React library used to create components
import ReactDOM from 'react-dom/client' // React library used to render React components to DOM
import App from './App.jsx' // import single page application
import './index.css' // General styling for page

// ReactDOM is used to mount component to a div with the id of root and render it to the root element in the DOM
// DOM is a tree like structure of objects, each object in the tree represents an element, attribute, or other structural
// part of the document.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
