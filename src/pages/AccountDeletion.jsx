import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from '../components/Nav';

export default function AccountDeletion() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Nav />
      <main className="inner-page">
        <div className="container">
          <Link to="/" className="back-link">← Back to home</Link>
          <h1>Account &amp; Data Deletion</h1>
          <p className="updated">Last updated: June 2026</p>

          <p>
            This page explains how to request deletion of your <strong>Debrief — Voice
            Journal</strong> account and the data associated with it. Debrief is published
            by <strong>John Pakson</strong>.
          </p>

          <h2>How to request deletion</h2>
          <p>
            Debrief does not yet offer one-tap account deletion inside the app. To have your
            account and associated data permanently deleted, follow these steps:
          </p>

          <ol className="steps-list">
            <li>
              From the email address you used to sign up, send an email to{' '}
              <a href="mailto:johnpakson.developer@gmail.com">johnpakson.developer@gmail.com</a>.
            </li>
            <li>
              Use the subject line: <strong>Account Deletion Request</strong>.
            </li>
            <li>
              In the body, confirm the email address associated with your Debrief account
              so we can locate and verify it.
            </li>
          </ol>

          <p>
            We will verify the request comes from the account owner, delete the account,
            and reply to confirm once it is done.
          </p>

          <h2>What gets deleted</h2>
          <p>When your deletion request is processed, we permanently delete:</p>
          <ul>
            <li>Your account and authentication record (your email address)</li>
            <li>All journal entries and their transcribed/typed text</li>
            <li>All voice recordings (audio files) synced to your private account</li>
          </ul>
          <p>
            Raw calendar data is <strong>never uploaded to our servers</strong> — the App reads
            it on-device only. However, non-private event names used to generate a journal prompt
            are stored as part of that entry and will be deleted along with your journal entries.
          </p>

          <h2>What is kept, and for how long</h2>
          <ul>
            <li>We do not retain a backup copy of your content after deletion.</li>
            <li>Deletion is completed within <strong>30 days</strong> of a verified request.</li>
            <li>
              We may retain minimal records only where required to comply with legal obligations;
              these contain no journal content, audio, or transcripts.
            </li>
          </ul>

          <h2>Questions</h2>
          <p>
            Contact <a href="mailto:johnpakson.developer@gmail.com">johnpakson.developer@gmail.com</a>.
          </p>
        </div>
      </main>
    </>
  );
}
