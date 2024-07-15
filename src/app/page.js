"use client"; // Adicione esta linha no topo do arquivo

import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import Posts from "@/components/PostCard";
export default function Home() {
  const [activeNav, setActiveNav] = useState(1);
  return (
    <div className="card mh-100 tw-overflow-auto tw-rounded-md p-3 min">
      <div className="w-100 border-bottom p-2 nav">
        <span
          onClick={() => setActiveNav(0)}
          className={`${activeNav == 0 ? "active-nav" : ""} nav-item`}
        >
          Home
        </span>
        <span
          onClick={() => setActiveNav(1)}
          className={`${activeNav == 1 ? "active-nav" : ""} nav-item`}
        >
          Posts
        </span>
      </div>
      {activeNav == 1 && <Posts />}
    </div>
  );
}
