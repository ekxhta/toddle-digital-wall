import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PostCard from './PostCard';
import PostModal from './PostModal';
import CreateButton from './CreateButton';
import '../styles/_BoardPage.scss';
import toddleLogo from '../images/toddle_small.png';


import {
  DragDropContext,
  Droppable,
  Draggable
} from 'react-beautiful-dnd';

function BoardPage({ boards }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const board = boards.find((b) => b.id.toString() === id);

  const [posts, setPosts] = useState([]);
  const [showPostModal, setShowPostModal] = useState(false);

  if (!board) return <div>Board not found</div>;

  const handleCreatePost = (post) => {
    setPosts([...posts, post]);
  };

  const handleLikePost = (postId) => {
    setPosts(posts.map((p) =>
      p.id === postId ? { ...p, liked: !p.liked } : p
    ));
  };

  const handleDeletePost = (postId) => {
    setPosts(posts.filter((p) => p.id !== postId));
  };

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const updated = Array.from(posts);
    const [moved] = updated.splice(source.index, 1);
    updated.splice(destination.index, 0, moved);
    setPosts(updated);
  };

  return (
    <div className="board-page">
      <div className="board-top-bar">
        <div className="board-title-wrap">
          <button className="back-btn" onClick={() => navigate("/")}>←</button>
         <img src={toddleLogo} alt="Toddle Logo" className="avatar-logo" />

          <h1>{board.title}</h1>
        </div>
        <CreateButton create="post" onClick={() => setShowPostModal(true)} />
      </div>

      <div className="post-section">
        <h2>Your posts</h2>

        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="posts">
            {(provided) => (
              <div
                className="post-list"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {posts.length === 0 ? (
                  <div className="empty-state">
                    <p><strong>Nothing here yet</strong><br />Click the button above to add your first post!</p>
                  </div>
                ) : (
                  posts.map((post, index) => (
                    <Draggable key={post.id} draggableId={post.id.toString()} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <PostCard
                            post={post}
                            onDelete={() => handleDeletePost(post.id)}
                            onLike={() => handleLikePost(post.id)}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>

      {showPostModal && (
        <PostModal
          onCreate={handleCreatePost}
          onClose={() => setShowPostModal(false)}
        />
      )}
    </div>
  );
}

export default BoardPage;
