import React from "react";

import { MoveRight, PhoneCall } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="w-full">
      <div className="mx-auto">
        <div className="flex gap-8 py-20 items-center justify-center flex-col">
          <div>
            <span className="inline-flex h-full animate-background-shine cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-3 py-1 text-xs font-medium text-gray-300">
              We're live!
            </span>
          </div>
          <div className="flex gap-4 flex-col items-center">
            <h1 className="mb-1 pb-4 max-w-xl bg-gradient-to-t from-[#6d6d6d] to-[#ffffff] bg-clip-text text-center leading text-5xl text-transparent font-medium ">
              Sorting Visualizer For Algorithms
            </h1>
            <p
              className="text-gray-300 text-sm leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center 
            "
            >
              Managing sorting algorithms has never been easier. Visualize a
              selection of different sorting algorithms. You can also adjust the
              speed of the animation to see how the algorithms work.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <button className="inline-flex bg-white items-center justify-center rounded-md text-sm font-medium text-primary-foreground h-10 px-4 py-2">
              Go to GitHub{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="pl-0.5"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
