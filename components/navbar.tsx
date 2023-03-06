// A simple navbar component that navigates to the home page, search page, and about page.

import Link from "next/link";
import logo from "@/public/favicon.ico";
import Image from "next/image";
import { useRef } from "react";

function Navbar() {
  //get the element with the id of primary-navigation in the react way
  const primaryNavigation = useRef<HTMLUListElement>(null);
  const navToggle = useRef<HTMLButtonElement>(null);

  //make arrow function
  const testfunction = () => {
    if (primaryNavigation.current) {
      const visibility = primaryNavigation.current.getAttribute("data-visibility");
      console.log(visibility);
      if (visibility === "false") {
        primaryNavigation.current.setAttribute("data-visibility", "true");
        navToggle.current?.setAttribute("aria-expanded", "true");
        } else {
        primaryNavigation.current.setAttribute("data-visibility", "false");
        navToggle.current?.setAttribute("aria-expanded", "false");
        }
    }
  };

  return (
    <header className="primary-header flex vargap">
      <div className="logo">
        <Link href="/">
          <Image src={logo} alt="Mail: " width={25} height={25} />
        </Link>
      </div>

      <button
        onClick={testfunction}
        ref={navToggle}
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded="false"
      >
        <span className="sr-only">Menu</span>
      </button>

      <nav className="font-tiltwarp text-xl">
        <ul
          data-visibility="false"
          id="primary-navigation"
          ref={primaryNavigation}
          className="primary-navigation flex vargap"
        >
          <li>
            <Link href="/">
              <span aria-hidden="true">00</span>Hjem
            </Link>
          </li>
          <li>
            <Link href="/search">
              <span aria-hidden="true">01</span>Søk
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span aria-hidden="true">02</span>Om
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
