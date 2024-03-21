import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { persistor } from "../../app/store";

import { logout } from "../../app/features/User/userSclice";

import axios from "axios";
function Navbar() {
  const userInfo = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = async () => {
   
    try {
      dispatch(logout());

      await persistor.flush();
      await persistor.purge();
      
      const response = await axios.get("http://localhost:5000/api/user/logout");
      console.log(response.data);

    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-sm  bg-primary ">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/home">
            HShare
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>

              {userInfo ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/create">
                      Create Post
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="btn btn-danger"
                      onClick={handleLogout}
                      to="/login"
                    >
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">
                    login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
