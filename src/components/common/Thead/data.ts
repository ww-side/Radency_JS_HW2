import { nanoid as id } from 'nanoid';
import { TheadItem } from '../../../models/thead.ts';

export const notesTitle: TheadItem[] = [
  {
    id: id(),
    title: 'Name',
  },
  {
    id: id(),
    title: 'Created',
  },
  {
    id: id(),
    title: 'Category',
  },
  {
    id: id(),
    title: 'Content',
  },
  {
    id: id(),
    title: 'Dates',
  },
  {
    id: id(),
    title: 'Actions',
  },
];

export const summaryTitles: TheadItem[] = [
  {
    id: id(),
    title: 'Note Category',
  },
  {
    id: id(),
    title: 'Active',
  },
  {
    id: id(),
    title: 'Archive',
  },
];
