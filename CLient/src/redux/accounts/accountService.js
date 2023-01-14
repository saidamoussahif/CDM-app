import axios from "axios";

const base_URL = "http://localhost:8000/api/accounts/";

const getAccounts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(base_URL, config);

  return response.data;
};

const carService = {
 getAccounts
};

export default carService;
