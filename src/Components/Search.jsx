import React from "react";

const Search = ({ setInputValue }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setInputValue(e.target.query.value);
      }}
    >
      <input
        type="text"
        name="query"
        placeholder="Search Github Repositories"
      />
    </form>
  );
};

export default Search;
