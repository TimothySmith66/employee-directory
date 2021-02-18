import React from "react";


function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="language"></label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="term"
          type="text"
          className="form-control"
          placeholder="search"
          id="term"
        />
      </div>
    </form>
  );
}

export default SearchForm;