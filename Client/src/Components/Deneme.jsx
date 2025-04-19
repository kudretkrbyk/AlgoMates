import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchProjects } from "../slices/projectSlice";
import { useDispatch } from "react-redux";

export default function Deneme() {
  const { projects, isLoading, isSuccess } = useSelector(
    (state) => state.projects
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);
  console.log("projects", projects);
  console.log("isLoading", isLoading);
  console.log("isSuccess", isSuccess);

  return <div>deneme </div>;
}
