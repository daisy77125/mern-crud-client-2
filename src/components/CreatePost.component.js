import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const apiUrl = process.env.REACT_APP_API_URL;

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const post = {
      title,
      content,
    };

    axios.post(`${apiUrl}/posts/add`, post).then((res) => {
      navigate("/");
    });

    setTitle("");
    setContent("");
  };

  return (
    <div className="create">
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Content:</label>
        <textarea
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default CreatePost;
