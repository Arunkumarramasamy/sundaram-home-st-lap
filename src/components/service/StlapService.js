import { Axios } from "axios";
import { React } from "react";
import { useQuery } from "react-query";
import Progress from "../CustomComponents/Progress";

export const Service = (url, method) => {
  const { isLoading, data } = useQuery("check", () => {
    return Axios.get(url);
  });
  if (isLoading) {
    return <Progress />;
  }
  console.log(data);
  return data;
};
