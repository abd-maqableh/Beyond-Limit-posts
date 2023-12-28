import React from "react";
import { useParams } from "react-router-dom";
import { PostsContext } from "./Layout";

const Post = () => {
  const { userId } = useParams();
  const posts = React.useContext(PostsContext);
  const userPost = posts.filter((post) => post.userId === Number(userId));

  if (!userPost?.length) {
    return <div>No post found for user {userId}</div>;
  }

  return (
    <div className="post-warper">
      {userPost.map((post, index) => {
        return (
          <div key={post?.id} className="post-item clearfix">
            <h3 className="post-item clearfix">{`${index + 1}-${
              post?.title
            }`}</h3>
            <p className="post-excerpt">{post?.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
