import React from "react";
import { Link, useParams } from "react-router-dom";
import { PostsContext } from "./Layout";

const NavBar = () => {
  const posts = React.useContext(PostsContext);
  const users = posts.map((post) => {
    return {
      name: `User ${post?.userId}`,
      ...post,
    };
  });
  const uniqueUsers = users.reduce((acc, user) => {
    if (!acc[user.userId]) {
      acc[user.userId] = user;
    }
    return acc;
  }, {});
  const { userId } = useParams();
  return (
    <nav className="nav">
      {Object.values(uniqueUsers).map((user) => {
        return (
          <div
            key={user?.userId}
            className={userId == user.userId ? "list active-link" : "list"}
          >
            <Link to={`/posts/${user.userId}`}>{user.name}</Link>
          </div>
        );
      })}
    </nav>
  );
};

export default NavBar;
