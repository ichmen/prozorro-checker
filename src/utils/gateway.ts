import axios from "axios";
import { customers } from "../assets/customerConfig";

const BASE_URL = "https://public.api.openprocurement.org/api/2.5";

export const getCustomerInfo = async (customerId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/organizations/${customerId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching customer information:", error);
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
