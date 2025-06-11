import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [inputValues, setInputValues] = useState({
    username: "",
    password: "",
  });

  const { loading, login } = useLogin();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    login(inputValues);
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-md mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-white">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={inputValues.username}
              onChange={(e) =>
                setInputValues({ ...inputValues, username: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={inputValues.password}
              onChange={(e) =>
                setInputValues({ ...inputValues, password: e.target.value })
              }
            />
          </div>
          <Link
            to="/signup"
            className="text-sm  hover:underline text-white hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2">
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
