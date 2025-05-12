import axios from "axios";
import { customers } from "../assets/customerConfig";

const BASE_URL = "https://public.api.openprocurement.org/api/2.5";

/**
 * Fetch customer information by customer ID.
 * @param customerId - The ID of the customer to fetch information for.
 * @returns The customer information from the API.
 */
export const getCustomerInfo = async (customerId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/organizations/${customerId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching customer information:", error);
    throw error;
  }
};

/**
 * Fetch data based on filters and selected customers.
 * @param filters - The filters to apply to the API request.
 * @param selectedCustomers - The list of selected customer IDs.
 * @returns The filtered data from the API.
 */
export const fetchFilteredData = async (
  filters: { [key: string]: string | number },
  selectedCustomers: number[]
) => {
  try {
    const response = await axios.post(`${BASE_URL}/filtered-data`, {
      filters,
      selectedCustomers,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching filtered data:", error);
    throw error;
  }
};

// Import customer ID from a separate file

// Example usage
(async () => {
  try {
    const customerInfo = await getCustomerInfo(customers[0]?.id); // Adjust index or property as needed
    console.log("Customer Info:", customerInfo);
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        "Failed to fetch customer info:",
        error instanceof Error ? error.message : String(error)
      );
    } else {
      console.error("Failed to fetch customer info:", error);
    }
  }
})();
(async () => {
  const customerId = "your-customer-id-here";
  try {
    const customerInfo = await getCustomerInfo(customerId);
    console.log("Customer Info:", customerInfo);
  } catch (error) {
    console.error(
      "Failed to fetch customer info:",
      error instanceof Error ? error.message : String(error)
    );
  }
})();
