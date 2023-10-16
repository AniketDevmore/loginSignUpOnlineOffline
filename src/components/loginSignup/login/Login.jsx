import React from "react";
import "../LoginSignup.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  //  use form hook validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //    login button handler
  const onSubmit = (data) => {
    if (
      data.email === localStorage.getItem("email") &&
      data.password === localStorage.getItem("password")
    ) {
      navigate("/landingPage");
    } else {
      alert("Email or Password is invalid!");
    }
  };

  //   signup button handler
  const signupHandle = () => {
    navigate("/signup");
  };
  return (
    <div className="LoginSignupOuterDiv">
      <form className="loginSignupForm" onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        {/* structure for email */}
        <div className="loginSignupDiv">
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            id="email"
            placeholder="Email..."
            name="email"
            {...register("email", {
              required: "Email is required!",
              pattern: { value: /^\S+@\S+$/i, message: "Enter valid email!" },
            })}
          />
        </div>
        {errors.email && <p className="errorMsg">{errors.email.message}</p>}

        {/* structure for password */}
        <div className="loginSignupDiv">
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            id="password"
            placeholder="Password..."
            name="password"
            {...register("password", {
              required: "Password is required!",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/,
                message: `Password must contain One capital letter, One number, One special character and must be eight character long`,
              },
            })}
          />
        </div>
        {errors.password && (
          <p className="errorMsg">{errors.password.message}</p>
        )}

 {/* structure for buttons */}
        <div className="btnDiv">
          <button type="submit">Login</button>
          <button onClick={signupHandle}>New User</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
