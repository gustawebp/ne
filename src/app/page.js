import { Card } from "react-bootstrap";
import Posts from "@/components/PostCard";
export default function Home() {
  return (
    <div className="card mh-100 tw-overflow-auto tw-rounded-md p-3 min">
      <Posts />
    </div>
  );
}
