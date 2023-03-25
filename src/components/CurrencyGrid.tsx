import React, { useState } from "react";

import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Pagination from "@mui/lab/Pagination";

import { useQuery } from "@tanstack/react-query";

import { useCurrency } from "../services/api/useCurrency";

const columns = [
  {
    field: "date",
    headerName: "Date",
    width: 150,
  },
  {
    field: "value",
    headerName: "Value",
    width: 150,
  },
];

const CurrencyGrid = () => {
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  const handleChangePage = ({ event, newPage }: any) => {
    setPage(newPage);
  };

  const [currencyValue, setCurrencyValue] = useState<any>();

  const { getUSDtoPHP } = useCurrency();

  const { data, isLoading } = useQuery({
    queryKey: ["currency"],
    queryFn: getUSDtoPHP,
    onSuccess: (data: any) => {
      console.log(`SUCCESS`, data);
      const timeSeriesData = data["Time Series FX (Daily)"];

      // Transform the Object to an Array
      const turnArray = Object.entries(timeSeriesData);
      const first500 = turnArray.slice(0, 500);
      const response = first500.map((item: any) => {
        const date = item[0];
        const value = item[1]["4. close"];

        return {
          date,
          value,
        };
      });

      setCurrencyValue(response);
    },
  });

  if (isLoading) {
    console.log(`LOADING...`);
  } else {
    console.log(`STATEVARIABLE@@@`, currencyValue);
  }

  const response = currencyValue?.map((item: any, index: any) => {
    const date = item.date;
    const value = item.value;
    return { id: index, date, value };
  });

  const paginatedRows = response
    ? response.slice((page - 1) * pageSize, page * pageSize)
    : [];

  return (
    <Box>
      <Box>Currency Grid</Box>

      <DataGrid columns={columns} rows={response || []} pagination autoHeight />
    </Box>
  );
};

export default CurrencyGrid;
