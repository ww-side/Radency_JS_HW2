import React, { FC, useState, useEffect, ChangeEvent } from 'react';
import CustomModal from '../../common/CustomModal';
import Button from '../../common/Button';
import Select from '../../common/Select';
import Input from '../../common/Input';
import { Note } from '../../../models/note.ts';
import { useAppDispatch } from '../../../hooks/redux.ts';
import { tableSlice } from '../../../store/reducers/tableSlice.ts';
import { Category } from '../../../models/category.ts';

interface ModalEditNoteProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  note: Note;
}

const ModalEditNote: FC<ModalEditNoteProps> = ({
  isModalOpen,
  setIsModalOpen,
  note,
}) => {
  const [name, setName] = useState(note.name);
  const [category, setCategory] = useState(note.category);
  const [content, setContent] = useState(note.content);
  const [dates, setDates] = useState('');
  const dispatch = useAppDispatch();
  const { editNote } = tableSlice.actions;

  useEffect(() => {
    if (note.dates.length > 0) {
      const lastDate = new Date(note.dates[note.dates.length - 1]);
      setDates(lastDate.toISOString().split('T')[0]);
    }
  }, [note.dates]);

  const handleEditNote = () => {
    const lastDate = new Date(note.dates[note.dates.length - 1])
      .toISOString()
      .split('T')[0];
    const newDate =
      dates !== lastDate
        ? [...note.dates, new Date(dates).toISOString()]
        : note.dates;

    const editedNote = {
      ...note,
      name,
      category,
      content,
      dates: newDate,
    };

    dispatch(editNote(editedNote));
    setIsModalOpen(false);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDates(e.target.value);
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value as Category);
  };

  return (
    <CustomModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <div className="flex flex-col gap-2 mb-5">
        <Input
          type="text"
          value={name}
          placeholder="Name"
          onChange={handleNameChange}
        />
        <Select value={category} onChange={handleCategoryChange} />
        <Input
          type="text"
          value={content}
          placeholder="Content"
          onChange={handleContentChange}
        />
        <Input
          type="date"
          value={dates}
          placeholder="Dates"
          onChange={handleDateChange}
        />
      </div>
      <Button color="white" onClick={handleEditNote}>
        Save
      </Button>
    </CustomModal>
  );
};

export default ModalEditNote;
