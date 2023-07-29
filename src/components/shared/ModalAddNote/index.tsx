import React, { ChangeEvent, FC, useState } from 'react';
import CustomModal from '../../common/CustomModal';
import Button from '../../common/Button';
import { useAppDispatch } from '../../../hooks/redux.ts';
import { tableSlice } from '../../../store/reducers/tableSlice.ts';
import { nanoid } from 'nanoid';
import { Category } from '../../../models/category.ts';

interface ModalAddNoteProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalAddNote: FC<ModalAddNoteProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState<Category>(Category.TASK);
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const { addNote } = tableSlice.actions;
  const dispatch = useAppDispatch();

  const handleAddNote = () => {
    const newNote = {
      id: nanoid(),
      name,
      created: new Date().toISOString(),
      category,
      content,
      dates: [new Date(date).toISOString()],
    };

    dispatch(addNote(newNote));
    setIsModalOpen(false);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value as Category);
  };

  const handleContentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  return (
    <CustomModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <div className="text-black">
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={handleNameChange}
        />
        <select value={category} onChange={handleCategoryChange}>
          {Object.values(Category).map(categoryValue => (
            <option key={categoryValue} value={categoryValue}>
              {categoryValue}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={content}
          placeholder="Content"
          onChange={handleContentChange}
        />
        <input
          type="date"
          value={date}
          placeholder="Dates"
          onChange={handleDateChange}
        />
      </div>
      <Button color="white" onClick={handleAddNote}>
        Add
      </Button>
    </CustomModal>
  );
};

export default ModalAddNote;
