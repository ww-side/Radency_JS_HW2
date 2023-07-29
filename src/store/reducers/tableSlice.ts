import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid as id } from 'nanoid';
import { Note } from '../../models/note.ts';
import { Category } from '../../models/category.ts';

interface TableSliceState {
  notes: Note[];
  archive: Note[];
}

const initialState: TableSliceState = {
  notes: [
    {
      id: id(),
      name: 'Shopping list',
      created: new Date('April 20, 2021').toISOString(),
      category: Category.TASK,
      content: 'Tomatoes, bread',
      dates: [new Date().toISOString()],
    },
    {
      id: id(),
      name: 'The theory of evolution',
      created: new Date('April 27, 2021').toISOString(),
      category: Category.RANDOM_THOUGHT,
      content: 'The evolution...',
      dates: [new Date().toISOString()],
    },
    {
      id: id(),
      name: 'New Feature',
      created: new Date('May 05, 2021').toISOString(),
      category: Category.IDEA,
      content: 'Implement new...',
      dates: [new Date().toISOString()],
    },
    {
      id: id(),
      name: 'William Gaddis',
      created: new Date('May 07, 2021').toISOString(),
      category: Category.QUOTE,
      content: `Power doesn't co...`,
      dates: [new Date().toISOString()],
    },
    {
      id: id(),
      name: 'Books',
      created: new Date('April 15, 2021').toISOString(),
      category: Category.TASK,
      content: 'The learn startup',
      dates: [new Date().toISOString()],
    },
  ],
  archive: [
    {
      id: id(),
      name: 'Buy',
      created: new Date('April 25, 2021').toISOString(),
      category: Category.TASK,
      content: 'Buy a meat pizza',
      dates: [new Date().toISOString()],
    },
  ],
};

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    deleteNote: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      const notesIndex = state.notes.findIndex(item => item.id === payload);
      const archiveIndex = state.archive.findIndex(item => item.id === payload);

      if (notesIndex !== -1) {
        state.notes = state.notes.filter(item => item.id !== payload);
      } else if (archiveIndex !== -1) {
        state.archive = state.archive.filter(item => item.id !== payload);
      }
    },
    archiveNote: (state, action: PayloadAction<string>) => {
      const noteId = action.payload;
      const noteIndex = state.notes.findIndex(item => item.id === noteId);

      if (noteIndex !== -1) {
        const noteToMove = state.notes[noteIndex];
        state.archive.push(noteToMove);
        state.notes.splice(noteIndex, 1);
      }
    },
    unarchiveNote: (state, action: PayloadAction<string>) => {
      const noteId = action.payload;
      const noteIndex = state.archive.findIndex(item => item.id === noteId);

      if (noteIndex !== -1) {
        const noteToMove = state.archive[noteIndex];
        state.notes.push(noteToMove);
        state.archive.splice(noteIndex, 1);
      }
    },
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    editNote: (state, action: PayloadAction<Note>) => {
      const { id, name, category, content, dates } = action.payload;
      const noteIndex = state.notes.findIndex(item => item.id === id);

      if (noteIndex !== -1) {
        state.notes[noteIndex] = {
          ...state.notes[noteIndex],
          name: name || state.notes[noteIndex].name,
          category: category || state.notes[noteIndex].category,
          content: content || state.notes[noteIndex].content,
          dates: dates || state.notes[noteIndex].dates,
        };
      }
    },
  },
});

export default tableSlice.reducer;
