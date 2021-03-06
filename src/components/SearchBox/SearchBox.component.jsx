import React from "react";
import "./SearchBox.styles.css";
const SearchBox = props => {
  return (
    <div className="main">
      <div className="form-group has-search">
        <span className="fa fa-search fa-lg form-control-feedback ma2" />
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          onChange={props.handleChanged}
        />
      </div>
    </div>
  );
};

export default SearchBox;
