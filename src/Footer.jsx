import React from "react";
import logo from "./assets/logo.png"
import { useTheme } from './ThemeContext';


function Footer() {

    const { theme } = useTheme();


  return (
    <div class="relative  w-screen">
      <footer  style={{ background: theme === 'dark' ? '#0f182a' : '#cbd5e1', color: theme === 'dark' ? 'white' : '#020617' }} class="shadow w-screen">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 ">
              <img src={logo} class="h-8 w-8" alt="Flowbite Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap">Flowbite</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 ">
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 sm:mx-auto lg:my-8" />
          <span class="block text-sm sm:text-center ">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
