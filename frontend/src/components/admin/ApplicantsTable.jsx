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
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { MoreHorizontal } from "lucide-react";

const shortlistingStatus = ["Accepted", "Rejected"];
const ApplicantsTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of recent applied users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>FullName</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact Number</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <tr>
            <TableCell>FullName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Contact Number</TableCell>
            <TableCell>Resume</TableCell>
            <TableCell>Date</TableCell>
            <TableCell className="text-right cursor-pointer">
              <Popover>
                <PopoverTrigger>
                  <MoreHorizontal />
                </PopoverTrigger>
                <PopoverContent className="w-32">
                  {shortlistingStatus.map((status, index) => {
                    return (
                      <div key={index}>
                        <span>{status}</span>
                      </div>
                    );
                  })}
                </PopoverContent>
              </Popover>
            </TableCell>
          </tr>
        </TableBody>
      </Table>
    </div>
  );
};

export default ApplicantsTable;
