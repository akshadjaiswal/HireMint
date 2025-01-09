import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchHandler = () => {
    dispatch(setSearchedQuery(query));
    console.log(query);
    navigate("/browse");
  };

  return (
    <div className="text-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-5 my-10">
        {/* Highlight Text */}
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium text-sm sm:text-base">
          The Leading Platform for Jobs and Career Growth
        </span>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Search, Apply <br />
          Get your <span className="text-[#6A38C2]">Dream Jobs</span>
        </h1>

        {/* Subtext */}
        <p className="text-sm sm:text-base lg:text-lg text-gray-600">
          Your gateway to dream jobs, seamless hiring, and unlocking endless
          career opportunities worldwide.
        </p>

        {/* Search Bar */}
        <div className="flex w-full max-w-lg mx-auto shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4">
          <input
            type="text"
            placeholder="Find your dream job"
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full text-sm sm:text-base"
          />
          <Button
            onClick={searchHandler}
            className="rounded-r-full bg-[#6A38C2]"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
