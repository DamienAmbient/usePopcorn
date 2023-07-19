import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

function Test() {
    return <StarRating color="blue"></StarRating>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
        {/* <StarRating maxRating={5}></StarRating>
        <StarRating size={24} color="cyan" defaultRating={3}></StarRating>

        <Test></Test> */}
    </React.StrictMode>
);
