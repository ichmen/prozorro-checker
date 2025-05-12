import React, { useState } from "react";
import Selection from "./Selection";
import Filters from "./Filters";
import Results from "./Results";
import { fetchFilteredData } from "../utils/gateway"; // Import the API call function
import "./Container.css";

const Container: React.FC = () => {
  const [filters, setFilters] = useState<{ [key: string]: string | number }>(
    {}
  );
  const [selectedCustomers, setSelectedCustomers] = useState<number[]>([]);
  const [apiResponse, setApiResponse] = useState<any>(null); // State to store API response
  const [loading, setLoading] = useState<boolean>(false); // State to handle loading state

  const handleFiltersChange = (updatedFilters: {
    [key: string]: string | number;
  }) => {
    setFilters(updatedFilters);
  };

  const handleCustomerSelection = (customers: number[]) => {
    setSelectedCustomers(customers);
  };

  const handleApiCall = async () => {
    setLoading(true); // Set loading to true while the API call is in progress
    try {
      const data = await fetchFilteredData(filters, selectedCustomers);
      setApiResponse(data); // Store the API response
    } catch (error) {
      console.error("Error calling API:", error);
      setApiResponse({ error: "Failed to fetch data from the API." });
    } finally {
      setLoading(false); // Set loading to false after the API call is complete
    }
  };

  return (
    <div className="container">
      <div className="container-section">
        <Selection onSelectionChange={handleCustomerSelection} />
      </div>
      <div className="container-section">
        <Filters onFiltersChange={handleFiltersChange} />
      </div>
      <div className="container-section">
        <button className="button api-call-button" onClick={handleApiCall}>
          {loading ? "Loading..." : "Fetch Results"}
        </button>
      </div>
      <div className="container-section">
        <Results
          filters={filters}
          selectedCustomers={selectedCustomers}
          apiResponse={apiResponse}
        />
      </div>
    </div>
  );
};

export default Container;
