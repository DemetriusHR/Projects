import React from "react";
import PostWrapper from "./Post.Style";
import PostHeader from "./PostHeader/PostHeader";

const Post = (props) => {
  const fields = props.data;

  return fields.map(field => (
    <PostWrapper key={field.id}>
      <div style={{ padding: "30px" }}>
        <PostHeader img={field.img} name={field.name} moment={field.moment} />
        <p className="post-context">{field.context}</p>
      </div>
    </PostWrapper>
  ));
};

export default Post;
