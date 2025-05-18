import React, { useState } from 'react';
import '../styles/_BoardModal.scss';
function PostModal({ onCreate, onClose }) {
  const [subject, setSubject] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');

 const handleCreate = () => {
  if (subject || content || image) {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
    }); 

    onCreate({
      title: subject,
      text: content,
      image,
      liked: false,
      id: Date.now(),
      date: formattedDate
    });

    onClose();
  }
};


  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>

        <h2>Create a post</h2>
        <p className="modal-subtext">Write something for your post</p>

        <label>Subject</label>
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <label htmlFor="image-upload" className="image-upload-label">
        Add your image
        </label>
        <input
          id="image-upload"
          type="text"
          placeholder="Paste image URL here"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <label>What’s on your mind?</label>
        <textarea
          placeholder="Type here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button className="create-button" onClick={handleCreate}>
          Publish
        </button>
      </div>
    </div>
  );
}

export default PostModal;
