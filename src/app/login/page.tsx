import Image from "next/image";
import React from "react";
import loginThumb from "../images/login-thumb.png";
import Link from "next/link";
import githubIcon from "../images/icons/github-logo.png";
import googleIcon from "../images/icons/google.png";
import facebook from "../images/icons/facebook.png";
// import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-base-200 pt-5">
      <h1 className="text-5xl font-bold text-center pb-10 text-sky-500">
        Login now!
      </h1>
      <div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Image
              src={loginThumb}
              alt="login-thumb"
              width={350}
              height={350}
            />
          </div>
          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <p className="label-text-alt mt-1">
                    Not Registered?{" "}
                    <Link href="/signup" className="text-sky-400 font-bold">
                      Signup
                    </Link>{" "}
                    Now
                  </p>
                </label>
              </div>
              <div className="form-control mt-3">
                <button className="btn btn-info text-white">Login</button>
              </div>
            </form>

            {/* Social Login Buttons */}
            <div className="flex justify-center gap-4 pb-10">
              <button
                // onClick={() =>
                //   signIn("google", {
                //     callbackUrl: "http://localhost:3000/dashboard",
                //   })
                // }
                className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
              >
                <Image
                  src={facebook}
                  width={30}
                  height={30}
                  alt="Google logo"
                />
              </button>
              <button
                // onClick={() =>
                //   signIn("google", {
                //     callbackUrl: "http://localhost:3000/dashboard",
                //   })
                // }
                className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
              >
                <Image
                  src={googleIcon}
                  width={30}
                  height={30}
                  alt="Google logo"
                />
              </button>
              <button
                // onClick={() =>
                //   signIn("github", {
                //     callbackUrl: "http://localhost:3000/dashboard",
                //   })
                // }
                className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
              >
                <Image
                  src={githubIcon}
                  width={35}
                  height={35}
                  alt="GitHub logo"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
