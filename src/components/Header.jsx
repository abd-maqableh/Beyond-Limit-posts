import React from "react";
import NavBar from "./NavBar";
import { PostsContext } from "./Layout";

const Header = () => {
  const posts = React.useContext(PostsContext);
  return (
    <header className="header">
      <h1>Post feed</h1>
      <NavBar />
      <div> {posts?.length} Post</div>
    </header>
  );
};

export default Header;
