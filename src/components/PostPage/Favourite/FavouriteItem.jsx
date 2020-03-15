import React from "react";

const FavouriteItem = ({removeFavourites, title}) => {
return (
<tr>
  <td>{title.slice(0,40)}</td>
    <td className="uk-text-right">
      <button onClick={() => removeFavourites()}
        className="uk-button uk-icon"
        type="button"
        uk-icon="icon: close;"
      />
    </td>
  </tr>
)}

export default FavouriteItem