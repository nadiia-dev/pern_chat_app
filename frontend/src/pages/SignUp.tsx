import { Link } from "react-router-dom";
import GenderCheckbox from "../components/GenderCheckbox";
import { useState, type FormEvent } from "react";
import useSignup from "../hooks/useSignup";

const SignUp = () => {
  const [inputValues, setInputValues] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender: "male" | "female") => {
    setInputValues({ ...inputValues, gender });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    signup(inputValues);
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-md mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <div>
            <label className="label">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered  h-10"
              value={inputValues.fullName}
              onChange={(e) =>
                setInputValues({ ...inputValues, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
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

          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={inputValues.confirmPassword}
              onChange={(e) =>
                setInputValues({
                  ...inputValues,
                  confirmPassword: e.target.value,
                })
              }
            />
          </div>

          <GenderCheckbox
            selectedGender={inputValues.gender}
            handleCheckboxChange={handleCheckboxChange}
          />

          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white"
          >
            Already have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700">
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
