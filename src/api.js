import axios from "axios";

// Create an instance of axios with your configuration
const instance = axios.create({
  baseURL: "http://localhost:3002/api", // Your base URL
  // Other configuration options...
});

// Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    // Return a successful response
    return response;
  },
  (error) => {
    // Check if the error is due to a canceled request
    if (axios.isCancel(error)) {
      console.log("Request canceled:", error.message);
    }
    // Return an error response
    return Promise.reject(error);
  }
);

export default instance;
