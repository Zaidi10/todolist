import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [item, setitem] = useState([]);
  var first = React.createRef();

  const handleClick = () => {
    document.getElementsByClassName("in").disabled = true;
  };

  const handlekey = ev => {
    if (ev.key === "Enter") {
      setitem(item.concat(first.value));
      first.value = "";
    }
  };
  return (
    <div id="root" className="container">
      <span className="row border-bottom">
        <h1 className="h bg-yellow col-10">To Do List</h1>
        <button className="btn btn-warning " onClick={handleClick}>
          +
        </button>
      </span>
      <div className="row in">
        <div className="card offset-6 col-6">
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
      <List data={item} />
    </div>
  );
}

export default App;
