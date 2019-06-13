import React from "react";

export const SearchBox = props => {
  return (
    <div>
      <input onChange={props.handleInput} type="text" />
    </div>
  );
};
