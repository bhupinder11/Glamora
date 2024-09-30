import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { validateSignUp } from "../utils/signUpValidation";
import { selectErrors, selectFormData } from "../utils/selector";
import { validateSignIn } from "../utils/signInValidation";
import { updateFormData } from "../reducers/signUpreducer";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errors = useSelector(selectErrors);
  const formData = useSelector(selectFormData) 
  // console.log(formData)
  // console.log(errors)


  const [signin, setSignin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [alreadyregistered, setAlreadyregistered] = useState(false);
  const [mismatch, setMismatch] = useState(false);
  const [notFound, setNotFound] = useState(false);

  // const [formData, setFormData] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });

  const handleChange = (e) => {
    let { name, value } = e.target;
    // setFormData({ ...formData, [e.target.name]: e.target.value })
    dispatch(updateFormData({ [name]: value }));
  };

  

  const handleSignup = async (e) => {
    e.preventDefault();
    const isValid = dispatch(validateSignUp());
    if (isValid ) {
      // console.log('validation done true')
      const res = await axios.post(
        "http://localhost:5000/users/register",
        formData
      );

      const data = res.data;
      if (data.alreadyregistered) {
        setAlreadyregistered(true);
      }

      let token = data.token;
      let user = data.user;
      if (data.success) {
        document.cookie = `token=${token}; path=/`;
        navigate("/home", { state: { user } });
      }
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    const isSignInValid = dispatch(validateSignIn());
    if (isSignInValid ) {
      console.log("sign in going through")
      const res = await axios.post(
        "http://localhost:5000/users/login",
        formData
      );
      const data = res.data;
      // console.log(data)
      if (data.userNotfound) {
        setNotFound(true);
      }

      if (data.mismatched) {
        setMismatch(true);
      }

      let token = data.token;
      let user = data.user;

      if (data.success) {
        document.cookie = `token=${token}; path=/`;
        navigate("/home");
      }
    }
  };

  const handleSignUp = () => {
    setSignup(true);
  };

  const handleSignin = () => {
    setSignin(true);
    // console.log("clicked")
  };

  return (
    <div>
      <div className="w-full h-screen flex px-20">
        <div className="w-1/2 flex items-center justify-center h-screen">
          <div className="w-full px-32">
            <h3 className="text-4xl">
              welcome to{" "}
              <span className="text-blue-400 font-semibold font-sans">
                Glamora.
              </span>
            </h3>
            <h4 className="text-2xl mb-5">create your account</h4>
            <form onSubmit={handleSignup} method="post">
              <input
                className="bg-zinc-100 block w-full px-3 py-2 border-[1px] rounded-md mb-3 border-zinc-200"
                type="text"
                placeholder="Full Name"
                name="fullname"
                onChange={handleChange}
              />
              {errors?.fullname && signup && (
                <h3 className="text-sm text-red-600 -mt-3 mb-2">
                  {errors.fullname}
                </h3>
              )}

              <input
                className="bg-zinc-100 block w-full px-3 py-2 border-[1px] rounded-md mb-3 border-zinc-200"
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
              {errors?.email && signup && (
                <h3 className="text-sm text-red-600 -mt-3 mb-2">
                  {errors.email}
                </h3>
              )}

              <input
                className="bg-zinc-100 block w-full px-3 py-2 border-[1px] rounded-md mb-3 border-zinc-200"
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              {errors?.password && signup && (
                <h3 className="text-sm text-red-600 -mt-3 mb-2">
                  {errors.password}
                </h3>
              )}

              {alreadyregistered && (
                <h3 className="mt-2 text-red-600 mb-2">
                  User Already Registered
                </h3>
              )}

              <input
                className="px-5 rounded-full py-3 mt-2 bg-blue-500 text-white hover:bg-blue-600 hover:cursor-pointer drop-shadow-2xl"
                type="submit"
                value="Create My Account"
                onClick={handleSignUp}
              />
            </form>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center h-screen">
          <div className="w-full px-32">
            <h4 className="text-2xl capitalize mb-5">login your account</h4>
            <form
            //  onSubmit={handleUserlogin}
            onSubmit={handleSignIn} 
             method="post">
              <input
                className="block bg-zinc-100 w-full px-3 py-2 border-[1px] rounded-md mb-3 border-zinc-200"
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
              {errors?.email && signin && (
                <h3 className="text-sm text-red-600 -mt-3 mb-2">
                  {errors.email}
                </h3>
              )}

              <input
                className="block bg-zinc-100 w-full px-3 py-2 border-[1px] rounded-md mb-3 border-zinc-200"
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              {errors?.password && signin && (
                <h3 className="text-sm text-red-600 -mt-3 mb-2">
                  {errors.password}
                </h3>
              )}

              {mismatch && (
                <h3 className="text-sm text-red-600 -mt-3 mb-2">
                  Email and Password does not match.
                </h3>
              )}

              {notFound && (
                <h3 className="text-sm text-red-600 -mt-3 mb-2">
                  User not found.
                </h3>
              )}

              <input
                className="px-5 block rounded-full py-3 mt-2 bg-blue-500 text-white hover:bg-blue-600 hover:cursor-pointer"
                type="submit"
                value="Login"
                onClick={handleSignin}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
