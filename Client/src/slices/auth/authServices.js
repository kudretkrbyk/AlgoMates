import axios from "axios";
import { BASE_URL } from "./contants";
const API_URL = BASE_URL;
const register = async (data) => {
  const response = await axios.post(API_URL + "/register", data);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const login = async (data) => {
  console.log("Auth Services: Giriş yapılmaya çalışılıyor", data);
  try {
    console.log("Auth Services: Giriş yapılmaya çalışılıyor", data);
    const response = await axios.post(API_URL + "/login", data);
    console.log("Auth Services: Yanıt alındı", response);

    if (response.data) {
      const expireTime = new Date().getTime() + 60 * 60 * 1000;
      localStorage.setItem("user", JSON.stringify(response.data));
      localStorage.setItem("expireTime", expireTime); // ✅ aynı yerde, daha temiz
    }

    return response.data;
  } catch (error) {
    console.error(
      "Auth Services: Giriş hatası",
      error.response?.data || error.message
    );
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("expireTime");
};
const authServices = {
  register,
  login,
  logout,
};
export default authServices;
