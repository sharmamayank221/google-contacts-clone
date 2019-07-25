import React from "react";
import "./SearchBox.styles.css";
const SearchBox = () => {
  return (
    <div className="main">
      <div className="form-group has-search">
        <span className="fa fa-search fa-xs form-control-feedback" />
        <input type="text" className="form-control" placeholder="Search" />
      </div>
    </div>
  );
};

export default SearchBox;
