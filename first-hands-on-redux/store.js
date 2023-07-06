import { configureStore } from "@reduxjs/toolkit";
import NotesSlice from "./NotesSlice";

export default configureStore({
    reducer : {
        notesReducer : NotesSlice
    }
})
