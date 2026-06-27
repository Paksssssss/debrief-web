import { Link } from 'react-router-dom';

// Standalone Privacy Policy for Philippine users — governed by RA 10173 (Data Privacy Act 2012).
// This is a complete document, not a supplement to the AU version.
// ⚠️ Drafted with AI assistance as at June 2026. Not legal advice. Review by a Philippine DPA lawyer required before commercial reliance.
export default function PrivacyPH() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p className="updated">Version 1.0 — Last updated: June 2026</p>
      <p className="updated">
        <em>
          ⚠️ This document was drafted with AI assistance and reviewed against Philippine law as
          at June 2026. It is provided as a starting point and does not constitute legal advice.
          It should be reviewed by a lawyer familiar with the Philippine Data Privacy Act (RA
          10173) and NPC circulars before commercial reliance.
        </em>
      </p>

      <h2>1. About This Policy</h2>
      <p>
        Debrief — Voice Journal ("Debrief", "the App", "we", "our", "us") is a personal
        voice-journalling application for iPhone and Android, provided by an independent
        developer based in Australia under the developer label "PaksApps". References to
        "we", "us", and "our" mean the developer of Debrief — Voice Journal.
      </p>
      <p>
        This Privacy Policy applies to Philippine users and is governed by the{' '}
        <strong>Data Privacy Act of 2012 (Republic Act No. 10173)</strong> ("the DPA"),
        enforced by the <strong>National Privacy Commission (NPC)</strong>. It explains what
        personal information we collect when you use Debrief, why we collect it, how we handle
        it, who we may share it with, and what rights you have under the DPA.
      </p>
      <p>
        We are committed to handling your personal information — including your voice recordings
        and journal entries — with care, transparency, and respect. Debrief is designed to be
        local-first and privacy-respecting, and this policy reflects that in practice, not just
        in words.
      </p>
      <p>
        <strong>Contact for privacy enquiries:</strong><br />
        Email: <a href="mailto:support@usedebrief.app">support@usedebrief.app</a>
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
            <td>
              Private event names are never stored. Non-private event names used to generate
              a journal prompt are stored as part of that entry and synced to Supabase —
              the same as any other entry text.
            </td>
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

      <h2>3. Sensitive Personal Information</h2>
      <p>
        Under the DPA, <strong>sensitive personal information</strong> includes information
        about a person's race, ethnic origin, marital status, age, colour, and religious,
        philosophical or political affiliations or beliefs; health, education, genetic or
        sexual life; or any proceeding for any offense committed or alleged to have been
        committed, and the disposal of such proceedings.
      </p>
      <p>
        <strong>Voice recordings</strong> may constitute biometric data under the DPA, because
        voice patterns can be used to identify an individual. We treat your voice recordings as
        sensitive personal information — we only collect them because you have explicitly chosen
        to record a journal entry, with your active consent (you press record).
      </p>
      <p>
        <strong>Journal entries and transcriptions</strong> may incidentally contain sensitive
        personal information — for example, information about your health, relationships, beliefs,
        or other matters listed under the DPA definition. We treat all journal content as
        sensitive and apply the same protections.
      </p>
      <p>We collect sensitive personal information only because:</p>
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
        Under the DPA, personal information may only be collected for a declared, specified,
        and legitimate purpose. We collect your personal information for the following specific
        purposes:
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
            <td>Complying with our legal obligations under the DPA</td>
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
          Comply with legal obligations under the DPA or other applicable law (for example, if
          required by a court order or law enforcement request — we will notify you to the extent
          permitted by law)
        </li>
      </ul>
      <p>We will not use your personal information for direct marketing without your separate, informed consent.</p>
      <p>
        Debrief is for personal journaling and reflection only. It is not designed to store
        medical records, clinical notes, emergency information, or documents subject to
        regulated health recordkeeping obligations. Please do not use Debrief as a system of
        record for health or medical information.
      </p>

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
        Supabase is used for authentication, database storage, and file storage (voice recordings).
      </p>
      <p>
        <strong>Apple (iOS users)</strong><br />
        On iPhone, speech-to-text transcription uses Apple's on-device Speech Recognition
        framework. Your audio is processed entirely on your device and never sent to Apple's
        servers. Apple's framework operates locally and Apple does not receive your voice recordings.
      </p>
      <p>
        <strong>Android transcription (whisper.cpp)</strong><br />
        On Android, transcription uses whisper.cpp, an open-source on-device model downloaded
        once to your device (~60 MB) and cached locally. Your voice recordings are processed
        entirely on-device and never sent to any server. No third party receives your audio.
      </p>
      <p><strong>We do not use:</strong></p>
      <ul>
        <li>Third-party analytics (no Mixpanel, Amplitude, Firebase Analytics, etc.)</li>
        <li>Advertising networks</li>
        <li>Social media SDKs</li>
        <li>Crash reporting services that include personal content</li>
      </ul>

      <h2>8. International Transfer of Personal Information</h2>
      <p>
        Under Section 21 of the DPA's Implementing Rules and Regulations, personal information
        transferred outside the Philippines must be protected by comparable data protection
        standards. Debrief stores your personal information — including account credentials,
        journal entries, transcriptions, voice recordings, and notification preferences — on
        servers located in <strong>Singapore (ap-southeast-1)</strong> via our cloud
        infrastructure provider, Supabase (a US-incorporated company).
      </p>
      <p>
        Singapore operates its own data protection framework — the{' '}
        <strong>Personal Data Protection Act 2012 (PDPA)</strong>, administered by the{' '}
        <strong>Personal Data Protection Commission (PDPC)</strong> — which provides comparable
        data protection obligations to the Philippine DPA. In addition, Supabase maintains a
        Data Processing Agreement and holds SOC 2 Type II certification, providing further
        contractual safeguards.
      </p>
      <p>
        This international transfer is necessary to provide the cloud sync, backup, and
        cross-device features of the App. By creating an account, you consent to your personal
        information being transferred to and stored in Singapore under these safeguards.
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
        row-level security — no other user account can read or write your data.
      </p>
      <p>
        <strong>Developer access:</strong> As the operator of Debrief, we have administrative
        access to the underlying database infrastructure. Your journal content is not
        end-to-end encrypted at this time, which means it is technically readable by the
        operator via direct database access. We do not access user journal content, but you
        should be aware this is architecturally possible. End-to-end encryption is planned
        for a future release.
      </p>
      <p>
        <strong>Voice recordings</strong> are stored in a private Supabase Storage bucket.
        No other user account can access your audio files.
      </p>
      <p>
        We implement reasonable and appropriate organisational, physical, and technical
        security measures to protect your personal information from unauthorised access,
        disclosure, alteration, and destruction, as required by the DPA.
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
            <td>Calendar data (raw — event times, attendees, etc.)</td>
            <td>
              Never stored in cloud — processed on your device only. Non-private event names
              used to generate a journal prompt are stored as part of that journal entry and
              follow the same retention as journal entries above.
            </td>
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

      <h2>11. Your Rights Under the Data Privacy Act</h2>
      <p>
        Under <strong>Republic Act No. 10173</strong>, you have the following rights as a
        data subject:
      </p>
      <p>
        <strong>1. Right to be informed</strong><br />
        You have the right to be told what personal information about you is being collected,
        how it is being used, how long it will be retained, and with whom it may be shared.
        This Privacy Policy fulfils that obligation.
      </p>
      <p>
        <strong>2. Right to access</strong><br />
        You can request a copy of your personal information that we hold, including the sources
        of that information, who it has been shared with, and the purposes for processing. Most
        of your journal data is directly accessible within the App. For anything else, contact{' '}
        <a href="mailto:support@usedebrief.app">support@usedebrief.app</a>. We will respond
        within 30 days.
      </p>
      <p>
        <strong>3. Right to object</strong><br />
        You have the right to object to the processing of your personal information, including
        where it is being used for direct marketing. Contact us at{' '}
        <a href="mailto:support@usedebrief.app">support@usedebrief.app</a> to exercise this
        right.
      </p>
      <p>
        <strong>4. Right to erasure or blocking</strong><br />
        You have the right to request that your personal information be deleted or blocked if
        it is incomplete, outdated, false, unlawfully obtained, or no longer necessary for the
        purpose for which it was collected. See our{' '}
        <Link to="/account-deletion">Account &amp; Data Deletion</Link> page for how to
        request account deletion, or contact us at{' '}
        <a href="mailto:support@usedebrief.app">support@usedebrief.app</a>.
      </p>
      <p>
        <strong>5. Right to rectification</strong><br />
        If you believe personal information we hold is inaccurate, incomplete, or outdated,
        you can request correction. Contact us at{' '}
        <a href="mailto:support@usedebrief.app">support@usedebrief.app</a> and we will respond
        within 30 days.
      </p>
      <p>
        <strong>6. Right to data portability</strong><br />
        You have the right to obtain a copy of your personal information in a structured,
        electronic format that allows you to transmit it to another organisation. Contact us
        at <a href="mailto:support@usedebrief.app">support@usedebrief.app</a> to request this.
      </p>
      <p>
        <strong>7. Right to damages</strong><br />
        You have the right to claim compensation for any damages sustained as a result of
        inaccurate, incomplete, outdated, false, or unlawfully obtained personal information,
        subject to the provisions of the DPA.
      </p>

      <h2>12. Data Breach Notification</h2>
      <p>
        In the event of a personal data breach that is likely to result in serious harm to
        you — for example, unauthorised access to your journal entries or voice recordings —
        we will:
      </p>
      <ol>
        <li>Contain the breach as quickly as possible</li>
        <li>Assess the nature, extent, and cause of the breach</li>
        <li>
          Notify the <strong>National Privacy Commission (NPC)</strong> and affected data
          subjects within a reasonable time after discovery of the breach, in accordance with
          NPC Circular 16-03 on personal data breach management
        </li>
        <li>
          Include in the notification: a description of the breach, the type of information
          involved, what steps we have taken, and what steps you can take to protect yourself
        </li>
      </ol>

      <h2>13. Children's Privacy</h2>
      <p>
        Debrief is intended for users aged 18 and over. We do not knowingly collect
        personal information from anyone under 18. If you are under 18, please do not use
        the App. If we become aware that we have inadvertently collected personal information
        from a minor under 18 without appropriate consent, we will take steps to delete that
        information promptly. If you are a parent or guardian and believe your child has
        provided us with personal information, please contact us at{' '}
        <a href="mailto:support@usedebrief.app">support@usedebrief.app</a>.
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
        We will not send you commercial electronic messages or use your personal information
        for direct marketing without your separate, explicit consent.
      </p>

      <h2>15. Complaints</h2>
      <p>
        <strong>Step 1 — Contact us first</strong><br />
        If you have a complaint about how we have handled your personal information, please
        contact us first at{' '}
        <a href="mailto:support@usedebrief.app">support@usedebrief.app</a>{' '}
        with the subject line "Privacy Complaint". We will acknowledge your complaint within
        5 business days and aim to resolve it within 30 days.
      </p>
      <p>
        <strong>Step 2 — Escalate to the NPC</strong><br />
        If you are not satisfied with our response, or if we fail to respond within 30 days,
        you have the right to lodge a complaint with the{' '}
        <strong>National Privacy Commission (NPC)</strong>:
      </p>
      <ul>
        <li>
          Website:{' '}
          <a href="https://www.privacy.gov.ph" target="_blank" rel="noopener noreferrer">
            www.privacy.gov.ph
          </a>
        </li>
        <li>
          Complaints:{' '}
          <a href="https://www.privacy.gov.ph/complaints" target="_blank" rel="noopener noreferrer">
            privacy.gov.ph/complaints
          </a>
        </li>
      </ul>

      <h2>16. Data Protection Officer</h2>
      <p>
        As required under the Implementing Rules and Regulations of RA 10173 (Rule VI, Section
        21) and NPC Circular 16-03, we have designated a Data Protection Officer:
      </p>
      <p>
        <strong>Name:</strong> John Pakson<br />
        <strong>Contact:</strong>{' '}
        <a href="mailto:support@usedebrief.app">support@usedebrief.app</a>
      </p>
      <p>
        You may contact the Data Protection Officer to exercise any of your rights under the
        DPA, to ask questions about how your personal information is handled, or to raise a
        data privacy concern.
      </p>

      <h2>17. NPC Registration</h2>
      <p>
        Under NPC Circular 17-01, organisations that process sensitive personal information of{' '}
        <strong>1,000 or more individuals</strong> must register their data processing systems
        with the NPC. Debrief currently processes personal information of fewer than 1,000
        Philippine users. We will initiate NPC registration when this threshold is met or is
        expected to be met imminently.
      </p>

      <h2>18. Changes to This Policy</h2>
      <p>
        We may update this policy from time to time as the App evolves. When we make material
        changes, we will update the "Last updated" date above and notify you via a notice
        within the App, or by email if the change is significant. If a change affects how we
        use your personal information in a way that requires fresh consent under the DPA, we
        will ask for your consent before the change takes effect.
      </p>

      <h2>19. Contact Us</h2>
      <p>
        For any questions, concerns, or requests relating to this Privacy Policy or your
        personal information:
      </p>
      <p>
        Debrief — Voice Journal (developer label "PaksApps")<br />
        Email: <a href="mailto:support@usedebrief.app">support@usedebrief.app</a>
      </p>
      <p>We aim to respond to all privacy enquiries within 5 business days.</p>

      <p className="updated"><em>Privacy Policy v1.0 (Philippines) — Debrief — Voice Journal — June 2026</em></p>
    </>
  );
}
