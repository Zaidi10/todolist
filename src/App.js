import React, { useState, useEffect } from "react";

import "./App.css";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  var [item, setitem] = useState(
    JSON.parse(localStorage.getItem("List")) || []
  );
  var first = React.createRef();
  var [bool, setbool] = useState(true);

  const handleClick = () => {
    setbool((bool = !bool));
  };

  useEffect(() => {
    // Update the document title using the browser API
    localStorage.setItem("List", JSON.stringify(item));
  });

  const handlekey = ev => {
    if (ev.key === "Enter") {
      if (first.value === "") {
        alert("Input Field Cant be Empty!");
        return;
      }

      setitem(item.concat(first.value));
      first.value = "";
      setbool((bool = true));
    }
  };
  return (
    <div id="root" className="container">
      <span className="row border-bottom">
        <h1 className="h col-11 bg-yellow pb-0 col-11">Todo</h1>
        <button className="col-1 btn  " onClick={handleClick}>
          +
        </button>
      </span>
      <div hidden={bool} className="row in">
        <div className="card  col-12">
          <span className="card-body bg-yellow col-12">
            <input
              ref={input => {
                first = input;
              }}
              type="text"
              className="col-8"
              onKeyPress={handlekey}
            ></input>
          </span>
        </div>
      </div>
      <div className="row mt-5 ">
        <List key={item} data={item} />
      </div>
    </div>
  );
}

export default App;
