import { Link, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from '../components/Nav';
import TermsAU from '../legal/TermsAU';
import TermsPH from '../legal/TermsPH';

export default function TermsOfService() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [searchParams] = useSearchParams();
  const region = searchParams.get('region') ?? 'AU';

  return (
    <>
      <Nav />
      <main className="inner-page">
        <div className="container">
          <Link to="/" className="back-link">← Back to home</Link>
          {region === 'PH' ? <TermsPH /> : <TermsAU />}
        </div>
      </main>
    </>
  );
}
