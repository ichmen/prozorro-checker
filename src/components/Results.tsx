import React from "react";
import "./Results.css";

interface ResultsProps {
  filters: { [key: string]: string | number };
  selectedCustomers: number[];
  apiResponse: any;
}

const Results: React.FC<ResultsProps> = ({
  filters,
  selectedCustomers,
  apiResponse,
}) => {
  return (
    <div className="results">
      <h3>Results</h3>
      <div className="results-section">
        <h4>Filters:</h4>
        <ul>
          {Object.entries(filters).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
      <div className="results-section">
        <h4>Selected Customers:</h4>
        <ul>
          {selectedCustomers.length > 0 ? (
            selectedCustomers.map((customerId) => (
              <li key={customerId}>Customer ID: {customerId}</li>
            ))
          ) : (
            <li>No customers selected</li>
          )}
        </ul>
      </div>
      <div className="results-section">
        <h4>API Response:</h4>
        {apiResponse ? (
          <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
        ) : (
          <p>No API response yet. Click "Fetch Results" to call the API.</p>
        )}
      </div>
    </div>
  );
};

export default Results;
