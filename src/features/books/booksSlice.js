import { createSlice } from "@reduxjs/toolkit";
import { BOOKS } from "app/data";
export const booksSlice = createSlice({
    name: 'books',
    initialState: {
        books: BOOKS,
        types: []
    },
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload;
        },
        setTypes: (state, action) => {
            state.types = action.payload;
        },
        resetBooks: (state, action) => {
            state.books = [];
        },
        resetTypes:(state,action)=>{
            state.types = [];
        }
    }
});

export const selectBooks = (state) => state.books.books;
export const selectTypes = (state) => state.books.types;
export const filterBooks = (query, books) => Object.values(books).filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
export const { setBooks, resetBooks,setTypes,resetTypes } = booksSlice.actions;
export default booksSlice.reducer;