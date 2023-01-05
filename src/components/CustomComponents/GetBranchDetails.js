import React from "react";
import Cookies from "js-cookie";
const GetBranchDetails = () => {
  const branches = JSON.parse(Cookies.get("userBranches"));
  const branchValues = branches.map((row) => {
    return {
      label: row.branch_name,
    };
  });
  return branchValues;
};

export default GetBranchDetails;
