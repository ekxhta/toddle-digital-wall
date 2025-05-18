
import React, { useState } from 'react';
import '../styles/_BoardModal.scss';

function BoardModal({ board, isCreate = false, onCreate, onClose }) {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('');

  const colors = ['#B2F1E1', '#D8D1FF', '#FFD6DB', '#FFD77D'];

  const handleCreate = () => {
    if (title && color) {
      onCreate({ title, color });
      onClose();
    }
  };

  if (!board && !isCreate) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>

        {isCreate ? (
          <>
            <h2>Add a name for your board</h2>
            <input
              type="text"
              placeholder="Places around the world"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <h3>Select post colour</h3>
            <p>Here are some templates to help you get started</p>

            <div className="color-options">
              {colors.map((c) => (
                <div
                  key={c}
                  className={`color-circle ${color === c ? 'selected' : ''}`}
                  style={{ backgroundColor: c }}
                  onClick={() => setColor(c)}
                />
              ))}
            </div>

            <button className="create-button" onClick={handleCreate}>
              Create board
            </button>
          </>
        ) : (
          <>
            <h2>{board.title}</h2>
            <p>
              Color: <span className="color-chip" style={{ backgroundColor: board.color }}>{board.color}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default BoardModal;
