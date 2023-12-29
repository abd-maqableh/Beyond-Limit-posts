import React from "react";
import { Link, useParams } from "react-router-dom";
import { PostsContext } from "./Layout";

const NavBar = () => {
  const posts = React.useContext(PostsContext);
  const uniqueUsers = posts.reduce((acc, user) => {
    if (!acc[user.userId]) {
      acc[user.userId] = {
        ...user,
        name: `User ${user.userId}`,
      };
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
