import Image from "next/image";
import React from "react";
import signupThumb from "../images/signup-thumb.png";
import Link from "next/link";

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-base-200 pt-5">
      <h1 className="text-5xl font-bold text-center pb-10 text-blue-600">
        Register now!
      </h1>
      <div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Image
              src={signupThumb}
              alt="login-thumb"
              width={350}
              height={350}
            />
          </div>
          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                    Already Registered?{" "}
                    <Link href="/login" className="text-blue-600 font-bold">
                      Login
                    </Link>{" "}
                    Now
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white">Signup</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
