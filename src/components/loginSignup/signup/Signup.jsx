import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //    creating new user
  const onSubmit = (data) => {
    if (data.password === data.conirmPassword) {
      localStorage.setItem("firstName", data.firstName);
      localStorage.setItem("lastName", data.lastName);
      localStorage.setItem("email", data.email);
      localStorage.setItem("mobile", data.mobile);
      localStorage.setItem("password", data.password);
      navigate("/");
    } else {
      alert("Please confirm your password!");
    }
  };
  return (
    <div
      style={{ height: "calc(100vh + 500px" }}
      className="LoginSignupOuterDiv"
    >
      <form className="loginSignupForm" onSubmit={handleSubmit(onSubmit)}>
        <h1>Registration page</h1>

        {/* structure for first name */}
        <div className="loginSignupDiv">
          <label htmlFor="firstName">First Name : </label>
          <input
            type="text"
            id="firstName"
            placeholder="First Name..."
            name="firstName"
            {...register("firstName", {
              required: "First Name is required!",
            })}
          />
        </div>
        {errors.firstName && (
          <p className="errorMsg">{errors.firstName.message}</p>
        )}

        {/* structure for last name */}
        <div className="loginSignupDiv">
          <label htmlFor="lastName">Last Name : </label>
          <input
            type="text"
            id="lastName"
            placeholder="Last Name..."
            name="lastName"
            {...register("lastName", {
              required: "Last Name is required!",
            })}
          />
        </div>
        {errors.lastName && (
          <p className="errorMsg">{errors.lastName.message}</p>
        )}

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

        {/* structure for mobile number */}
        <div className="loginSignupDiv">
          <label htmlFor="mobile">Mobile No. : </label>
          <input
            type="tel"
            id="mobile"
            placeholder="Mobile..."
            name="mobile"
            {...register("mobile", {
              required: "Mobile Number is required!",
            })}
          />
        </div>
        {errors.mobile && <p className="errorMsg">{errors.mobile.message}</p>}

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

        {/* structure for confirm password */}
        <div className="loginSignupDiv">
          <label htmlFor="conirmPassword">Confirm Password : </label>
          <input
            type="password"
            id="conirmPassword"
            placeholder="Confirm Password..."
            name="conirmPassword"
            {...register("conirmPassword", {
              required: "Password Confirmation is required!",
            })}
          />
        </div>
        {errors.conirmPassword && (
          <p className="errorMsg">{errors.conirmPassword.message}</p>
        )}

        {/* structure for buttons */}
        <div className="btnDiv">
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
