import React from "react";

interface Post {
  id: number;
  name: string;
  studentid: number;
}

interface HomeProps {
  posts: Post[];
}

const Fetchdata: React.FC<HomeProps> = ({ posts }) => {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.name} {post.studentid}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fetchdata;
