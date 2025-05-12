import React, { useEffect, useReducer } from "react";

interface FiltersProps {
  onFiltersChange: (filters: { [key: string]: string | number }) => void;
}

interface FiltersState {
  keyword: string;
  minPrice: number | "";
  maxPrice: number | "";
  startDate: string;
  endDate: string;
}

type FiltersAction =
  | { type: "SET_KEYWORD"; payload: string }
  | { type: "SET_MIN_PRICE"; payload: number | "" }
  | { type: "SET_MAX_PRICE"; payload: number | "" }
  | { type: "SET_START_DATE"; payload: string }
  | { type: "SET_END_DATE"; payload: string };

const initialState: FiltersState = {
  keyword: "",
  minPrice: "",
  maxPrice: "",
  startDate: "",
  endDate: "",
};

const filtersReducer = (
  state: FiltersState,
  action: FiltersAction
): FiltersState => {
  switch (action.type) {
    case "SET_KEYWORD":
      return { ...state, keyword: action.payload };
    case "SET_MIN_PRICE":
      return { ...state, minPrice: action.payload };
    case "SET_MAX_PRICE":
      return { ...state, maxPrice: action.payload };
    case "SET_START_DATE":
      return { ...state, startDate: action.payload };
    case "SET_END_DATE":
      return { ...state, endDate: action.payload };
    default:
      return state;
  }
};

const Filters: React.FC<FiltersProps> = ({ onFiltersChange }) => {
  const [state, dispatch] = useReducer(filtersReducer, initialState);

  useEffect(() => {
    const filters: { [key: string]: string | number } = {};
    if (state.keyword) filters.keyword = state.keyword;
    if (state.minPrice) filters.minPrice = state.minPrice;
    if (state.maxPrice) filters.maxPrice = state.maxPrice;
    if (state.startDate) filters.startDate = state.startDate;
    if (state.endDate) filters.endDate = state.endDate;
    onFiltersChange(filters);
  }, [state, onFiltersChange]);

  return (
    <div className="filters">
      <div>
        <label htmlFor="keyword">Keyword:</label>
        <input
          type="text"
          id="keyword"
          value={state.keyword}
          onChange={(e) =>
            dispatch({ type: "SET_KEYWORD", payload: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={state.startDate}
          onChange={(e) =>
            dispatch({ type: "SET_START_DATE", payload: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={state.endDate}
          onChange={(e) =>
            dispatch({ type: "SET_END_DATE", payload: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="minPrice">Min Price:</label>
        <input
          type="number"
          id="minPrice"
          value={state.minPrice}
          onChange={(e) =>
            dispatch({
              type: "SET_MIN_PRICE",
              payload: Number(e.target.value) || "",
            })
          }
        />
      </div>
      <div>
        <label htmlFor="maxPrice">Max Price:</label>
        <input
          type="number"
          id="maxPrice"
          value={state.maxPrice}
          onChange={(e) =>
            dispatch({
              type: "SET_MAX_PRICE",
              payload: Number(e.target.value) || "",
            })
          }
        />
      </div>
    </div>
  );
};

export default Filters;
