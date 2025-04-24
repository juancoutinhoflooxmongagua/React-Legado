import React from "react";

import Member from "./Member.jsx";

export default props => {
    return (
        <div>
            <h1>Family</h1>
            <Member name="John" lastname="Doe"/>
            <Member name="Jane" lastname="Doe"/>
            <Member name="Jack" lastname="Doe"/>
        </div>
    )
}