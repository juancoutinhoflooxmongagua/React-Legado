import React from "react";

import Member from "./Member.jsx";

export default props => {
    return (
        <div>
            <h1>Family</h1>
          {props.children}
          {React.cloneElement(props.children, { ...props })}
        </div>
    )
}