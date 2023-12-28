import { createContext, useEffect, useState } from "react";
import Header from "./Header";
import Post from "./Post";
export const PostsContext = createContext();

export const Layout = () => {
  const url = "https://jsonplaceholder.typicode.com/posts/";
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setPosts(result);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <PostsContext.Provider value={posts}>
      <Header />
      <Post />
    </PostsContext.Provider>
  );
};
