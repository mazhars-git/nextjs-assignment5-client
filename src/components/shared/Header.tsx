import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";

const HeaderPage = () => {
  return (
    <div>
      <Navbar />
      <div className="w-[96%] mx-auto grid grid-cols-2 py-5">
        <div className="">
          <div className="content pt-5 pb-10">
            <h1 className="text-4xl font-bold">
              This is <span className="text-fuchsia-600">Mazharul Islam</span>
            </h1>
            <p>I am a junior web developer. I am expert in Nextjs.</p>
          </div>
          <Link href="/about">
            <button className="btn btn-secondary rounded-badge">
              Learn More
            </button>
          </Link>
        </div>
        <div className="text-center">
          <Image src="" alt="profile-image" width={200} height={200} />
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
