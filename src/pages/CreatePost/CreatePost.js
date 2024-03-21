import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePost() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [postType, setPostType] = useState("");
  const [file, setFile] = useState("");
  const navigate = useNavigate(); // Get the navigate function from React Router


  const userInfo = useSelector((state) => state.user.user);

  const handlePost = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("postType", postType);
    formData.append("file", file);
    formData.append("user", userInfo.email);

    try {
      const response = await axios.post(
        "https://onepost-jkw9.onrender.com/api/post/createPost",
        formData
      );
      console.log(response);

      if (response.status === 200 || response.status === 201) {
        
        navigate("/home");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-8 mx-auto mt-5">
          <h5 className="card-title text-center pt-4">Create Post</h5>
          <div className="card-body">
            <form onSubmit={handlePost}>
              <div className="mb-3">
                <label className="form-label">Post Title</label>
                <input
                  type="text"
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Post Description</label>
                <input
                  type="text"
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <label className="form-label">Post Body Text</label>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  value={postType}
                  onChange={(e) => setPostType(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-3 mt-3">
                <label className="form-label">Post Image</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
