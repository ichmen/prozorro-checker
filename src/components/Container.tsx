import React from "react";
import Selection from "./Selection"; // Adjust the path as needed
import Filters from "./Filters"; // Adjust the path as needed
import "./Container.css"; // Assuming you will create a CSS file for styling

// Removed duplicate Container definition and export
const Container: React.FC = () => {
  return (
    <div className="container">
      <div className="container-section">
        <Selection />
      </div>
      <div className="container-section">
        <Filters
          onApplyFilters={(filters) => console.log("Applied filters:", filters)}
        />
      </div>
    </div>
  );
};

export default Container;
