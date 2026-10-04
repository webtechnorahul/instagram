

import React, { useRef, useState } from 'react';
import { AiOutlineCloudUpload, AiOutlineClose } from 'react-icons/ai';
import '../style/CreatePost.css';
import {usePost} from '../hooks/usePost';

export default function CreatePost() {
  const [caption, setCaption] = useState('');
  const [imagePreview, setImagePreview] = useState(null); 
  
  const imageInputFieldRef = useRef(null);
  const { createNewPost } = usePost();

  // 1. Manually trigger the hidden file input when the box is clicked
  const handleBoxClick = () => {
    if (imageInputFieldRef.current) {
      imageInputFieldRef.current.click();
    }
  };

  // 2. Read the file from the input and generate a preview
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Gets the first selected file
    if (file) {
      setImagePreview(URL.createObjectURL(file)); // Makes a temporary URL for the <img> tag
    }
  };

  // 3. Completely clear the input ref and state
  const removeImage = (e) => {
    if (e) e.stopPropagation(); // Prevents reopening the file picker when clicking the close button
    if (imageInputFieldRef.current) {
      imageInputFieldRef.current.value = ""; // Empties the actual input ref
    }
    setImagePreview(null); 
  };

  const handleShare = async (e) => {
    e.preventDefault();
    
    // Safely pull the file straight out of the ref
    const file = imageInputFieldRef.current?.files[0];
    if (!file) {
      alert('Please upload an image first!');
      return;
    }

    try {
      await createNewPost({
        caption: caption.trim(),
        image: file // Sends the raw file object to your hook
      });
      
      alert('Post Shared Successfully!');
      setCaption('');
      removeImage();
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to share post. Try again.");
    }
  };

  return (
    <div className="post-create-card">
      <h2 className="post-card-title">Create New Post</h2>
      
      <form onSubmit={handleShare} className="post-form">
        
        {/* File Upload / Preview Box */}
        <div className="image-upload-wrapper" onClick={imagePreview ? null : handleBoxClick}>
          {imagePreview ? (
            <div className="image-preview-container">
              <img src={imagePreview} alt="Preview" className="uploaded-image" />
              <button type="button" className="remove-image-btn" onClick={removeImage}>
                <AiOutlineClose />
              </button>
            </div>
          ) : (
            <div className="upload-placeholder">
              <AiOutlineCloudUpload className="upload-icon" />
              <span>Select image from computer</span>
            </div>
          )}

          {/* Hidden native file input completely managed by the ref */}
          <input 
            type="file" 
            accept="image/*" 
            ref={imageInputFieldRef}
            onChange={handleImageChange}
            className="hidden-file-input" 
            style={{ display: 'none' }} // Ensures it stays completely invisible
          />
        </div>

        {/* Caption Section */}
        <div className="caption-wrapper">
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Write a caption..."
            maxLength={2200}
            rows={4}
            className="caption-textarea"
          />
        </div>

        {/* Submit Action Button */}
        <button type="submit" className="share-post-btn" disabled={!imagePreview}>
          Share Post
        </button>

      </form>
    </div>
  );
}
