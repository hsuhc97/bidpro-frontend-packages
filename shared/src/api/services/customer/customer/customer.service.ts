// import { useApi } from "../../../context/ApiContext";

// export const useCustomerService = () => {
//   const { apiClient } = useApi();
  
//   const getCustomer = async () => {
//     try {
//       const response = await apiClient?.get("/api/customer");
//       if (!response) {
//         throw new Error("Failed to get customers");
//       }
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching customer:", error);
//       throw error;
//     }
//   };

//   return {
//     getCustomer
//   };
// };