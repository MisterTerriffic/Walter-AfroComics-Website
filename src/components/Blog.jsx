import { useState } from "react";

function Blog(){
    const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  const handleCreateBlogPost = (e) => {
   e.preventDefault();
   const blog = {
    title: e.target.title.value,
    post: e.target.post.value
   };

  return(
    <div>
        <h1>Create a New Blog Post</h1>
        <Input
            placeholder="Title"
            value={e.target.title}
            onChange={(e) =>
              setNewPost((prev) => ({ ...prev, title: e.target.value }))
            }
          />

    </div>
  )
  };
};

export default Blog;