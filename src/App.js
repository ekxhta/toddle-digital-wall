import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import BoardCard from './components/BoardCard';
import BoardModal from './components/BoardModal';
import BoardPage from './components/BoardPage'; 
import './styles/App.scss';

function App() {
  const [boards, setBoards] = useState([
    { id: 1, title: 'Earth Changes and Journeys', color: '#C5F6FA' },
    { id: 2, title: 'Eating Right', color: '#FFF3BF' }
  ]);

  const [selectedBoard, setSelectedBoard] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const navigate = useNavigate();

  const handleCreateBoard = (newBoard) => {
    if (selectedBoard) {
      setBoards(boards.map((b) => (b.id === selectedBoard.id ? { ...b, ...newBoard } : b)));
    } else {
      const newId = Date.now();
      setBoards([...boards, { id: newId, ...newBoard }]);
      navigate(`/board/${newId}`);
    }

    setShowCreateModal(false);
    setSelectedBoard(null);
  };

  return (
    <Routes>
  
      <Route
        path="/"
        element={
          <div className="toddle-container">
            <Navbar onCreateClick={() => setShowCreateModal(true)} />

            <div className="board-bar">
              <h2>My boards</h2>
            </div>

            <div className="board-columns">
              {boards.map((board) => (
                <BoardCard
                  key={board.id}
                  title={board.title}
                  color={board.color}
                  onClick={() => navigate(`/board/${board.id}`)}
                  onEdit={() => {
                    setSelectedBoard(board);
                    setShowCreateModal(true);
                  }}
                  onDelete={() => {
                    const updated = boards.filter((b) => b.id !== board.id);
                    setBoards(updated);
                  }}
                />
              ))}
            </div>

            {showCreateModal && (
              <BoardModal
                isCreate
                board={selectedBoard}
                onCreate={handleCreateBoard}
                onClose={() => {
                  setShowCreateModal(false);
                  setSelectedBoard(null);
                }}
              />
            )}
          </div>
        }
      />

     
      <Route path="/board/:id" element={<BoardPage boards={boards} />} />
    </Routes>
  );
}

export default App;
