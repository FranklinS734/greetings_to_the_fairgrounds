import React from "react";

function Greetings({name}) {
    return (
    <div>
        <h2>Hello {name}!</h2>
        <p>This is your first custom component in React.</p>
      </div>
    );
}
export default Greetings;