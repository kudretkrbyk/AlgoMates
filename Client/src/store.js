import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./slices/projectSlice";
import contactSlice from "./slices/contactSlice";

export const store = configureStore({
  reducer: {
    projects: projectSlice,
    contact: contactSlice, // ✅ doğru isim (state.contact olarak kullanılıyor)
  },
});
