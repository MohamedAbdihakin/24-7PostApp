import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://onepost-jkw9.onrender.com/api",
});

function PopularPages() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axiosInstance
      .get("/post/getAllPosts")
      .then((response) => {
        
        setPosts(response.data.posts);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="">
      <div className="row mx-2">
        {posts.map((post) => (
          <div
            key={post._id}
            className="col-md-3"
            style={{
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: "#000000",
              borderRadius: "10px",
              padding: "10px",
              margin: "10px",
            }}
          >
            <div className="postIamge">
              <img
                style={{
                  width: "100%",
                }}
                src={post.image}
                alt="postImage"
              />
            </div>

            <div className="posttile text-center p-2">
              <h6
                style={{
                  paddingLeft: "5px",
                  marginTop: "0px",
                  marginBottom: "0px",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                {post.title}
              </h6>
            </div>
            <div className="read d-flex justify-content-center">
              <Link to={`/view/${post._id}`} className="btn btn-primary">
                Read Post
              </Link>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularPages;
