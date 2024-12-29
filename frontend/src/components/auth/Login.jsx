import Navbar from "../shared/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <div className="my-2">
            <Label>Email</Label>
            <Input type="email" placeholder="akshad@gmail.com" />
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
          <Button type="submit" className="w-full my-2  text-white bg-black">
            Login
          </Button>
          <span className="text-sm">
            {" "}
            Don't have an account ?{" "}
            <Link to="/signup" className="text-blue-400">
              Sign Up
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
