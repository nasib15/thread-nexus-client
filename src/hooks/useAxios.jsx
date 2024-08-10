import axios from "axios";

const axiosSetup = axios.create({
  baseURL: import.meta.env.VITE_URL,
});

const useAxios = () => {
  return axiosSetup;
};

export default useAxios;
