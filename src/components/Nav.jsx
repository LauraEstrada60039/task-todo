import React from "react";

import "../styles/Nav.css";

const Nav = ({buttonClick}) => {
    return (
        <nav className="container-nav">
            <button className="btn-style" onClick={()=>buttonClick("todo")}>Todo</button>
            <button className="btn-style" onClick={()=>buttonClick("true")}>Complete</button>
            <button className="btn-style" onClick={()=>buttonClick("false")}>Reset</button>
        </nav>
    );
}

export default Nav;