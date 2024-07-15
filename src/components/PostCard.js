"use client"; // Adicione esta linha no topo do arquivo

import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3042/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Erro ao buscar os posts:", error));
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="tw-py-5 min ac jc">
        <div className="row">
          <h1 className="loading-icon tw-animate-spin">
            <AiOutlineLoading3Quarters />
          </h1>
        </div>
      </div>
    );
  }
  return (
    <div className="tw-py-5 min">
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-4 tw-mb-4">
            <div className="card tw-shadow-lg">
              <img src={post.cover} className="card-img-top" alt={post.title} />
              <div className="card-body">
                <h5 className="card-title tw-text-xl tw-font-semibold">
                  {post.title}
                </h5>
                <p className="card-text">{post.body}</p>
                <div className="d-flex align-items-center">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="tw-w-10 tw-h-10 tw-rounded-full tw-mr-3"
                  />
                  <div>
                    <p className="mb-0 tw-font-medium">{post.author.name}</p>
                    <p className="tw-text-sm tw-text-gray-500">
                      @{post.author.username}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
