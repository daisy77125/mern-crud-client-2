import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
const apiUrl = process.env.REACT_APP_API_URL;

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${apiUrl}/posts/` + id)
      .then((response) => {
        setTitle(response.data.title);
        setContent(response.data.content);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const post = {
      title,
      content,
    };

    axios.post(`${apiUrl}/posts/update/${id}`, post).then((res) => {
      navigate("/");
    });

    setTitle("");
    setContent("");
  };

  return (
    <div className="create">
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

        <button>Edit Blog</button>
      </form>
    </div>
  );
};

export default EditPost;
