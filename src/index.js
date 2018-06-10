import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

import Router from "./components/Router";

import "./styles/css/index.css";

ReactDOM.render(<Router />, document.getElementById("root"));
registerServiceWorker();
