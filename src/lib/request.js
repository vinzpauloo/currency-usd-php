import axios from "axios";

// to have a delay in fetching data to see the loading component
function sleep(ms = 500) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
