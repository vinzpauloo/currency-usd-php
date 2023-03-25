import React from "react";
import axios, { AxiosError } from "axios";

export const useCurrency = () => {
  const getUSDtoPHP = async () => {
    try {
      // START: Access update user API
      const endpoint = `https://query2.finance.yahoo.com/v8/finance/chart/PHP=X?formatted=true&crumb=kUBNJm%2FgQ88&lang=en-US&region=US&includeAdjustedClose=true&interval=1d&period1=1609459200&period2=1679702400&events=capitalGain%7Cdiv%7Csplit&useYfid=true&corsDomain=finance.yahoo.com`;

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
        console.log(`RESPONSE!!!`, data);

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
