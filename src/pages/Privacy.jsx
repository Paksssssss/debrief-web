import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from '../components/Nav';

export default function Privacy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Nav />
      <main className="inner-page">
        <div className="container">
          <Link to="/" className="back-link">← Back to home</Link>
          <h1>Privacy Policy</h1>
          <p className="updated">Last updated: June 2026</p>

          <p>
            Debrief ("the App", "we", "our") is a personal voice-journaling app for iPhone and
            Android. This policy explains what information the App collects, how it's used, and
            the choices you have. We built Debrief to be <strong>local-first and privacy-respecting</strong> —
            this policy reflects that design, not just a legal formality.
          </p>

          <h2>Information We Collect</h2>

          <p>
            <strong>Voice recordings.</strong> When you record a journal entry, the App captures
            audio via your device's microphone and transcribes it <strong>on-device</strong> using
            your phone's built-in speech recognition. The recorded audio file is stored on your
            device and is also synced to your private account in our backend (Supabase) so your
            journal stays available across your devices and is backed up. It is never shared with
            third parties, never used for advertising, and never used to train any AI/ML models.
          </p>

          <p>
            <strong>Calendar data.</strong> With your permission, the App reads your calendar
            (read-only — it never modifies or deletes your calendar events) to show you relevant
            context around the times you journal (e.g., "How did your 2pm meeting go?").{' '}
            <strong>Events you've marked as private are never read or stored by name</strong> —
            Debrief replaces their title with the generic label <code>"Private Event"</code> before
            it ever leaves your device. Your calendar data is never uploaded, synced, or shared in
            any other form.
          </p>

          <p>
            <strong>Journal entries and text.</strong> Any text you write or that is transcribed
            from your voice is stored locally on your device and synced to your private,
            authenticated account in our backend so it's available across your devices.
          </p>

          <p>
            <strong>Account information.</strong> To sync your journal across devices, the App
            uses an authenticated account (managed via Supabase Auth). We collect only what's
            needed to create and secure that account (e.g., your email address).
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information described above solely to operate and improve the App's core
            features for you: recording and transcribing journal entries, providing calendar
            context, and syncing your journal securely across your own devices. We do not use
            your personal content for advertising, analytics profiling, or to train AI models,
            and we do not sell or rent your information to anyone.
          </p>

          <h2>How Your Data Is Stored and Protected</h2>
          <p>
            Debrief is <strong>local-first</strong>: your journal lives primarily in an on-device
            database, and syncs to our backend (Supabase, hosted on secure cloud infrastructure)
            only so you can access it across your own devices and keep a backup. Backend access is
            protected by row-level security so that <strong>only you can read or write your own
            data</strong> — no other user or account can access your entries, recordings, or
            calendar context.
          </p>

          <h2>Data Sharing</h2>
          <p>
            We do not share, sell, rent, or trade your personal information or journal content
            with third parties. We do not run advertising and do not use third-party analytics
            or advertising SDKs that collect personal data.
          </p>

          <h2>Your Choices and Control</h2>
          <p>
            You can review, edit, and remove journal entries from within the App at any time.
            If you'd like your account and associated data fully deleted, see our{' '}
            <Link to="/account-deletion">Account &amp; Data Deletion page</Link> for instructions,
            including what data is deleted and the retention timeline. Requests are processed
            within 30 days.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Debrief is not directed at children under 13, and we do not knowingly collect
            personal information from children under 13.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this policy from time to time as the App evolves. Material changes
            will be reflected by an updated "Last updated" date above.
          </p>

          <h2>Contact Us</h2>
          <p>
            Questions about this policy or your data?{' '}
            <a href="mailto:johnpakson.developer@gmail.com">johnpakson.developer@gmail.com</a>
          </p>
        </div>
      </main>
    </>
  );
}
