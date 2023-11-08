import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { logoLight } from "../../assets/images";
import { useSelector } from "react-redux";

const Profile = () => {
  const { products } = useSelector((state) => state.orebiReducer);
  const { userInfo } = useSelector((state) => state.orebiReducer);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  const [successMsg, setSuccessMsg] = useState("");

  // const textTrim = (text, value) => {
  //   const words = text.split(" ");
  //   const firstTwoWords = words.slice(0, value).join(" ");
  //   return firstTwoWords;
  // };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  // ============= Event Handler End here ===============
  const handleSignUp = (e) => {
    e.preventDefault();

    if (!email) {
      setErrEmail("Enter your email");
    }

    if (!password) {
      setErrPassword("Create a password");
    }
    // ============== Getting the value ==============
    if (email && password) {
      setSuccessMsg(
        `Hello dear, Thank you for your attempt. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${email}`
      );
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
        <div className="w-[450px] h-full  px-10 flex flex-col gap-6 justify-center">
          {products ? (
            products.map((item) => (
              <div
                key={item.title}
                className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
              >
                <img className="w-20 p-3" src={item.image} alt="productImg" />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-lg  text-black">
                    {item.name?.split(" ").slice(0, 3).join(" ")}
                  </p>
                  {/* <p className="text-xs">{item.description?.split(" ").slice(0, 10).join(" ")}</p> */}
                  <p className="text-sm text-black">
                    Price:{" "}
                    <span className="text-primeColor font-semibold text-black">
                      ${item.price}
                    </span>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <span className="text-primeColor font-semibold text-black">
              No Product Found!
            </span>
          )}
        </div>
      </div>
      <div className="w-full lgl:w-1/2 h-full">
        <div className="flex min-h-screen items-center justify-center bg-[#F5F5F3]">
          <div className="mx-auto px-5">
            <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
              <img
                className="w-full rounded-lg object-cover object-center p-3"
                src="https://res.cloudinary.com/mae-com-in/image/upload/v1699458800/images_bx6zzs.png"
                alt="product"
              />
              <div>
                <div className="my-6 flex items-center justify-between px-4">
                  <p className="font-bold text-gray-500">User</p>
                  <p className="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">
                    {userInfo.clientName}
                  </p>
                </div>
                <div className="my-4 flex items-center justify-between px-4">
                  <p className="text-sm font-semibold text-gray-500">
                    Email
                  </p>
                  <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                    {userInfo.email}
                  </p>
                </div>
                <div className="my-4 flex items-center justify-between px-4">
                  <p className="text-sm font-semibold text-gray-500">
                    City
                  </p>
                  <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                    {userInfo.city}
                  </p>
                </div>
                <div className="my-4 flex items-center justify-between px-4">
                  <p className="text-sm font-semibold text-gray-500">
                    Country
                  </p>
                  <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                    {userInfo.country}
                  </p>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        {/* {successMsg ? (
          <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
            <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
              {successMsg}
            </p>
            <Link to="/signup">
              <button
                className="w-full h-10 bg-primeColor text-gray-200 rounded-md text-base font-titleFont font-semibold 
          tracking-wide hover:bg-black hover:text-white duration-300"
              >
                Sign Up
              </button>
            </Link>
          </div>
        ) : (
          <form className="w-full lgl:w-[450px] h-screen flex items-center justify-center">
            <div className="px-6 py-4 w-full h-[90%] flex flex-col justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
              <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-3xl mdl:text-4xl mb-4">
                Update Profile
              </h1>
              <div className="flex flex-col gap-3">
               
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Current Password
                  </p>
                  <input
                    onChange={handlePassword}
                    value={password}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="password"
                    placeholder="Create password"
                  />
                  {errPassword && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errPassword}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    New Password
                  </p>
                  <input
                    onChange={handlePassword}
                    value={password}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="password"
                    placeholder="Create password"
                  />
                  {errPassword && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errPassword}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Confirm Password
                  </p>
                  <input
                    onChange={handlePassword}
                    value={password}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="password"
                    placeholder="Create password"
                  />
                  {errPassword && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errPassword}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleSignUp}
                  className="bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md  duration-300"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        )} */}
      </div>
    </div>
  );
};

export default Profile;
