import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import Library from "./ch_03/Library";
import Clock from "./ch_04/Clock";
import CommentList from "./ch_05/CommentList";
import NotificationList from "./ch_06/NotificationList";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
