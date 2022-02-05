import React from "react";
import { Post, CommentWrite } from "../components";

const PostList = (props) => {
  return (
    <React.Fragment>
      <Post />
      <CommentWrite />
    </React.Fragment>
  );
};

export default PostList;
