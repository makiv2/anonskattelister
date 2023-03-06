import Link from "next/link";
import logo from "@/public/favicon.ico";
import Image from "next/image";
import { MouseEvent, useRef } from "react";

function Navbar() {
  //get the element with the id of primary-navigation in the react way
  const primaryNavigation = useRef<HTMLUListElement>(null);
  const navToggle = useRef<HTMLButtonElement>(null);

  const links = useRef(new Array(3));
  const navbar = useRef<HTMLDivElement>(null);

  const togglenav = (e: any) => {
    const linkElement = e.target;
    const navbarElement = navbar.current;
    linkElement.appendChild(navbarElement);
  };

  const testfunction = () => {
    if (primaryNavigation.current) {
      const visibility =
        primaryNavigation.current.getAttribute("data-visibility");
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
            <Link onClick={(e) => togglenav(e)} href="/">
              <span aria-hidden="true">00</span>Hjem
            </Link>
            <div ref={navbar} className="active-nav"></div>
          </li>
          <li>
            <Link onClick={(e) => togglenav(e)} href="/search">
              <span aria-hidden="true">01</span>Søk
            </Link>
          </li>
          <li>
            <Link onClick={(e) => togglenav(e)} href="/about">
              <span aria-hidden="true">02</span>Om
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
