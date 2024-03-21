import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function ViewPost() {
  const [post, setPost] = useState({}); // Initialize post as an object
  const { id } = useParams(); // Invoke useParams to get the parameter value
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.user.user);

  useEffect(() => {
    axios
      .get(`https://onepost-jkw9.onrender.com/api/post/getSinglePost/${id}`)
      .then((response) => {
        setPost(response.data.post); // Update the post state with the received data
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleDelete = (postId) => {
    axios
      .delete(
        `https://onepost-jkw9.onrender.com/api/post/deleteSinglePost/${postId}`
      )
      .then((response) => {
        navigate("/home"); // Redirect to home page after successful deletion
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card mt-2">
            <h4 className="card-title text-center">{post.title}</h4>
            <img
              style={{
                height: "300px",
                objectFit: "contain",
              }}
              src={post.image}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h6 className="card-text  ">{post.description}</h6>
              <p className="text ">{post.postType}</p>
              <div className="d-flex justify-content-center">
                {userInfo && userInfo.email === post.email ? (
                  <>
                    <Link to={`/edit/${post._id}`} className="btn btn-warning">
                      EDIT
                    </Link>
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="btn btn-danger mx-3"
                    >
                      DELETE
                    </button>
                  </>
                ) : (
                  <>
                    {/* Handle case when userInfo is null */}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPost;
