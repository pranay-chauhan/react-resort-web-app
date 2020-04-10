import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from "./App";
import {RoomProvider} from "./Context";
ReactDOM.render(<RoomProvider>
<App/>
</RoomProvider>,document.getElementById("root"));


