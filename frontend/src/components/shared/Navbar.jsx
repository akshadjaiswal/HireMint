import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Hire<span className="text-red-500">Mint</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>

          <Popover>
            <PopoverTrigger asChild>
              <Avatar className=" cursor-pointer w-10 h-10 rounded-full overflow-hidden">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                  className="w-full h-full object-cover"
                />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4 bg-white rounded-lg shadow-lg flex flex-col  gap-3">
              <div className="flex gap-2 space-y-1">
                <Avatar className="w-8 h-8 rounded-full overflow-hidden">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className="w-full h-full object-cover"
                  />
                </Avatar>
                <div>
                  <h4 className="font-bold">Akshad Jaiswal</h4>
                  <p className="text-sm  text-muted-foreground">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <div className="flex flex-col text-gray-600">
                <div>
                  <Button variant="link">View prolfile</Button>
                </div>
                <div>
                  <Button variant="link">Logout</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
