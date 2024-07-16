import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
// const loginUrl = "http://localhost:3001/api/auth/login";
// const loginStorageKey = "event-schedule-token";

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3001/api/auth/login", data)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/");
      });
  };

  return (
    <>
      <div className="flex min-h-[90vh] items-center justify-center bg-gradient-to-r from-blue-100 via-cyan-100 to-violet-100">
        <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <h4 className="block text-3xl font-bold leading-snug tracking-normal text-blue-gray-900">
            Login
          </h4>
          <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            We are Happy to see you back
          </p>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-4 flex flex-col gap-6">
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-sky-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder="Email"
                  type="email"
                  {...register("email")}
                />
                <label className="before:content[' '] after:content[' '] labelForm">
                  Email
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  type="password"
                  className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-sky-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder="Add your password"
                  {...register("password")}
                />
                <label className="before:content[' '] after:content[' '] labelForm">
                  Password
                </label>
              </div>
            </div>

            <button className="btnSky" data-ripple-light="true" type="submit">
              Login
            </button>
          </form>
          <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Don't have an account?
            <NavLink to="/signup">
              <span
                className="font-semibold text-sky-500 transition-colors hover:text-blue-700 ml-2"
                href="#"
              >
                Register here
              </span>
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}
