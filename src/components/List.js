import React from "react";

function List(props) {
  const list = props.data.map(item => (
    <li className=" border-bottom">
      <h3 className="col-12">
        <span className="col-2 noBorder">
          <i className="fa fa-circle mr-3" aria-hidden="true"></i>
        </span>
        <span className="col-10 ">{item}</span>
      </h3>
    </li>
  ));

  return (
    <div className="text-light col-12">
      <ul className="col-12 ml-0">{list}</ul>
    </div>
  );
}
export default List;
