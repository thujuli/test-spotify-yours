import axios from "axios";
import config from "../../config";
import qs from "qs";

const { api } = config;

const createRequest = async (path, field) => {
  const data = {
    grant_type: "client_credentials",
    client_id: api.clientId,
    client_secret: api.clientSecret,
  };

  const resToken = await axios.post(api.authUrl, qs.stringify(data), {
    headers: { "content-type": "application/x-www-form-urlencoded" },
  });
  const token = resToken.data.access_token;

  const res = await axios.get(`${api.baseUrl}/browse/${path}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.data[field].items;
};

export default createRequest;
