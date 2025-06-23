import { useState, useEffect } from "react";

function Blog(){
    const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [editingPostId, setEditingPostId] = useState(null);

useEffect(() => {
    fetch("/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Failed to fetch posts", error));
  }, []);

  const handleCreatePost = () => {
    fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((createdPost) => {
        setPosts(createdPost);
        setNewPost({ title: "", content: "" });
      })
      .catch(console.log("Error"));
  };

  const handleUpdatePost = () => {
    fetch(`/api/posts/${editingPostId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((updatedPost) => {
        setPosts(posts.map((p) => (p.id === editingPostId ? updatedPost : p)));
        setEditingPostId(null);
        setNewPost({ title: "", content: "" });
      })
      .catch(console.log("Error"));
  };

  const handleDeletePost = (postId) => {
    fetch(`/api/posts/${postId}`, { method: "DELETE" })
      .then(() => {
        setPosts(posts.filter((post) => post.id !== postId));
      })
      .catch(console.log("Error"));
  };

  const handleEdit = (post) => {
    setNewPost({ title: post.title, content: post.content });
    setEditingPostId(post.id);
  };

  const handleAddComment = (postId, comment) => {
    fetch(`/api/posts/${postId}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: comment }),
    })
      .then((response) => response.json())
      .then((updatedPost) => {
        setPosts(posts.map((post) => (post.id === postId ? updatedPost : post)));
      })
      .catch(console.log("Error"));
  };

  return (
    <div className="blog-container">
      <div className="blog-form">
        <h2>
          Create a Blog Post
        </h2>
        <input
          placeholder="Title"
          value={newPost.title}
          onChange={(e) =>
            setNewPost((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <input
          placeholder="What's on your mind?"
          value={newPost.content}
          onChange={(e) =>
            setNewPost((prev) => ({ ...prev, content: e.target.value }))
          }
        />
        {editingPostId ? (
          <button onClick={handleUpdatePost}>Update</button>
        ) : (
          <button onClick={handleCreatePost}>Post</button>
        )}
      </div>

      {posts.map((post) => (
        <div key={post.id} className="blog-post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <div>
            <button onClick={() => handleEdit(post)}>Edit</button>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          </div>
          <div>
            <h4>Comments:</h4>
            {post.comments.map((comment) => (
              <p key={comment.id} className="comment-text">
                - {comment.text}
              </p>
            ))}
            <input postId={post.id} onAddComment={handleAddComment} />
          </div>
        </div>
      ))}
    </div>
  );
};


export default Blog;