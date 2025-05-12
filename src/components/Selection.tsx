import React, { useState } from "react";
import { customers } from "../assets/customerConfig";
import "./Selection.css";

interface Customer {
  id: number;
  name: string;
}

interface SelectionProps {
  onSelectionChange: (selectedCustomers: number[]) => void;
}

const Selection: React.FC<SelectionProps> = ({ onSelectionChange }) => {
  const [selectedCustomers, setSelectedCustomers] = useState<number[]>([]);

  const handleSelectionChange = (id: number) => {
    setSelectedCustomers((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((customerId) => customerId !== id)
        : [...prev, id];
      onSelectionChange(updated);
      return updated;
    });
  };

  const handleSelectAll = () => {
    const updated =
      selectedCustomers.length === customers.length
        ? []
        : customers.map((customer) => customer.id);
    setSelectedCustomers(updated);
    onSelectionChange(updated);
  };

  return (
    <div>
      <h3>Select Customers</h3>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            <label className="customer-label">
              <input
                type="checkbox"
                value={customer.id}
                checked={selectedCustomers.includes(customer.id)}
                onChange={() => handleSelectionChange(customer.id)}
              />
              {customer.name}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleSelectAll}>Select All / Deselect All</button>
    </div>
  );
};

export default Selection;
