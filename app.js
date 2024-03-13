import React, { createElement } from "react"
import ReactDOM from "react-dom/client";

const App=()=>{
    return(
        <>
        <h1>HI</h1>
        </>
    )
}

const x=ReactDOM.createRoot(document.getElementById('root'));
x.render(<App/>)