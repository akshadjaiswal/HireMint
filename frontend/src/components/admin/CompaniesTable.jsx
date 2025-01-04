import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Edit2, MoreHorizontal } from "lucide-react";
import { Popover, PopoverContent } from "../ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";

const CompaniesTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>List of your registered Companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableCell>
            <Avatar>
              <AvatarImage src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" />
            </Avatar>
          </TableCell>
          <TableCell>Github</TableCell>
          <TableCell>1-1-25</TableCell>
          <TableCell className="text-right cursor-pointer ">
            <Popover>
              <PopoverTrigger>
                <MoreHorizontal />
                <PopoverContent className="w-32">
                  <div className="flex items-center gap-2 w-fit cursor-pointer">
                    <Edit2 className="w-4" />
                    <span>Edit</span>
                  </div>
                </PopoverContent>
              </PopoverTrigger>
            </Popover>
          </TableCell>
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
