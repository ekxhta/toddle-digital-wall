import React, { useState } from 'react';
import { FiMoreVertical, FiEdit, FiTrash2 } from 'react-icons/fi';

import '../styles/_BoardCard.scss';

function BoardCard({ title, color, onClick, onEdit, onDelete }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation(); // prevent board click
    setShowMenu((prev) => !prev);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    onEdit();
    setShowMenu(false);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete();
    setShowMenu(false);
  };

  return (
    <div className="board-card" onClick={onClick}>
      <div className="color-bar" style={{ backgroundColor: color }}></div>

      <div className="board-content">
        <span className="board-title">{title}</span>

        <div className="menu-wrapper">
          <FiMoreVertical className="menu-icon" onClick={toggleMenu} />

          {showMenu && (
            <div className="dropdown-menu">
              <button onClick={handleEdit} >
               <FiEdit className="dropdown-icon" /> Edit
              </button>
              <button onClick={handleDelete}>
                <FiTrash2 className="dropdown-icon" /> Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BoardCard;
