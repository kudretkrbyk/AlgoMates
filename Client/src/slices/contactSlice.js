import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axiosIntance"; // token'lı axios burada olsun

const API_URL = "/contacts";

const initialState = {
  contacts: [],
  contact: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

// GET ALL
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(API_URL);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Proje listesi alınamadı."
      );
    }
  }
);

// GET BY ID
export const fetchContactById = createAsyncThunk(
  "contacts/fetchById",
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`${API_URL}/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Proje bulunamadı.", error);
    }
  }
);

// ADD
export const addContact = createAsyncThunk(
  "contact/add",
  async (data, thunkAPI) => {
    try {
      const res = await axios.post(API_URL, data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Proje ekleme başarısız.", error);
    }
  }
);

// UPDATE
export const updateContact = createAsyncThunk(
  "contacts/update",
  async (data, thunkAPI) => {
    try {
      const res = await axios.put(`${API_URL}/${data.id}`, data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Proje güncelleme başarısız.", error);
    }
  }
);

// DELETE
export const deleteContact = createAsyncThunk(
  "contacts/delete",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue("Proje silinemedi.", error);
    }
  }
);

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    resetContactState: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
      state.project = {};
    },
  },
  extraReducers: (builder) => {
    builder
      // FETCH ALL
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projects = action.payload;
        state.isSuccess = true;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // FETCH BY ID
      .addCase(fetchContactById.fulfilled, (state, action) => {
        state.project = action.payload;
        state.isSuccess = true;
      })

      // ADD
      .addCase(addContact.fulfilled, (state, action) => {
        state.projects.push(action.payload);
        state.isSuccess = true;
      })

      // UPDATE
      .addCase(updateContact.fulfilled, (state, action) => {
        const index = state.projects.findIndex(
          (p) => p.id === action.payload.id
        );
        if (index !== -1) state.projects[index] = action.payload;
        state.isSuccess = true;
      })

      // DELETE
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.projects = state.projects.filter((p) => p.id !== action.payload);
        state.isSuccess = true;
      })

      // Hata durumları
      .addCase(addContact.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { resetProjectState } = contactSlice.actions;
export default contactSlice.reducer;
