import React, { useState } from "react";
import { customers } from "../assets/customerConfig"; // Adjust the path as needed
import "./Selection.css";

// Ensure customers is typed with the Customer interface
const typedCustomers: Customer[] = customers.map((customer) => ({
  ...customer,
  id: Number(customer.id),
}));

interface Customer {
  id: number;
  name: string;
}

const Selection: React.FC = () => {
  const [selectedCustomers, setSelectedCustomers] = useState<number[]>([]);

  const handleSelectionChange = (id: number) => {
    setSelectedCustomers((prev) =>
      prev.includes(id)
        ? prev.filter((customerId) => customerId !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedCustomers.length === typedCustomers.length) {
      setSelectedCustomers([]);
    } else {
      setSelectedCustomers(typedCustomers.map((customer) => customer.id));
    }
  };

  return (
    <div>
      <h3>Select Customers</h3>
      <ul>
        {typedCustomers.map((customer) => (
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
