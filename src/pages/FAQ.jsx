import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

const FAQS = [
  {
    q: 'Is Debrief free?',
    a: 'Yes — Debrief is free to download on iOS and Android.',
  },
  {
    q: 'Does Debrief work without internet?',
    a: 'Yes. You can record, transcribe, and read your entries any time, even with no signal. Everything saves to your phone the moment you record it. When you reconnect, your journal quietly syncs to your account in the background.',
  },
  {
    q: 'How private is my journal?',
    a: 'Very. Your entries are stored on your device and synced only to your own private, password-protected account — no other user can read them. We don\'t use your journal content for advertising, analytics, or AI training of any kind. As the developer, I have administrative access to the database infrastructure, but I do not access user journal content. End-to-end encryption is planned for a future release.',
  },
  {
    q: 'Does my voice get sent anywhere?',
    a: 'No. Transcription happens directly on your phone using your device\'s built-in speech recognition. Your voice never leaves your device during processing.',
  },
  {
    q: 'How does the calendar feature work?',
    a: 'With your permission, Debrief reads your calendar to ask follow-up questions after meetings and events — things like "How did that call go?" It\'s read-only: Debrief never adds, edits, or deletes anything. Private calendar events stay private; Debrief never reads or stores their names. Non-private event names used to generate a journal prompt are stored as part of that entry, the same as any other entry text.',
  },
  {
    q: 'Which devices are supported?',
    a: 'Debrief is available for iPhone (iOS 16+) and Android. Public launch is coming soon.',
  },
  {
    q: 'Can I delete my account and data?',
    a: 'Yes, at any time. See our Account & Data Deletion page for step-by-step instructions. We\'ll confirm once your data is gone — deletion is completed within 30 days of a verified request.',
  },
  {
    q: 'I have a question that isn\'t answered here.',
    a: 'Reach out at any time — we\'re happy to help. You can find our contact details on the Contact page.',
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(o => !o)}>
        <span>{q}</span>
        <span className="faq-chevron">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="faq-answer">{a}</p>}
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      <Nav />
      <main className="inner-page">
        <div className="container">
          <Link to="/" className="back-link">← Back to home</Link>
          <h1>Frequently asked questions</h1>
          <p className="updated">Can't find an answer? <Link to="/contact">Get in touch.</Link></p>

          <div className="faq-list">
            {FAQS.map(item => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>

          <p style={{ marginTop: '48px' }}>
            Looking to delete your account?{' '}
            <Link to="/account-deletion">Account &amp; Data Deletion →</Link>
          </p>
        </div>
      </main>
    </>
  );
}
