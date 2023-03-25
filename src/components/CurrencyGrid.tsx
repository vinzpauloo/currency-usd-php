import React from "react";

import { Box } from "@mui/material";

import { useQuery } from "@tanstack/react-query";

import { useCurrency } from "../services/api/useCurrency";

const CurrencyGrid = () => {
  const { getUSDtoPHP } = useCurrency();

  const { data, isLoading } = useQuery({
    queryKey: ["currency"],
    queryFn: getUSDtoPHP,
    onSuccess: (data: any) => {
      console.log(`SUCCESS`, data);
    },
  });

  console.log(data);

  return (
    <Box>
      <Box>Currency Grid</Box>
    </Box>
  );
};

export default CurrencyGrid;
