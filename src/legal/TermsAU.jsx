import { Link } from 'react-router-dom';

export default function TermsAU() {
  return (
    <>
      <h1>Terms of Service</h1>
      <p className="updated">Version 1.0 — Last updated: June 2026</p>

      <h2>1. About These Terms</h2>
      <p>
        These Terms of Service ("Terms") govern your use of Debrief — Voice Journal ("the App",
        "the Service"). Debrief — Voice Journal is provided by an independent developer based in
        Australia under the developer label "PaksApps". References to "we", "us", "our", and
        "Developer" mean the developer of Debrief — Voice Journal.
      </p>
      <p>
        By creating an account — specifically, by ticking the "I accept the Terms of Service
        and Privacy Policy" checkbox during registration — you agree to be bound by these
        Terms. If you do not agree, do not create an account or use the App.
      </p>
      <p>These Terms apply each time you access or use the App.</p>

      <h2>2. The Service</h2>
      <p>Debrief is a personal voice-journalling app for iPhone and Android. It lets you:</p>
      <ul>
        <li>Record voice journal entries using your device microphone</li>
        <li>
          Transcribe those recordings into text, entirely on your device (no audio is sent to
          a server for transcription)
        </li>
        <li>Write text journal entries manually</li>
        <li>
          Receive optional calendar-aware journalling prompts based on your upcoming or recent
          meetings
        </li>
        <li>
          Sync your journal securely across your own devices via an authenticated personal
          account
        </li>
        <li>Receive optional journalling reminders via push notification</li>
      </ul>
      <p>
        Debrief is designed for personal use only. It is not a healthcare tool, a therapy
        service, a mental health application, or a medical device. Nothing in the App
        constitutes professional advice of any kind.
      </p>
      <p>
        Debrief is not designed to store medical records, clinical notes, emergency
        information, or documents subject to regulated health recordkeeping obligations. Do
        not use Debrief as a system of record for health or medical information.
      </p>

      <h2>3. Eligibility</h2>
      <p>To use Debrief, you must:</p>
      <ul>
        <li>Be at least <strong>18 years of age</strong></li>
        <li>Have the legal capacity to enter into a binding agreement</li>
        <li>Not be prohibited from using the App under any applicable law</li>
      </ul>
      <p>
        If you are under 18, you are not permitted to create an account or use the App. The
        App is primarily designed for users in Australia, but may be used in other countries.
        If you access the App from outside Australia, you are responsible for ensuring your
        use complies with local laws.
      </p>

      <h2>4. Account Registration</h2>
      <p>
        <strong>Creating an account</strong><br />
        To use the App's syncing and backup features, you must register with a valid email
        address and a password of your choosing. You must provide accurate information when
        creating your account.
      </p>
      <p>
        <strong>Account security</strong><br />
        You are responsible for keeping your password secure. You must not share your login
        credentials with anyone. You are responsible for all activity that occurs under your
        account. If you suspect unauthorised access to your account, notify us immediately at{' '}
        <a href="mailto:support@usedebrief.app">support@usedebrief.app</a>.
      </p>
      <p>
        <strong>One account per person</strong><br />
        Each account is for a single individual. You may not create accounts on behalf of
        another person, or use another person's account without their express permission.
      </p>
      <p>
        <strong>Account termination by you</strong><br />
        You can delete your account at any time by following the instructions at our{' '}
        <Link to="/account-deletion">Account &amp; Data Deletion</Link> page. On deletion,
        your journal entries and voice recordings will be deleted within 30 days.
      </p>

      <h2>5. Acceptable Use</h2>
      <p>
        <strong>What you may do</strong><br />
        You may use Debrief for your own personal journalling purposes.
      </p>
      <p><strong>What you must not do</strong></p>
      <ul>
        <li>Use the App for any commercial, business, or professional purpose without our prior written consent</li>
        <li>Use the App in any way that is unlawful, deceptive, or harmful</li>
        <li>Attempt to gain unauthorised access to any other user's account or data</li>
        <li>Reverse engineer, decompile, disassemble, or otherwise attempt to extract the source code of the App</li>
        <li>Modify, copy, or create derivative works of the App</li>
        <li>Attempt to interfere with, disrupt, or overload the App's infrastructure or Supabase's infrastructure</li>
        <li>Use the App to store or transmit content that is illegal, defamatory, threatening, abusive, obscene, or that infringes a third party's intellectual property rights</li>
        <li>Impersonate another person or misrepresent your identity</li>
        <li>Use any automated means (bots, scrapers, scripts) to access or use the App</li>
      </ul>
      <p>
        We reserve the right to suspend or terminate your account if we reasonably believe you
        have breached any of these restrictions. See Section 11 (Suspension and Termination).
      </p>

      <h2>6. Intellectual Property</h2>
      <p>
        <strong>Our property</strong><br />
        The App, including its design, code, branding, user interface, and all content we
        create (such as journalling prompts), is owned by or licensed to us and protected by
        Australian and international intellectual property law. These Terms do not grant you
        any ownership of the App or any rights in our intellectual property beyond a limited,
        non-exclusive, non-transferable licence to use the App on your personal device in
        accordance with these Terms.
      </p>
      <p>
        <strong>Your content</strong><br />
        Your journal entries, voice recordings, and transcriptions ("Your Content") are yours.
        You own them. By syncing Your Content to Supabase through the App, you grant us a
        limited, non-exclusive, worldwide, royalty-free licence to store, process, and transmit
        Your Content <strong>solely for the purpose of providing and operating the Service for
        you</strong>. This licence ends when you delete the relevant content or your account.
      </p>
      <p>We will never:</p>
      <ul>
        <li>Read your journal entries or listen to your voice recordings for any purpose other than operating the Service</li>
        <li>Use Your Content to train AI or machine learning models</li>
        <li>Share Your Content with third parties (except as required to provide the Service — i.e., storing it on Supabase)</li>
        <li>Claim ownership of Your Content</li>
      </ul>

      <h2>7. Third-Party Services</h2>
      <p>The App integrates with third-party services that are governed by their own terms and privacy policies:</p>
      <ul>
        <li>
          <strong>Supabase, Inc.</strong> — cloud infrastructure provider for authentication,
          database, and file storage. Governed by{' '}
          <a href="https://supabase.com/terms" target="_blank" rel="noopener noreferrer">Supabase's Terms of Service</a>{' '}
          and{' '}
          <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">Supabase's Privacy Policy</a>.
        </li>
        <li>
          <strong>Apple (iOS)</strong> — on-device Speech Recognition framework used for
          transcription on iPhone. Subject to{' '}
          <a href="https://www.apple.com/au/legal/" target="_blank" rel="noopener noreferrer">Apple's Terms of Use</a>{' '}
          and{' '}
          <a href="https://www.apple.com/au/privacy/" target="_blank" rel="noopener noreferrer">Apple's Privacy Policy</a>.
        </li>
        <li>
          <strong>Android transcription (whisper.cpp)</strong> — Transcription on Android
          uses the open-source whisper.cpp model, which runs entirely on your device and does
          not send your audio to any server. Your Android device's operating system is subject
          to{' '}
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Google's Terms of Service</a>.
        </li>
        <li>
          <strong>Your device's calendar provider</strong> (Apple Calendar, Google Calendar,
          or other) — the App reads your calendar events on-device with your permission; it
          does not modify your calendar or share calendar data with us.
        </li>
      </ul>
      <p>
        We are not responsible for the availability, accuracy, or conduct of any third-party
        service. If a third-party service fails, your use of features that depend on it may
        be interrupted.
      </p>

      <h2>8. Privacy</h2>
      <p>
        Your privacy matters to us. Our <Link to="/privacy">Privacy Policy</Link> explains how
        we collect, use, store, and protect your personal information, and what rights you have
        under the Privacy Act 1988 (Cth). By using Debrief, you acknowledge that you have read
        and understood our Privacy Policy.
      </p>

      <h2>9. No Warranties</h2>
      <p>
        To the maximum extent permitted by law (including the Australian Consumer Law), the
        App is provided on an "as is" and "as available" basis without any warranty, express
        or implied. We do not warrant that:
      </p>
      <ul>
        <li>The App will be uninterrupted, error-free, or free of viruses or other harmful components</li>
        <li>Any data stored through the App will be preserved without loss in all circumstances</li>
        <li>The App will meet your specific requirements</li>
      </ul>
      <p>
        <strong>Australian Consumer Law:</strong> Where the Australian Consumer Law applies to
        you as a consumer, you have statutory guarantees that cannot be excluded. Nothing in
        these Terms limits or excludes any right or remedy you have under the Australian
        Consumer Law, including the consumer guarantee that services will be provided with due
        care and skill.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>To the maximum extent permitted by law (including the Australian Consumer Law):</p>
      <ul>
        <li>
          Our total liability for any loss or damage arising from your use of the App is
          capped at AUD $50. Debrief is free — you pay nothing to use it. We set a $50
          minimum so our liability cap is never zero for a free product. This is a limit on
          what we may owe you, not a fee you pay us.
        </li>
        <li>
          We are not liable for any indirect, incidental, special, consequential, or punitive
          loss or damage, including loss of data, loss of profit, loss of goodwill, or loss of
          opportunity, even if we were advised of the possibility of such loss
        </li>
      </ul>
      <p><strong>This limitation does not apply to:</strong></p>
      <ul>
        <li>Any liability that cannot be excluded by law (including under the Australian Consumer Law)</li>
        <li>Personal injury or death caused by our negligence or wilful misconduct</li>
        <li>Fraud or fraudulent misrepresentation</li>
      </ul>

      <h2>11. Suspension and Termination</h2>
      <p>
        <strong>Suspension or termination by us</strong><br />
        We may suspend or terminate your access to the App if you breach any of these Terms,
        use the App in a way that is unlawful or harmful to us, other users, or third parties,
        we are required to do so by law, or we decide to discontinue the App. Where reasonably
        practicable, we will give you notice before suspension or termination. In serious cases
        (for example, illegal activity), we may act immediately without notice.
      </p>
      <p>
        <strong>Effect of termination</strong><br />
        On termination, your right to access the App ceases. Your journal data will be handled
        in accordance with our <Link to="/privacy">Privacy Policy</Link> (Section 10 — Data
        Retention) and our <Link to="/account-deletion">Account &amp; Data Deletion</Link>{' '}
        process.
      </p>
      <p>
        <strong>Termination of the Service</strong><br />
        We may discontinue the App with at least 30 days' written notice (by email or in-app
        notice). If we discontinue the App, we will provide reasonable guidance on exporting
        your journal data before closure.
      </p>

      <h2>12. Dispute Resolution</h2>
      <p>
        <strong>Contact us first</strong><br />
        Before commencing any legal action, you agree to contact us at{' '}
        <a href="mailto:support@usedebrief.app">support@usedebrief.app</a>{' '}
        and give us a reasonable opportunity (at least 30 days) to resolve the dispute. Most
        issues can be resolved quickly through direct contact.
      </p>
      <p>
        <strong>Governing law</strong><br />
        These Terms are governed by the laws of Victoria, Australia. You agree to submit to
        the non-exclusive jurisdiction of the courts of Victoria for the resolution of any
        dispute. Nothing in this clause prevents either party from seeking urgent interlocutory
        or injunctive relief.
      </p>

      <h2>13. Amendments to These Terms</h2>
      <p>We may update these Terms from time to time. When we do:</p>
      <ul>
        <li>We will update the "Last updated" date at the top of these Terms</li>
        <li>
          For <strong>material changes</strong> (changes that significantly affect your rights
          or obligations), we will notify you via an in-app notice or email at least{' '}
          <strong>14 days before</strong> the changes take effect
        </li>
        <li>
          For <strong>minor changes</strong> (corrections, clarifications, changes that benefit
          you), we may make the change immediately and update the notice date
        </li>
      </ul>
      <p>
        Your continued use of the App after the effective date of any change constitutes
        acceptance of the updated Terms. If you do not accept the updated Terms, you may
        terminate your account before the changes take effect.
      </p>

      <h2>14. Severability, Waiver, and Entire Agreement</h2>
      <p>
        <strong>Severability:</strong> If any provision of these Terms is found to be invalid,
        illegal, or unenforceable, that provision will be limited or eliminated to the minimum
        extent necessary, and the remaining provisions will remain in full force and effect.
      </p>
      <p>
        <strong>Waiver:</strong> Our failure to enforce any provision of these Terms on one
        occasion does not waive our right to enforce it on any other occasion.
      </p>
      <p>
        <strong>Entire agreement:</strong> These Terms and our Privacy Policy constitute the
        entire agreement between you and us regarding your use of Debrief, and supersede all
        prior agreements or understandings (whether written or oral) relating to the App.
      </p>

      <h2>15. Contact and Notices</h2>
      <p>All legal notices to us should be sent to the developer of Debrief — Voice Journal:</p>
      <p>
        Debrief — Voice Journal (developer label "PaksApps")<br />
        Email: <a href="mailto:support@usedebrief.app">support@usedebrief.app</a>
      </p>
      <p>We will send notices to you at the email address associated with your account.</p>

      <p className="updated"><em>Terms of Service v1.0 — Debrief — Voice Journal — June 2026</em></p>
    </>
  );
}
