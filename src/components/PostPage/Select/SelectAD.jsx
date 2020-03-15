import React from "react";
import "../../../App.css";

const SelectAD = ({optionsAD, setOrder, order}) => {
  return (
    <select className="uk-select uk-width-small uk-margin-auto-left" 
                        value={order}
                        // onChange={event => props.setSelectAD(event.target.value)}
                        onChange={(e) => setOrder(e.target.value)}>
        {optionsAD.map((option, index) => {
            return (
                <option value={option.value} key={option.value + index}>
                    {option.text}
                </option>
            )
        })}
    </select>
  );
}; 

export default SelectAD;