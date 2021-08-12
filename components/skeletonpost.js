import React from "react";
import Skeleton from "react-loading-skeleton";

function SkeletonPost() {
  return (
    <div className="max-w-6xl px-4 mx-auto mt-48">
      <div className="md:w-2/3 mx-auto">
        <Skeleton className="w-full h-16 bg-gray-200 mb-5"></Skeleton>
        <Skeleton className="w-full h-10 bg-gray-200 mb-5"></Skeleton>
        <Skeleton className="w-full h-80 bg-gray-200 mb-5"></Skeleton>
      </div>
    </div>
  );
}

export default SkeletonPost;
