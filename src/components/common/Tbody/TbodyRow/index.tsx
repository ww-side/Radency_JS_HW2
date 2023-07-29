import { FC, useState } from 'react';
import { parseISO } from 'date-fns';
import IconBtn from '../../IconBtn';
import ModalEditNote from '../../../shared/ModalEditNote';
import { useAppDispatch } from '../../../../hooks/redux.ts';
import { Note } from '../../../../models/note.ts';
import { tableSlice } from '../../../../store/reducers/tableSlice.ts';
import { FiEdit } from 'react-icons/fi';
import { HiOutlineTrash } from 'react-icons/hi';
import { BiArchiveIn } from 'react-icons/bi';

interface TableRowProps {
  note: Note;
  editAction: boolean;
  archiveAction: boolean;
  deleteAction: boolean;
}

const TbodyRow: FC<TableRowProps> = ({
  note,
  editAction,
  archiveAction,
  deleteAction,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { deleteNote, archiveNote, unarchiveNote } = tableSlice.actions;
  const dispatch = useAppDispatch();
  const createdDate = parseISO(note.created).toLocaleDateString();

  const handleOpenEditModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDelete = () => {
    dispatch(deleteNote(note.id));
  };

  const handleArchive = () => {
    dispatch(archiveNote(note.id));
  };

  const handleUnarchive = () => {
    dispatch(unarchiveNote(note.id));
  };

  return (
    <tr key={note.id}>
      <td className="border border-gray-400 px-4 py-2">{note.name}</td>
      <td className="border border-gray-400 px-4 py-2">{createdDate}</td>
      <td className="border border-gray-400 px-4 py-2">{note.category}</td>
      <td className="border border-gray-400 px-4 py-2">{note.content}</td>
      <td className="border border-gray-400 px-4 py-2">
        {note.dates.map(date => (
          <div key={date}>{parseISO(date).toLocaleDateString()}</div>
        ))}
      </td>
      <td className="border border-gray-400 pr-4">
        <span className="flex gap-3 items-center justify-end">
          {editAction ? (
            <IconBtn
              icon={<FiEdit size={25} />}
              onClick={handleOpenEditModal}
            />
          ) : (
            ''
          )}
          <ModalEditNote
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            note={note}
          />
          <IconBtn
            icon={<BiArchiveIn size={25} />}
            onClick={archiveAction ? handleArchive : handleUnarchive}
          />
          {deleteAction ? (
            <IconBtn
              icon={<HiOutlineTrash size={25} />}
              onClick={handleDelete}
            />
          ) : (
            ''
          )}
        </span>
      </td>
    </tr>
  );
};

export default TbodyRow;
