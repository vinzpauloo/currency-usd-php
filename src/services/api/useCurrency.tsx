import React from "react";
import axios, { AxiosError } from "axios";

export const useCurrency = () => {
  const exchangeKey = "IMKAEWMTETASY661";

  const getUSDtoPHP = async () => {
    try {
      // START: Access update user API

      const endpoint = `https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=USD&to_symbol=PHP&apikey=${exchangeKey}&outputsize=full`;

      //  const options = {
      //    headers: {
      //      Authorization: authHeader(),
      //      "X-Authorization": calculateHash(endpoint),
      //    },
      //  };

      //  const response = await axios.get(endpoint, {}, options);

      const response = await axios.get(endpoint);

      // END: Access update user API

      if (response.status === 200) {
        const { data } = response;

        return data;
      }
    } catch (err) {
      let error;
      if (err && err instanceof AxiosError)
        error = "*" + err.response?.data.message;
      else if (err && err instanceof Error) error = err.message;

      // console.log("Error", err);
      return { error: error };
    }
  };

  return { getUSDtoPHP };
};
