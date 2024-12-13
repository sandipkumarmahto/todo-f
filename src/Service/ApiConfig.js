import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:4000/", // Your backend URL
});

// Intercept requests to attach the access token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    console.log('in interceptor')
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Intercept responses to handle token refresh
// apiClient.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         const refreshToken = localStorage.getItem("refreshToken");
//         const { data } = await axios.post("http://localhost:5000/api/refresh", {
//           token: refreshToken,
//         });

//         // Update tokens
//         localStorage.setItem("accessToken", data.accessToken);

//         // Retry the original request
//         originalRequest.headers["Authorization"] = `Bearer ${data.accessToken}`;
//         return apiClient(originalRequest);
//       } catch (err) {
//         // Handle refresh token failure (e.g., log out)
//         localStorage.removeItem("accessToken");
//         localStorage.removeItem("refreshToken");
//         window.location.href = "/login"; // Redirect to login
//         return Promise.reject(err);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

export default apiClient;
