import React from "react";
import "../../../App.css";

const SelectPageSize = ({limit, setLimit, optionsPageSize}) => {
  return (
    <select className="uk-select uk-width-small uk-margin-left"
                        value={limit}
                        onChange={(e) => setLimit(parseInt(e.target.value))}>
        {optionsPageSize.map((option, index) => {
            return (
                <option value={option.value} key={option.value + index}>
                    {option.text}
                </option>
            )
        })}
    </select>
  );
}; 

export default SelectPageSize;