import React from "react";
import PopularPages from "./PopularPages";

function Home() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12 mx-auto">
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/3783512/pexels-photo-3783512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Slide 1"
                  style={{ maxHeight: "570px" }} // Set maximum height here
                />
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/5325106/pexels-photo-5325106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Slide 2"
                  style={{ maxHeight: "570px" }} // Set maximum height here
                />
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
     <h1 className="text-center my-2">Popular Posts </h1>
     
      <PopularPages />

    </div>
  );
}

export default Home;
