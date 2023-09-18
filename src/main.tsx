// import React from "react";
// import ReactDom from "react-dom";
// // import App from "./containers/App";

// // ReactDom.render(<App />, document.getElementById("app"));
// ReactDom.render(<><h1>hola</h1> </>, document.getElementById("app"));

import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <h1>Hello world</h1>
  </React.StrictMode>,
)
