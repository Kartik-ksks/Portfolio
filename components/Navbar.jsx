import Link from 'next/link';
import { withRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons'

function Navbar({ router }) {
  const navs = [
    { text: 'Home', href: '/' },
    { text: 'Portfolio', href: '/portfolio' },
    // { text: '', href: '' },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/"><a className="logo"><FontAwesomeIcon icon={faCrown} style={{fontSize: '3rem' }} /></a></Link>

        <ul className="nav-links" style={{fontSize:'1rem'}}>
          { navs.map(nav => (
            <li><Link href={nav.href}><a className={`nav-item ${ router.pathname == nav.href ? 'active' : '' }`}>{nav.text}</a></Link></li>
          )) }
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
