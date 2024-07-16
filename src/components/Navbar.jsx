import { NavLink } from "react-router-dom";
import Themes from "./Themes";
// const loginStorageKey = "event-schedule-token";
// {
//   authToken, setAuthToken, setUserID;
// }

export default function Navbar() {
  return (
    <nav id="header" className="w-full py-1 bg-base-100 shadow">
      <div className="container m-auto flex justify-between mt-0 py-2">
        <NavLink to="/">
          <h1 className="text-2xl text-info font-bold mr-10">EventS.</h1>
        </NavLink>

        <div
          className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between pt-4 md:pt-0 gap-8">
              <li className="font-bold text-lg hover:text-info">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="font-bold text-lg hover:text-info">
                <NavLink to="/create-event">Create Event</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div
          className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
          id="nav-content"
        >
          <div className="auth flex items-center w-full md:w-full gap-4">
            <Themes />
            {/* Not login */}
            <>
              <NavLink to="/login">
                <button className="bg-info text-neutral font-bold px-8 py-2 hover:bg-primary hover:text-base-100 hover:scale-110">
                  Login
                </button>
              </NavLink>

              <NavLink to="/signup">
                <button className="bg-base-100 border-2 border-info font-bold px-4 py-2 hover:bg-primary hover:border-0 hover:text-base-100">
                  Sign up
                </button>
              </NavLink>
            </>
            {/* Already login */}
            <>
              <button className="inline-flex bg-info p-2 relative hover:bg-primary hover:shadow">
                <span className="inline-flex gap-4 font-bold px-4 text-base-100">
                  Logout
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    className="bi bi-person-circle fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                    />
                  </svg>
                </span>
              </button>
            </>
          </div>
        </div>
      </div>
    </nav>
  );
}
