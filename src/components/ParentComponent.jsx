import React, { useState } from "react";
import SmallComponent from "./SmallComponent";

const ParentComponent = () => {
  const [smallComponents, setSmallComponents] = useState([
    { id: 1, name: "Prime", price: 150, selected: false },
    // { id: 2, name: "Netflix", price: 200, selected: false },
    { id: 3, name: "Disney+", price: 180, selected: false },
    { id: 4, name: "Hulu", price: 120, selected: false },
    { id: 5, name: "Apple TV+", price: 100, selected: false },
    { id: 6, name: "HBO Max", price: 170, selected: false },
    { id: 9, name: "Peacock", price: 130, selected: false },
    { id: 7, name: "YouTube Premium", price: 140, selected: false },
    { id: 8, name: "CBS All Access", price: 110, selected: false },
    { id: 10, name: "Vudu", price: 90, selected: false },
  ]);

  const [selectAll, setSelectAll] = useState(false);

  const handleSelect = (id) => {
    const updatedComponents = smallComponents.map((component) =>
      component.id === id
        ? { ...component, selected: !component.selected }
        : component
    );

    setSmallComponents(updatedComponents);
  };

  const handleSelectAll = () => {
    const updatedComponents = smallComponents.map((component) => ({
      ...component,
      selected: !selectAll,
    }));

    setSmallComponents(updatedComponents);
    setSelectAll(!selectAll);
  };

  const calculateTotalPrice = () => {
    const selectedPrices = smallComponents
      .filter((component) => component.selected)
      .map((component) => component.price);

    return selectedPrices.reduce((total, price) => total + price, 0);
  };

  return (
    <div className="parent-component">
      <div className="select-all-container">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAll}
            className="checkbox-input"
          />
          <span className="checkbox-custom"></span>
          Select All
        </label>
      </div>
      <div className="small-components-container">
        {smallComponents.map((component) => (
          <SmallComponent
            key={component.id}
            name={component.name}
            price={component.price}
            selected={component.selected}
            onSelect={() => handleSelect(component.id)}
          />
        ))}
      </div>
      <div className="total-price-container">
        <h2>Total Price: ₹{calculateTotalPrice()}/-</h2>
      </div>
    </div>
  );
};

export default ParentComponent;
