import { configureStore } from "@reduxjs/toolkit";

import projectSlcie from "./slices/projectSlice";
import contactSlice from "./slices/contactSlice";

export const store = configureStore({
  reducer: {
    projects: projectSlcie,
    contacts: contactSlice,
  },
});
