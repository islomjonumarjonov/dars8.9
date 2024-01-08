import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="bg-slate-300">
      <div className="max-container flex items-center justify-between py-5 ">
        <h1 className="text-3xl font-semibold">Articles</h1>

        <nav className="flex gap-3">
          <Link className="link-hover" href="/">
            Home
          </Link>
          <Link className="link-hover" href="/articles">
            Articles
          </Link>
          <Link className="link-hover" href="/about">
            About
          </Link>
          <Link className="link-hover" href="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
