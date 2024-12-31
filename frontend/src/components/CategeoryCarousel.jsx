import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

const categeory = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
];

const CategeoryCarousel = () => {
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto  my-20">
        <CarouselContent>
          {categeory.map((cat, index) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 " key={index}>
              <Button
                variant="outline"
                className="text-white bg-black rounded-full"
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategeoryCarousel;
