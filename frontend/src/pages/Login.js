import React, { useState } from "react";
import loginIcons from "../assets/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section id="login">
      <div className="mx-auto container p-4">
        <div className="bg-white p-5 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcons} alt="login icons" srcset="" />
          </div>
          <form action="" className="pt-6 flex flex-col gap-2">
            <div className="grid">
              <label htmlFor="">Email : </label>
              <div className="bg-slate-100 p-2">
                <input
                  className="w-full h-full outline-none bg-transparent"
                  type="email"
                  name=""
                  id=""
                  placeholder="enter email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="">Password : </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  className="w-full h-full outline-none bg-transparent"
                  type={showPassword ? "text" : "password"}
                  name=""
                  id=""
                  placeholder="enter password"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((preve) => !preve)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
