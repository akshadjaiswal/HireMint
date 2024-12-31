import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";

const Job = () => {
  return (
    <div>
      <p>2 days ago</p>
      <Button className="rounded-full" size="icon" variant="outline">
        <Bookmark />
      </Button>

      <div className="flex items-center gap-2 my-2">
        <Button>
          <Avatar>
            <AvatarImage src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" />
          </Avatar>
        </Button>
      </div>
      <div></div>
    </div>
  );
};

export default Job;
