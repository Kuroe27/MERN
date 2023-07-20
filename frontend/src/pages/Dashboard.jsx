import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createPost, deletePost, getPosts } from "../features/posts/postSlice";
import Spinner from "../components/Spinner";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const [text, setText] = useState("");
  const navigate = useNavigate;
  const dispatch = useDispatch();

  const { posts, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.posts
  );
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getPosts());
  }, [user, message, navigate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost({ text }));
  };

  return (
    <div>
      <p>asd</p>
      <p>{user && user.name}</p>

      <section>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setText(e.target.value)} />
          <button type="submit">create</button>
        </form>
      </section>
      <section>
        <ul>
          {posts.map((post) => (
            <li key={post._id}>
              {post.text}
              <button onClick={() => dispatch(deletePost(post._id))}>x</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
