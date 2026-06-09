import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

export default function Contact() {
  return (
    <>
      <Nav />
      <main className="inner-page">
        <div className="container">
          <Link to="/" className="back-link">← Back to home</Link>
          <h1>Contact</h1>
          <p className="updated">We read every message.</p>

          <p>
            Debrief is built by a solo developer. Whether you have a bug report, a question,
            or just want to share feedback — send an email and you'll hear back directly.
          </p>

          <div className="contact-card">
            <div className="contact-card-label">Email</div>
            <a
              className="contact-card-email"
              href="mailto:johnpakson.developer@gmail.com"
            >
              johnpakson.developer@gmail.com
            </a>
            <p className="contact-card-note">
              For account or data deletion requests, see the{' '}
              <Link to="/account-deletion">Account &amp; Data Deletion</Link> page for
              specific instructions.
            </p>
          </div>

          <h2>Common reasons to write</h2>
          <ul>
            <li>Bug reports or unexpected behaviour</li>
            <li>Feature requests or feedback</li>
            <li>Questions about privacy or your data</li>
            <li>TestFlight or Play testing access</li>
          </ul>
        </div>
      </main>
    </>
  );
}
