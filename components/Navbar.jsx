// Import necessary dependencies
import React from "react";
import { withRouter } from "next/router";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

// Define the Navbar component
function Navbar({ router }) {
  const navs = [
    { text: "Home", href: "/" },
    { text: "Portfolio", href: "/portfolio" },
    // { text: '', href: '' },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav-links">
          {navs.map((nav) => (
            <li key={nav.text}>
              <Link href={nav.href} passHref>
                <div
                  className={`nav-item ${
                    router.pathname === nav.href ? "active" : ""
                  }`}
                >
                  {nav.text}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
      <style jsx>{`
        .navbar {
          color: black;
          padding: 1rem 0;
          font-size: 2rem;
        }

        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-links {
          display: flex;
          list-style: none; /* Remove bullet points */
        }

        .nav-item {
          margin-right: 20px;
          color: #CCCCFF;
          text-decoration: none; /* Remove underline */
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .nav-item:hover {
          color: #606060;
        }

        .active {
          font-weight: bold;
          color: #CCCCFF;
        }
      `}</style>
    </nav>
  );
}

// Export the Navbar component with withRouter
export default withRouter(Navbar);
