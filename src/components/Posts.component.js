import axios from "axios";
import { useState, useEffect } from "react";
import Post from "./Post.component";
const apiUrl = process.env.REACT_APP_API_URL;

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}/posts/`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deletePost = (id) => {
    axios
      .delete(`${apiUrl}/posts/` + id)
      .then((res) => {
        setPosts(posts.filter((el) => el._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {posts.map((post) => (
        <Post key={post._id} post={post} deletePost={deletePost} />
      ))}
    </div>
  );
};

export default Posts;
