import React from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input type="text" placeholder="akshad" />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input type="email" placeholder="akshad@gmail.com" />
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input type="number" placeholder="9999999999" />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input type="password" placeholder="Secret password" />
          </div>
          <div className=" flex items-center justify-between my-2">
            <RadioGroup className=" flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  className="cursor-pointer"
                />
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  className="cursor-pointer"
                />
                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <div className=" flex items-center gap-2">
            <Label>Profile</Label>
            <Input accept="image/*" type="file" className="cursor-pointer" />
          </div>
          <Button type="submit" className="w-full my-4  text-white bg-black">
            Sign Up
          </Button>
          <span className="text-sm">
            {" "}
            Already have an account ?{" "}
            <Link to="/login" className="text-blue-400">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
