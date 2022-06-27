import React from "react";
// import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client";
import './style.css'
import App from './App'

const container = document.getElementById("root");
const root = createRoot(container); 
root.render(<App/>); //new way to render from REACT 18 version


// ReactDOM.render(<App/>,document.getElementById("root")); older way to render 
