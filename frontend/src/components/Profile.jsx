import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Ghost, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDailog from "./UpdateProfileDailog";
import { useDispatch, useSelector } from "react-redux";
import store from "@/redux/store";
import { setIsResume } from "@/redux/authSlice";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";

const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user, isResume } = useSelector((store) => store.auth);

  const dispatch = useDispatch();
  if (user.profile.resume) {
    dispatch(setIsResume(true));
  }
  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto border border-gray-400 bg-white rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src={user?.profile?.profilePhoto}
                alt="@shadcn"
                className="w-full h-full object-cover"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">{user?.fullName}</h1>
              <p className="text-sm ">{user?.profile?.bio}</p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="text-white text-right bg-black"
            variant="outline"
          >
            <Pen></Pen>
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-2 my-2">
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Contact />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skill</h1>
          <div className="flex items-center gap-1">
            {user?.profile?.skills.length != 0 ? (
              user?.profile?.skills.map((item, index) => (
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
              href={user?.profile?.resume}
              className="text-blue-500 w-full hover:underline cursor-pointer "
            >
              {user?.profile?.resumeOriginalName}
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
      <UpdateProfileDailog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
