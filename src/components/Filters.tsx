import React, { useState } from "react";

interface FiltersProps {
  onApplyFilters: (filters: { [key: string]: string | number }) => void;
}

const Filters: React.FC<FiltersProps> = ({ onApplyFilters }) => {
  const [keyword, setKeyword] = useState("");
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleApplyFilters = () => {
    const filters: { [key: string]: string | number } = {};
    if (keyword) filters.keyword = keyword;
    if (minPrice) filters.minPrice = minPrice;
    if (maxPrice) filters.maxPrice = maxPrice;
    if (startDate) filters.startDate = startDate;
    if (endDate) filters.endDate = endDate;
    onApplyFilters(filters);
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStartDate = e.target.value;
    if (endDate && new Date(newStartDate) > new Date(endDate)) {
      alert("Start date cannot be later than end date.");
    } else {
      setStartDate(newStartDate);
    }
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEndDate = e.target.value;
    if (startDate && new Date(newEndDate) < new Date(startDate)) {
      alert("End date cannot be earlier than start date.");
    } else {
      setEndDate(newEndDate);
    }
  };

  return (
    <div className="filters">
      <div>
        <label htmlFor="keyword">Keyword:</label>
        <input
          type="text"
          id="keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={handleStartDateChange}
        />
      </div>
      <div>
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </div>
      <div>
        <label htmlFor="minPrice">Min Price:</label>
        <input
          type="number"
          id="minPrice"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value) || "")}
        />
      </div>
      <div>
        <label htmlFor="maxPrice">Max Price:</label>
        <input
          type="number"
          id="maxPrice"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value) || "")}
        />
      </div>
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default Filters;
