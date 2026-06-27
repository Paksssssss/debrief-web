import { Link, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from '../components/Nav';
import PrivacyAU from '../legal/PrivacyAU';
import PrivacyPH from '../legal/PrivacyPH';

export default function Privacy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [searchParams] = useSearchParams();
  const region = searchParams.get('region') ?? 'AU';

  return (
    <>
      <Nav />
      <main className="inner-page">
        <div className="container">
          <Link to="/" className="back-link">← Back to home</Link>
          {region === 'PH' ? <PrivacyPH /> : <PrivacyAU />}
        </div>
      </main>
    </>
  );
}
