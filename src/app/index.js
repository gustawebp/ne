import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PostCard from "../components/PostCard.js";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3042");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <main className="tw-container tw-mx-auto tw-p-4">
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
