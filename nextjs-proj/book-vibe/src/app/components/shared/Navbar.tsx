import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/book.ico";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-base-200 bg-base-100/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="navbar min-h-16 px-0">
          
          {/* Navbar Start: Mobile Menu & Logo */}
          <div className="navbar-start gap-2">
            {/* Mobile Dropdown */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle lg:hidden"
                aria-label="Open navigation menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-md dropdown-content z-50 mt-3 w-52 rounded-2xl bg-base-100 p-3 shadow-xl border border-base-200"
              >
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/listed-books">Listed Books</Link>
                </li>
                <li>
                  <Link href="/pages-to-read">Pages to Read</Link>
                </li>
              </ul>
            </div>

            {/* Brand Logo & Name */}
            <Link
              href="/"
              className="flex items-center gap-2.5 text-xl font-bold tracking-tight transition hover:opacity-90"
            >
              <Image
                src={logo}
                alt="Book Vibe Logo"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent font-extrabold">
                Book Vibe
              </span>
            </Link>
          </div>

          {/* Navbar Center: Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-1 px-1 font-medium">
              <li>
                <Link
                  href="/"
                  className="rounded-lg px-4 py-2 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-slate-800"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/listed-books"
                  className="rounded-lg px-4 py-2 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-slate-800"
                >
                  Listed Books
                </Link>
              </li>
              <li>
                <Link
                  href="/pages-to-read"
                  className="rounded-lg px-4 py-2 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-slate-800"
                >
                  Pages to Read
                </Link>
              </li>
            </ul>
          </div>

          {/* Navbar End: Action Buttons */}
          <div className="navbar-end gap-2.5">
            <button className="btn btn-emerald bg-emerald-500 hover:bg-emerald-600 text-white font-medium border-none rounded-full px-5">
              Sign In
            </button>
            <button className="btn btn-neutral hover:bg-slate-800 font-medium rounded-full px-5 hidden sm:inline-flex">
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;