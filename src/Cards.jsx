import React from "react";
import { useTheme } from "./ThemeContext";

function Cards() {
  const { theme } = useTheme();

  return (
    <div>
      <h1 className="text-center text-3xl text-bold">Welcome</h1>

      <div className="flex flex-row gap-10 justify-center text-center py-0 pt-28 md:py-20 grid grid-rows-4 sm:grid-rows-1 grid-flow-col">
        <div
          style={{ background: theme === "dark" ? "#1f2937" : "#f8fafc", color: theme === "dark" ? "white" : "#020617" }}
          class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 text-center dark:border-gray-700"
        >
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight mt-5">technology 2024</h5>
          </a>
          <p class=" text-center my-10 font-normal">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </div>

        <div
          style={{ background: theme === "dark" ? "#1f2937" : "#f8fafc", color: theme === "dark" ? "white" : "#020617" }}
          class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 text-center dark:border-gray-700"
        >
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight mt-5">technology 2024</h5>
          </a>
          <p class=" text-center my-10 font-normal">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </div>

        <div
          style={{ background: theme === "dark" ? "#1f2937" : "#f8fafc", color: theme === "dark" ? "white" : "#020617" }}
          class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 text-center dark:border-gray-700"
        >
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight mt-5">technology 2024</h5>
          </a>
          <p class=" text-center my-10 font-normal">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
