import React, {useContext} from 'react';
import { UserContext } from '../UserContext';


const ConfirmationModal = ({ user, closeConfirmationModal }) => {
	const { handleDeleteUser } = useContext(UserContext);

	const handleConfirmDelete = () => {
    handleDeleteUser(user.id);
    closeConfirmationModal();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white rounded-lg overflow-hidden max-w-md">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Confirm Delete</div>
          <p className="text-gray-700 text-base">
            Are you sure you want to delete the data of <span className="font-bold">{user.username} {user.name}</span>?
          </p>
          <div className="flex justify-end mt-4">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleConfirmDelete}
            >
              Delete
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
              onClick={closeConfirmationModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
