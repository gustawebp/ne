"use client";

import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useSearch } from "../hooks/useSearch";

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

  const { filteredData, searchTerm, setSearchTerm } = useSearch(posts, [
    "body",
    "title",
    "author.name",
    ,
  ]);

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
    <div className="tw-py-1 min">
      <div className="card-header ac d-flex tw-justify-between">
        <h5 className="mb-3">Last posts</h5>
        <input
          className="input-text"
          value={searchTerm}
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="row">
        {filteredData.map((post) => (
          <div key={post.id} className="col-md-4 tw-mb-3">
            <div className="card card-post tw-shadow-md">
              <div className="card-header">
                <img
                  src={post.cover}
                  className="card-img-top"
                  alt={post.title}
                />

                <h5 className="card-title tw-text-lg tw-font-semibold mt-3">
                  {post.title}
                </h5>
              </div>

              <div className="card-body">
                <p className="card-text tw-text-sm mb-3">{post.body}</p>
              </div>
              <div className="card-footer tw-text-white">
                <div className="d-flex align-items-center">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="tw-w-10 tw-h-10 tw-rounded-full tw-mr-3"
                  />
                </div>
                <div>
                  <p className="mb-0 tw-font-medium">{post.author.name}</p>
                  <p className="tw-text-sm tw-text-gray-500">
                    @{post.author.username}
                  </p>
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
