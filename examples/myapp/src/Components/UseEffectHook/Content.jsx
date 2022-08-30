import React from "react";
import { useEffect, useState } from "react";

const Content = () => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        console.log(posts);
      });
  });

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      {console.log("Render")}
    </div>
  );
};

export default Content;
