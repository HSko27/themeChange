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
            <h5 class="mb-2 text-2xl font-bold tracking-tight mt-5">Unikátní Design na Míru</h5>
          </a>
          <p class=" text-center my-10 font-normal">
          Naše tým grafických designérů vytvoří pro váš web originální a moderní vzhled.
          </p>
        </div>

        <div
          style={{ background: theme === "dark" ? "#1f2937" : "#f8fafc", color: theme === "dark" ? "white" : "#020617" }}
          class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 text-center dark:border-gray-700"
        >
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight mt-5">Webové Stránky pro Všechna Zařízení</h5>
          </a>
          <p class=" text-center my-10 font-normal">
          S našimi webovými stránkami si můžete být jisti, že vaše online přítomnost bude dokonalá na všech zařízeních
          </p>
        </div>

        <div
          style={{ background: theme === "dark" ? "#1f2937" : "#f8fafc", color: theme === "dark" ? "white" : "#020617" }}
          class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 text-center dark:border-gray-700"
        >
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight mt-5">Zvýšte Vaši Viditelnost Online</h5>
          </a>
          <p class=" text-center my-10 font-normal">
          S našimi webovými stránkami nejenže zaujmete návštěvníky, ale také budete lépe viditelní ve vyhledávačích jako Google. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
