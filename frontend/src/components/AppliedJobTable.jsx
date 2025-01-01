import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";

const appliedJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const AppliedJobTable = () => {
  return (
    <div className="mb-20">
      <Table>
        <TableCaption>A list of your recent applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appliedJobs.length != 0 ? (
            appliedJobs.map((item, index) => (
              <TableRow key={index}>
                <TableCell>01-01-25</TableCell>
                <TableCell>Frontend Developer</TableCell>
                <TableCell>Github</TableCell>
                <TableCell className="text-right">
                  <Badge className="text-white  bg-black" outline="Ghost">
                    Selected
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <span>No Applied Jobs</span>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
