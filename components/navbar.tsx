// A simple navbar component that navigates to the home page, search page, and about page.

import Link from "next/link";

function Navbar() {
  return (
    <div className="navbar">
      <Link href="/">Home</Link>
      <Link href="/search">Search</Link>
      <Link href="/about">About</Link>
    </div>
  );
}

export default Navbar;
