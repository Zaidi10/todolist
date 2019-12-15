import React from "react";

function Input(props) {
  return (
    <div className="card offset-6 col-6">
      <span className="card-body bg-yellow col-12">
        <input
          ref={input => {
            props.first = input;
          }}
          type="text"
          className="col-8"
          onKeyPress={props.handlekey}
        ></input>
      </span>
    </div>
  );
}
export default Input;
