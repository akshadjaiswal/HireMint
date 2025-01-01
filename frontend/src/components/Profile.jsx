import React from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Ghost, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";

const skills = ["React", "Node", "Express", "MongoDB"];
const Profile = () => {
  const isResume = true;
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto border border-gray-400 bg-white rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p className="text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                illo perferendis perspiciatis?
              </p>
            </div>
          </div>
          <Button className="text-white text-right bg-black" variant="outline">
            <Pen></Pen>
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-2 my-2">
            <Mail />
            <span>akshad@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Contact />
            <span>8805875647</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skill</h1>
          <div className="flex items-center gap-1">
            {skills.length != 0 ? (
              skills.map((item, index) => (
                <Badge
                  className="bg-black text-white"
                  variant={Ghost}
                  key={index}
                >
                  {item}
                </Badge>
              ))
            ) : (
              <span>No skils added</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-lg font-bold">Resume</Label>
          {isResume ? (
            <a
              target="_blank"
              href="https://github.com/akshadjaiswal"
              className="text-blue-500 w-full hover:underline cursor-pointer "
            >
              Akshad Resume
            </a>
          ) : (
            <span>No Resume Uploaded</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="text-2xl font-bold">Applied Jobs</h1>
        <AppliedJobTable />
      </div>
    </div>
  );
};

export default Profile;
