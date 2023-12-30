import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { withRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar({ router }) {
  const navs = [
    { text: "Home", href: "/" },
    { text: "Portfolio", href: "/portfolio" },
    // { text: '', href: '' },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav-links" style={{ fontSize: "1rem" }}>
          {navs.map((nav) => (
            <li>
              <Link href={nav.href} passHref>
                <div
                  className={`nav-item ${
                    router.pathname == nav.href ? "active" : ""
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
    </nav>
  );
}

export default withRouter(Navbar);
