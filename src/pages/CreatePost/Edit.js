import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Edit() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [postType, setPostType] = useState("");
  const [file, setFile] = useState("");
  const { id } = useParams(); // Invoke useParams to get the parameter value

  const Navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://onepost-jkw9.onrender.com/api/post/getSinglePost/${id}`)
      .then((response) => {
        const postData = response.data.post;
        setTitle(postData.title);
        setDescription(postData.description);
        setPostType(postData.postType);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("postType", postType);
    if (file) {
      formData.append("file", file);
    }

    axios
      .put(`https://onepost-jkw9.onrender.com/api/post/updatePost/${id}`, formData)
      .then((response) => {
      
        Navigate("/home");
      })
      .catch((error) => {
        console.log(error);
    
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-8 mx-auto mt-5">
          <h5 className="card-title text-center pt-4">Edit Post</h5>
          <div className="card-body">
            <form onSubmit={handleUpdate}>
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
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
