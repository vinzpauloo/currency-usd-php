// ** React Imports
import { useState } from "react";

// ** MUI Imports
import { Box, Typography } from "@mui/material";

// ** TanStack Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// ** Style Imports
import "./App.css";

// ** Custom Imports
import CurrencyGrid from "./components/CurrencyGrid";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Box className="App">
        <Box>
          <CurrencyGrid />
        </Box>
      </Box>
    </QueryClientProvider>
  );
}

export default App;
