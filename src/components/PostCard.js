import React from 'react';
import { FiHeart } from 'react-icons/fi';
import '../styles/_PostCard.scss';

function PostCard({ post, onLike, onDelete }) {
  return (
    <div className="post-card">
      <div className="post-header">
        <h3>{post.title}</h3>
        <p className="post-date">{post.date}</p>

      </div>

      {post.image && (
        <img src={post.image} alt="post visual" className="post-image" />
      )}

      <p className="post-text">{post.text}</p>

      <div className="post-footer">
        <button className="like-button" onClick={onLike}>
          <FiHeart className={post.liked ? 'liked' : ''} />
        </button>
        <span className="like-count">{post.liked ? 1 : 0}</span>
      </div>
    </div>
  );
}

export default PostCard;
