import React, { FC, useState, useEffect } from 'react';
import CustomModal from '../../common/CustomModal';
import Button from '../../common/Button';
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
    const editedNote = {
      ...note,
      name,
      category,
      content,
      dates: dates
        ? [...note.dates, new Date(dates).toISOString()]
        : note.dates,
    };

    dispatch(editNote(editedNote));
    setIsModalOpen(false);
    console.log(note.dates);
  };

  return (
    <CustomModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <div className="text-black">
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <select
          value={category}
          onChange={e => setCategory(e.target.value as Category)}
        >
          {Object.values(Category).map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <input
          type="date"
          defaultValue={dates}
          onChange={e => setDates(e.target.value)}
        />
      </div>
      <Button color="white" onClick={handleEditNote}>
        Save
      </Button>
    </CustomModal>
  );
};

export default ModalEditNote;
