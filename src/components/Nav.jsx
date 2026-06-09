import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = pathname === '/';

  return (
    <nav className={`nav ${scrolled || !isHome ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="nav-logo">
          Debrief<span>.</span>
        </Link>
        <ul className="nav-links">
          {isHome && (
            <>
              <li><a href="#features">Features</a></li>
            </>
          )}
          <li><Link to="/privacy">Privacy</Link></li>
          <li><Link to="/account-deletion">Account Deletion</Link></li>
        </ul>
      </div>
    </nav>
  );
}
