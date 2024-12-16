import React from "react";
import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList );

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionElement = useRef();
  const tagsElement = useRef();
  const handelSubmit = (event) => {
    event.preventDefaut();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reaction = reactionElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value=" ";
    postTitleElement.current.value=" ";
    postBodyElement.current.value=" ";
    reactionElement.current.value=" ";
    tagsElement.current.value.split(" ")=" ";

    addPost(userId, postTitle, postBody, reaction, tags);

  };
  return (
    <form className="create-post" onSubmit={handelSubmit}>
      <div className="mb-3">
        <label htmlFor="User Id" className="form-label">
          Enter your User Id
        </label>
        <input
          ref={userIdElement}
          type="number"
          className="form-control"
          id="User Id"
          placeholder="User Id "
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          ref={postTitleElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter The title name"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Body" className="form-label">
          Post Body
        </label>
        <textarea
          ref={postBodyElement}
          rows="4"
          type="text"
          className="form-control"
          id="body"
          placeholder="Tell us more about it "
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          No of Reaction
        </label>
        <input
          ref={reactionElement}
          type="number"
          className="form-control"
          id="reaction"
          placeholder="How many people reacted to this post "
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter you hastage
        </label>
        <input
          ref={tagsElement}
          type="number"
          className="form-control"
          id="tags"
          placeholder=" Please Enter your hastage using space "
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
