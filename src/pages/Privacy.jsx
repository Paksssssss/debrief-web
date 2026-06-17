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
          <p className="updated">Version 1.0 — Last updated: June 2026</p>

          <h2>1. About This Policy</h2>
          <p>
            Debrief: Voice Journal ("Debrief", "the App", "we", "our", "us") is a personal
            voice-journalling application for iPhone and Android, operated by John Vincent Pakson
            ("the Developer").
          </p>
          <p>
            This Privacy Policy explains what personal information we collect when you use Debrief,
            why we collect it, how we handle it, who we may share it with, and what rights you have
            under the <strong>Privacy Act 1988 (Cth)</strong> and the{' '}
            <strong>Australian Privacy Principles (APPs)</strong>.
          </p>
          <p>
            We are committed to handling your personal information — including your voice recordings
            and journal entries — with care, transparency, and respect. Debrief is designed to be
            local-first and privacy-respecting, and this policy reflects that in practice, not just
            in words.
          </p>
          <p>
            <strong>Contact for privacy enquiries:</strong><br />
            Email: <a href="mailto:johnpakson.developer@gmail.com">johnpakson.developer@gmail.com</a><br />
            Postal: U 4 / 20 Stanlake Street, Footscray VIC 3011, Australia
          </p>

          <h2>2. What Personal Information We Collect</h2>
          <p>
            We collect only the information needed to operate the App and provide its features to
            you. Here is a specific list of every category of personal information we collect:
          </p>
          <table>
            <thead>
              <tr>
                <th>Information</th>
                <th>Description</th>
                <th>Where it is stored</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Email address</strong></td>
                <td>Used to create and secure your account</td>
                <td>Supabase Auth (cloud)</td>
              </tr>
              <tr>
                <td><strong>Voice recordings</strong></td>
                <td>Audio files you record as journal entries</td>
                <td>On your device and Supabase Storage (cloud backup)</td>
              </tr>
              <tr>
                <td><strong>Transcriptions</strong></td>
                <td>Text derived from your voice recordings, converted on-device</td>
                <td>On your device (SQLite) and Supabase database (cloud sync)</td>
              </tr>
              <tr>
                <td><strong>Journal text</strong></td>
                <td>Written responses and notes you enter in the App</td>
                <td>On your device (SQLite) and Supabase database (cloud sync)</td>
              </tr>
              <tr>
                <td><strong>Calendar event names</strong></td>
                <td>
                  Names of calendar events used for journalling prompts — private events are
                  replaced with the label "Private Event" before they leave your device
                </td>
                <td>On your device only; never uploaded in their original form if marked private</td>
              </tr>
              <tr>
                <td><strong>Calendar event times</strong></td>
                <td>Start and end times of calendar events used for prompts</td>
                <td>On your device only</td>
              </tr>
              <tr>
                <td><strong>Notification preferences</strong></td>
                <td>Your notification settings (e.g., end-of-day reminder time)</td>
                <td>On your device (SQLite) and Supabase database (cloud sync)</td>
              </tr>
              <tr>
                <td><strong>Consent record</strong></td>
                <td>The timestamp and version of these terms you accepted at registration</td>
                <td>Supabase database</td>
              </tr>
            </tbody>
          </table>
          <p>We do <strong>not</strong> collect:</p>
          <ul>
            <li>Your name or date of birth</li>
            <li>Payment information (the App is free)</li>
            <li>Location data</li>
            <li>Health records</li>
            <li>Contacts</li>
            <li>Photos or your camera roll</li>
            <li>Your device's unique identifiers for advertising purposes</li>
            <li>Any third-party analytics or advertising data</li>
          </ul>

          <h2>3. Sensitive Information</h2>
          <p>
            Under the Privacy Act, some categories of information receive a higher level of
            protection. These are called <strong>sensitive information</strong> (APP 3.3).
          </p>
          <p>
            <strong>Voice recordings</strong> may constitute biometric information under Australian
            law, because voice patterns can be used to identify an individual. We treat your voice
            recordings as sensitive information and handle them accordingly — we only collect them
            because you have explicitly chosen to record a journal entry, and with your active
            consent (you press record).
          </p>
          <p>
            <strong>Journal entries and transcriptions</strong> are not inherently health
            information, but because they are personal journal content, they may incidentally
            contain information about your health, relationships, beliefs, or other sensitive
            matters. We treat all journal content as sensitive and apply the same protections.
          </p>
          <p>We collect sensitive information only because:</p>
          <ul>
            <li>You have explicitly chosen to create a voice journal entry (active consent by recording)</li>
            <li>It is directly necessary to operate the journalling features you have requested</li>
          </ul>
          <p>
            We do not use your voice recordings or journal content for any purpose beyond operating
            the App's features for you personally.
          </p>

          <h2>4. How We Collect Personal Information</h2>
          <p><strong>Directly from you:</strong></p>
          <ul>
            <li>When you create an account (email address)</li>
            <li>When you record a voice journal entry (voice recording, transcription)</li>
            <li>When you type a journal entry (journal text)</li>
            <li>When you accept these terms (consent record)</li>
            <li>When you configure your notification preferences (notification settings)</li>
          </ul>
          <p><strong>Automatically when you use the App:</strong></p>
          <p>
            With your permission, we read your device calendar to surface relevant journalling
            prompts (e.g., "How did your 2pm meeting go?"). We only read event names and times for
            calendars you have enabled in the App's settings. The App never writes to, modifies,
            or deletes your calendar events.
          </p>
          <p>
            <strong>We do not collect personal information from third parties</strong> (for example,
            we do not use social login, data brokers, or advertising partners).
          </p>

          <h2>5. Why We Collect Personal Information</h2>
          <p>
            We collect your personal information for the following specific purposes, as required
            by <strong>APP 3.2</strong>:
          </p>
          <table>
            <thead>
              <tr>
                <th>Purpose</th>
                <th>Information used</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Creating and securing your account</td>
                <td>Email address</td>
              </tr>
              <tr>
                <td>Enabling voice journalling and transcription</td>
                <td>Voice recordings, transcriptions</td>
              </tr>
              <tr>
                <td>Storing and displaying your journal entries</td>
                <td>Journal text, transcriptions</td>
              </tr>
              <tr>
                <td>Syncing your journal across your own devices</td>
                <td>All journal data, notification preferences</td>
              </tr>
              <tr>
                <td>Providing calendar-aware journalling prompts</td>
                <td>Calendar event names and times (read-only)</td>
              </tr>
              <tr>
                <td>Sending you journalling reminders (notifications)</td>
                <td>Notification preferences</td>
              </tr>
              <tr>
                <td>Recording your consent to these terms and our T&amp;Cs</td>
                <td>Consent record</td>
              </tr>
              <tr>
                <td>Complying with our legal obligations</td>
                <td>All personal information</td>
              </tr>
            </tbody>
          </table>
          <p>We do not collect personal information for advertising, profiling, or to sell to third parties.</p>

          <h2>6. How We Use Your Information</h2>
          <p>In addition to the collection purposes above, we may use your personal information to:</p>
          <ul>
            <li>Respond to your support enquiries or complaints</li>
            <li>
              Improve the performance and reliability of the App (using crash logs or technical
              diagnostics — these do not include your journal content or voice recordings)
            </li>
            <li>
              Comply with legal obligations (for example, if required by a court order or law
              enforcement request — we will notify you to the extent permitted by law)
            </li>
          </ul>
          <p>We will not use your personal information for direct marketing without your separate, informed consent.</p>

          <h2>7. Who We Share Your Information With</h2>
          <p>
            Debrief is designed to keep your data private. We share your personal information
            with a small number of infrastructure providers who are necessary to run the App.
            We do not sell, rent, or trade your personal information.
          </p>
          <p>
            <strong>Supabase, Inc.</strong><br />
            Your account credentials, journal entries, transcriptions, voice recordings, and
            notification preferences are stored on Supabase, our cloud infrastructure provider.
            Supabase is used for authentication, database storage, and file storage (voice
            recordings).
          </p>
          <p>
            <strong>Apple (iOS users)</strong><br />
            On iPhone, speech-to-text transcription uses Apple's on-device Speech Recognition
            framework. Your audio is processed entirely on your device and never sent to Apple's
            servers. Apple's framework operates locally and Apple does not receive your voice
            recordings.
          </p>
          <p>
            <strong>Google (Android users)</strong><br />
            On Android, transcription uses whisper.cpp, an open-source on-device model downloaded
            once to your device (~60 MB) and cached locally. Your voice recordings are processed
            entirely on-device. Google is not involved in transcription.
          </p>
          <p><strong>We do not use:</strong></p>
          <ul>
            <li>Third-party analytics (no Mixpanel, Amplitude, Firebase Analytics, etc.)</li>
            <li>Advertising networks</li>
            <li>Social media SDKs</li>
            <li>Crash reporting services that include personal content</li>
          </ul>

          <h2>8. Overseas Disclosure of Personal Information</h2>
          <p>
            Under <strong>APP 8</strong>, when we disclose personal information to overseas
            recipients, we remain responsible for ensuring that recipient handles it in accordance
            with the Australian Privacy Principles.
          </p>
          <p>
            Supabase is a US-incorporated company. The Debrief project is hosted in the{' '}
            <strong>ap-southeast-1 (Singapore)</strong> region. This means your personal
            information — including your account credentials, journal entries, transcriptions,
            voice recordings, and notification preferences — is stored on servers in Singapore,
            which is an overseas disclosure under APP 8.
          </p>
          <p>
            Under <strong>APP 8.1</strong>, we remain responsible for ensuring that Supabase
            handles your personal information in a manner consistent with the Australian Privacy
            Principles, even though Supabase is an overseas recipient. We address this obligation
            by:
          </p>
          <ul>
            <li>
              Entering into Supabase's{' '}
              <a href="https://supabase.com/legal/dpa" target="_blank" rel="noopener noreferrer">
                Data Processing Agreement (DPA)
              </a>
              , which contractually requires Supabase to handle personal information in a manner
              consistent with applicable data protection standards
            </li>
            <li>
              Supabase maintains SOC 2 Type II certification and implements AES-256 encryption
              at rest and TLS 1.2+ encryption in transit for all data stored in its Singapore region
            </li>
          </ul>
          <p>
            <strong>Consent to overseas disclosure (APP 8.2(a)):</strong> By creating an account
            and using Debrief, you expressly consent to the disclosure of your personal information
            to Supabase, Inc., a US-incorporated company operating database and storage
            infrastructure in Singapore (ap-southeast-1). You acknowledge that Singapore may not
            have data protection laws that are substantially similar to the Australian Privacy
            Principles, and that your information in Singapore is protected by contractual
            obligations under Supabase's DPA rather than by Australian law.
          </p>
          <p>
            For more information, see{' '}
            <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">
              Supabase's Privacy Policy
            </a>{' '}
            and{' '}
            <a href="https://supabase.com/legal/dpa" target="_blank" rel="noopener noreferrer">
              Supabase's DPA
            </a>.
          </p>

          <h2>9. Data Storage and Security</h2>
          <p>
            <strong>Local storage:</strong> Your journal data is stored primarily in an encrypted
            SQLite database on your device. Access is controlled by your device's operating system
            and passcode/biometric lock.
          </p>
          <p>
            <strong>Cloud storage:</strong> Your data is synced to Supabase, which provides
            encrypted data at rest (AES-256), encrypted data in transit (TLS 1.2+), and
            row-level security — only you (authenticated with your account) can read or write your
            own data. No other user or account, including ours, can access your entries without
            your credentials.
          </p>
          <p>
            <strong>Voice recordings</strong> are stored in a private Supabase Storage bucket.
            Only you can access your own audio files. We cannot access the contents of your
            recordings except for the purpose of providing the service.
          </p>
          <p>
            We take reasonable steps to protect your personal information from misuse,
            interference, loss, and unauthorised access, modification, or disclosure, in
            accordance with <strong>APP 11</strong>.
          </p>

          <h2>10. Data Retention</h2>
          <table>
            <thead>
              <tr>
                <th>Data type</th>
                <th>Retention period</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Account credentials (email)</td>
                <td>Until you delete your account</td>
              </tr>
              <tr>
                <td>Journal entries and transcriptions</td>
                <td>Until you delete them in-App, or until you delete your account</td>
              </tr>
              <tr>
                <td>Voice recordings</td>
                <td>Until you delete the entry in-App, or until you delete your account</td>
              </tr>
              <tr>
                <td>Calendar data</td>
                <td>Never stored beyond your device; not retained in cloud</td>
              </tr>
              <tr>
                <td>Notification preferences</td>
                <td>Until you delete your account</td>
              </tr>
              <tr>
                <td>Consent record</td>
                <td>Retained for 7 years from the date of consent for legal compliance purposes</td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Account deletion:</strong> If you request account deletion, we will delete
            your account, journal entries, transcriptions, and voice recordings within 30 days.
            See our <Link to="/account-deletion">Account &amp; Data Deletion</Link> page for the
            full process and what data is affected.
          </p>
          <p>
            After deletion, we do not retain backups of your journal content. Your consent record
            may be retained in an anonymised, non-identifiable form for legal record-keeping.
          </p>

          <h2>11. Your Privacy Rights</h2>
          <p>
            Under the <strong>Privacy Act 1988 (Cth)</strong> and the Australian Privacy
            Principles, you have the following rights:
          </p>
          <p>
            <strong>Right to access (APP 12)</strong><br />
            You can request access to the personal information we hold about you. Most of your
            journal data is directly accessible to you within the App at any time. For a copy of
            any other personal information we hold, contact us at{' '}
            <a href="mailto:johnpakson.developer@gmail.com">johnpakson.developer@gmail.com</a>.
            We will respond within 30 days.
          </p>
          <p>
            <strong>Right to correction (APP 13)</strong><br />
            If you believe personal information we hold about you is inaccurate, incomplete, out
            of date, or misleading, you can request that we correct it. Contact us at{' '}
            <a href="mailto:johnpakson.developer@gmail.com">johnpakson.developer@gmail.com</a>{' '}
            and we will respond within 30 days. If we choose not to correct the information, we
            will explain our reasons.
          </p>
          <p>
            <strong>Right to withdraw consent</strong><br />
            You may withdraw your consent to our collection and use of your personal information
            at any time by deleting your account. See our{' '}
            <Link to="/account-deletion">Account &amp; Data Deletion</Link> page. Note that
            withdrawing consent by deleting your account will mean you can no longer use the App.
          </p>

          <h2>12. Notifiable Data Breaches</h2>
          <p>
            In the event of a data breach that is likely to result in serious harm to you — for
            example, unauthorised access to your journal entries or voice recordings — we will:
          </p>
          <ol>
            <li>Contain the breach as quickly as possible</li>
            <li>Assess whether it is likely to result in serious harm</li>
            <li>
              Notify you and the Office of the Australian Information Commissioner (OAIC){' '}
              <strong>as soon as practicable and within 30 days</strong> of becoming aware of the
              breach, as required by Part IIIC of the Privacy Act 1988 (Cth)
            </li>
            <li>
              Include in the notification: a description of the breach, the type of information
              involved, what steps we have taken, and what steps you can take to protect yourself
            </li>
          </ol>
          <p>We maintain this obligation regardless of the size of our business.</p>

          <h2>13. Children's Privacy</h2>
          <p>
            Debrief is not directed at children under the age of 15. We do not knowingly collect
            personal information from anyone under 15. If you are under 15, please do not use
            the App. If we become aware that we have inadvertently collected personal information
            from a child under 15 without appropriate consent, we will take steps to delete that
            information promptly. If you are a parent or guardian and believe your child has
            provided us with personal information, please contact us at{' '}
            <a href="mailto:johnpakson.developer@gmail.com">johnpakson.developer@gmail.com</a>.
          </p>

          <h2>14. Marketing Communications</h2>
          <p>
            Debrief does not send marketing or promotional emails. The only communications we may
            send are transactional notifications (e.g., account-related security emails sent by
            Supabase Auth when you reset your password) and in-app journalling reminders (push
            notifications), which you can disable at any time in the App's Settings screen or your
            device's notification settings.
          </p>
          <p>
            We do not send commercial electronic messages within the meaning of the{' '}
            <strong>Spam Act 2003 (Cth)</strong>. If this changes, we will seek your explicit,
            opt-in consent first.
          </p>

          <h2>15. Complaints</h2>
          <p>
            <strong>Step 1 — Contact us first</strong><br />
            If you have a complaint about how we have handled your personal information, please
            contact us first at{' '}
            <a href="mailto:johnpakson.developer@gmail.com">johnpakson.developer@gmail.com</a>{' '}
            with the subject line "Privacy Complaint". We will acknowledge your complaint within
            5 business days and aim to resolve it within 30 days.
          </p>
          <p>
            <strong>Step 2 — Escalate to the OAIC</strong><br />
            If you are not satisfied with our response, or if we fail to respond within 30 days,
            you have the right to lodge a complaint with the{' '}
            <strong>Office of the Australian Information Commissioner (OAIC)</strong>:
          </p>
          <ul>
            <li>
              Website:{' '}
              <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">
                www.oaic.gov.au
              </a>
            </li>
            <li>
              Online complaint form:{' '}
              <a href="https://www.oaic.gov.au/privacy/privacy-complaints" target="_blank" rel="noopener noreferrer">
                oaic.gov.au/privacy/privacy-complaints
              </a>
            </li>
            <li>Phone: 1300 363 992</li>
            <li>Post: GPO Box 5218, Sydney NSW 2001</li>
          </ul>

          <h2>16. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time as the App evolves. When we make material
            changes, we will update the "Last updated" date above and notify you via a notice
            within the App, or by email if the change is significant. If a change affects how we
            use your personal information in a way that requires fresh consent, we will ask for
            your consent before the change takes effect. Continued use of the App after a policy
            update constitutes acceptance of the updated policy.
          </p>

          <h2>17. Contact Us</h2>
          <p>
            For any questions, concerns, or requests relating to this Privacy Policy or your
            personal information:
          </p>
          <p>
            <strong>John Vincent Pakson</strong><br />
            Debrief: Voice Journal<br />
            Email: <a href="mailto:johnpakson.developer@gmail.com">johnpakson.developer@gmail.com</a><br />
            Postal: U 4 / 20 Stanlake Street, Footscray VIC 3011, Australia
          </p>
          <p>We aim to respond to all privacy enquiries within 5 business days.</p>

          <p className="updated"><em>Privacy Policy v1.0 — Debrief: Voice Journal — June 2026</em></p>
        </div>
      </main>
    </>
  );
}
