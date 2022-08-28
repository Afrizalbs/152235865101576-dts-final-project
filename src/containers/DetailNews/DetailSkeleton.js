import { Skeleton } from "@mui/material";
import React from "react";

function DetailSkeleton() {
  return (
    <>
      <Skeleton variant="text" sx={{ fontSize: "1rem", mb: 4 }} width="30%" />
      {Array(4)
        .fill()
        .map((index) => (
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            width="90%"
            key={index}
          />
        ))}
      {Array(2)
        .fill()
        .map((index) => (
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            width="40%"
            key={index}
          />
        ))}
      {Array(3)
        .fill()
        .map((index) => (
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            width="100%"
            key={index}
          />
        ))}
      {Array(2)
        .fill()
        .map((index) => (
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            width="50%"
            key={index}
          />
        ))}
      {Array(3)
        .fill()
        .map((index) => (
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            width="95%"
            key={index}
          />
        ))}
    </>
  );
}

export default DetailSkeleton;
