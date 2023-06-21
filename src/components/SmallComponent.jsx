import React from "react";

const SmallComponent = ({ name, price, selected, onSelect }) => {
  const buttonText = selected ? "Cancel" : "Buy";

  return (
    <div className="small-component">
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <button onClick={onSelect}>{buttonText}</button>
    </div>
  );
};

export default SmallComponent;
