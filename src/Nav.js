import React from 'react';
import logo from './logo192.png'

function Nav(props) {
    return (
<header className="bg-yellow-hex bg-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-4 lg:px-6">
    <div class="flex h-16 items-center justify-between">
      <div class="md:flex md:items-center md:gap-10">
        <a class="block" href="/">
          <span class="sr-only">Home</span>
            <img class="w-96 pt-12" src={logo} alt="logo"/>
        </a>
      </div>

      <div class="hidden md:block">
        <nav aria-label="Global">
          <ul class="flex items-center gap-6 pt-4 text-sm">
            <li>
              <a
                class="text-gray-800 transition text-lg hover:text-gray-500/75"
                href="/"
              >
                About
              </a>
            </li>
            <li>
              <a
                class="text-gray-800 transition text-lg hover:text-gray-500/75"
                href="/"
              >
                Catering
              </a>
            </li>
            <li>
              <a
                class="text-gray-800 transition text-lg hover:text-gray-500/75"
                href="/"
              >
                Menu
              </a>
            </li>
             <li>
              <a
                class="text-gray-800 transition text-lg hover:text-gray-500/75"
                href="/"
              >
                Location
              </a>
            </li>
            <li>
              <a
                class="text-gray-800 transition text-lg hover:text-gray-500/75"
                href="/"
              >
                Allergens 
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="flex items-center gap-4">

        <div class="block md:hidden">
          <button
            className="rounded bg-yellow-hex p-2 text-gray-600 transition hover:text-gray-600/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
    );
}

export default Nav;