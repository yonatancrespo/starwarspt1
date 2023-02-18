//import react into the bundle
import React from 'react'
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";
import  home from "./component/ExampleCard.jsx"

//import your own components
import Layout from './layout.js'

ReactDOM.render(<Layout />, document.querySelector("#app"));

//
//const root = createRoot(document.querySelector("#app"))

//render your react application
//root.render(<Layout/>)
