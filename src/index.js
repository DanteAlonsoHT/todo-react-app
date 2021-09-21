import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//component file
import TodoContainer from "./components/TodoContainer"
ReactDOM.render(<TodoContainer />, document.getElementById("root"))

reportWebVitals();
