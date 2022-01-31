import { Link } from "react-router-dom";

const Post = ({ post, deletePost }) => {
  return (
    <div className="blog-preview" key={post._id}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Link to={`/edit/${post._id}`}>
        <button type="button">edit</button>
      </Link>
      <button
        type="button"
        onClick={() => {
          deletePost(post._id);
        }}
      >
        delete
      </button>
      <br />
    </div>
  );
};

export default Post;
