import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: ["Pune", "Pimpri-Chinchwad", "Los Angeles", "Amravati"],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "Designer",
      "Content Creator",
    ],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42-1lakh", "1 lakh- 5lakh"],
  },
];
const FilterCard = () => {
  const dispatch = useDispatch();
  const [selectedValue, setSlectedValue] = useState("");

  const changeHandler = (value) => {
    setSlectedValue(value);
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue]);

  return (
    <div className="w-full bg-white rounded-md p-3">
      <h1 className="font-bold text-xl">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {filterData.map((data, index) => (
          <div key={index}>
            <h1 className="font-bold text-lg">{data.filterType}</h1>
            {data.array.map((item, idx) => {
              const itemId = `id${index} - ${idx}`;
              return (
                <div className="flex items-center space-x-2 my-2 " key={index}>
                  <RadioGroupItem value={item} id={itemId} />
                  <Label htmlFor={itemId}>{item}</Label>
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
