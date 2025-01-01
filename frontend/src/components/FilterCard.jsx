import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const filterData = [
  {
    filterType: "Location",
    array: ["Pune", "Mumbai", "PCMC", "Banglore", "Hyderabad"],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "FullStack Developer",
      "Banglore",
      "Hyderabad",
    ],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42-1lakh", "1 lakh- 5lakh"],
  },
];
const FilterCard = () => {
  return (
    <div className="w-full bg-white rounded-md p-3">
      <h1 className="font-bold text-xl">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((data, index) => (
          <div key={index}>
            <h1 className="font-bold text-lg">{data.filterType}</h1>
            {data.array.map((item, index) => {
              return (
                <div className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value={item} />
                  <Label>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};
export default FilterCard;
