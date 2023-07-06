import React, { useState } from 'react';
import EditModal from './EditModal';
import ConfirmationModal from './ConfirmationModal';

const UserCard = ({ user }) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setIsLiked(prevIsLiked => !prevIsLiked);
    };

    const handleEdit = () => {
        setIsEditModalOpen(true);
    };

    const handleDelete = () => {
        setIsConfirmationOpen(true);
    };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 mt-8">
      <img
        src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
        alt="User Avatar"
        className="w-24 h-24 rounded-full mx-auto"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{user.username} {user.name}</div>
        <p className="text-gray-700 text-base"><span className="font-semibold">Email - </span>{user.email}</p>
        <p className="text-gray-700 text-base"><span className="font-semibold">Phone - </span>{user.phone}</p>
        <p className="text-gray-700 text-base"><span className="font-semibold">Address - </span>{user.address.street}, {user.address.city}</p>
        <p className="text-gray-700 text-base"><span className="font-semibold">Zipcode - </span>{user.address.zipcode}</p>
        <p className="text-gray-700 text-base"><span className="font-semibold">Company - </span>{user.company.name}</p>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <button
          className={` text-white font-bold py-2 px-4 rounded ${
            isLiked ? 'bg-sky-500 hover:bg-sky-700' : 'bg-slate-500 hover:bg-slate-700'
          }`}
          onClick={handleLike}
        >
          {isLiked ? 'Liked' : 'Like'}
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-1"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-1"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
      {isEditModalOpen && (
        <EditModal
          user={user}
          closeModal={() => setIsEditModalOpen(false)}
        />
      )}
      {isConfirmationOpen && (
        <ConfirmationModal
          user={user}
          closeConfirmationModal={() => setIsConfirmationOpen(false)}
        />
      )}
    </div>
  );
};

export default UserCard;
