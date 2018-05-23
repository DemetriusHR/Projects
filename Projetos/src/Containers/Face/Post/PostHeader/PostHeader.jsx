import React from "react";
import PropTypes from "prop-types";
import PostHeaderWrapper from "./PostHeader.Style";

const PostHeader = props => (
  <PostHeaderWrapper>
    <img src={props.img} className="img-style" alt="person"/>
    <div className="text">
      <span className="nickname"> {props.name}</span>
      <br />
      <span className="moment"> há {props.moment} min </span>
    </div>
  </PostHeaderWrapper>
);

PostHeader.propTypes = {
  img: PropTypes.string,
  nome: PropTypes.string.isRequired,
  tempo: PropTypes.string.isRequired
};

PostHeader.defaultProps = {
  img: 'https://www.pexels.com/photo/beach-bird-birds-buildings-14675/'
};

export default PostHeader;
