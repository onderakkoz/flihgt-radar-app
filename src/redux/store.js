import { configureStore } from "@reduxjs/toolkit";
import flight from "./slice/flightSlice";

export default configureStore({
  reducer: { flight },
});
