// Redux Toolkit slice managing the books state
import { createSlice } from "@reduxjs/toolkit";
import initialBooks from "../data/books";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    list: initialBooks,
  },
  reducers: {
    // Add a new book to the beginning of the list
    addBook: (state, action) => {
      const newBook = {
        id: Date.now(), // unique id based on timestamp
        ...action.payload,
      };
      state.list.unshift(newBook);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
