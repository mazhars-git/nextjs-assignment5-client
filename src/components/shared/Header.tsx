import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../app/images/profile-pic.png";
import { DownloadOutlined } from "@ant-design/icons";
import ProjectsPage from "@/app/projects/page";

const HeaderPage = () => {
  return (
    <div>
      <Navbar />
      <div className="w-[96%] mx-auto">
        <div className="grid grid-cols-2 py-5">
          <div className="self-center">
            <div className="content pt-5 pb-10 mr-10">
              <h1 className="text-4xl font-bold">
                This is <span className="text-blue-500">Mazharul Islam</span>
              </h1>
              <p className="py-5 text-lg">
                I am a junior web developer. I am expert in React, Nextjs, Node,
                Express, MongoDB, etc. I am passionate about coding. I have
                designed many websites. To know about me click learn more.
              </p>
            </div>
            <Link
              target="_blank"
              href="https://drive.google.com/file/d/1zBJQ5At9bR30qYOxlnjMrGwLaVzEIVSG/view?usp=drive_link"
            >
              <button className="btn btn-info rounded-badge text-white font-semibold hover:text-orange-600">
                My Resume
                <DownloadOutlined />
              </button>
            </Link>
          </div>
          <div className="justify-self-center">
            <Image
              className="mask mask-decagon"
              src={profilePic}
              alt="profile-image"
              width={350}
              height={300}
            />
          </div>
        </div>

        {/* -----------------skill bar------------ */}

        <div className="py-10">
          <h1 className="text-center text-3xl text-orange-600 font-bold pb-10">
            My Skills
          </h1>
          <div className="grid grid-cols-2 gap-1.5">
            <div>
              <p>HTML</p>
              <progress
                className="progress progress-success w-5/6"
                value="100"
                max="100"
              ></progress>
            </div>
            <div>
              <p>CSS</p>
              <progress
                className="progress progress-secondary w-5/6"
                value="80"
                max="100"
              ></progress>
            </div>
            <div>
              <p>Javascript</p>
              <progress
                className="progress progress-info w-5/6"
                value="60"
                max="100"
              ></progress>
            </div>
            <div>
              <p>React</p>
              <progress
                className="progress progress-warning w-5/6"
                value="70"
                max="100"
              ></progress>
            </div>
            <div>
              <p>NextJS</p>
              <progress
                className="progress progress-error w-5/6"
                value="70"
                max="100"
              ></progress>
            </div>
            <div>
              <p>NodeJS</p>
              <progress
                className="progress progress-primary w-5/6"
                value="70"
                max="100"
              ></progress>
            </div>
            <div>
              <p>MongoDB</p>
              <progress
                className="progress progress-info w-5/6"
                value="80"
                max="100"
              ></progress>
            </div>
            <div>
              <p>Express</p>
              <progress
                className="progress progress-warning w-5/6"
                value="60"
                max="100"
              ></progress>
            </div>
          </div>
        </div>

        {/*-------Featured Projects---------**/}

        <div className="featured ">
          <h1 className="text-4xl font-bold text-center py-10">Projects</h1>
          <ProjectsPage />
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
