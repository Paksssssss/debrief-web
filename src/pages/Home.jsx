import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import { useReveal } from '../components/useReveal';

const PROMPTS = [
  "What happened today that felt meaningful?",
  "What's still on your mind from today?",
  "What surprised you today?",
  "What drained you — or energised you — today?",
  "What did you learn today, big or small?",
  "What do you want to remember about today?",
  "What would you have done differently today?",
  "What are you carrying into tomorrow?",
];

const WAVE_HEIGHTS = [14, 22, 32, 24, 40, 28, 18, 36, 26, 20, 38, 30, 16, 42, 24];

function PromptRotator() {
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(i => (i + 1) % PROMPTS.length);
      setKey(k => k + 1);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="prompt-rotator">
      <p key={key} className="prompt-item phone-prompt-text">
        {PROMPTS[index]}
      </p>
    </div>
  );
}

function WaveformBars({ animate }) {
  return (
    <div className="phone-waveform">
      {WAVE_HEIGHTS.map((h, i) => (
        <div
          key={i}
          className="phone-wave-bar"
          style={{
            height: `${h}px`,
            animationName: animate ? 'waveBar' : 'none',
            animationDuration: `${0.6 + (i % 5) * 0.15}s`,
            animationDelay: `${i * 0.05}s`,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
          }}
        />
      ))}
    </div>
  );
}

function FeatureCard({ icon, iconClass, title, desc, delay }) {
  const ref = useReveal();
  return (
    <div className={`feature-card feature-card--${iconClass} reveal`} ref={ref} style={{ transitionDelay: `${delay}ms` }}>
      <div className={`feature-icon ${iconClass}`}>{icon}</div>
      <div className="feature-title">{title}</div>
      <p className="feature-desc">{desc}</p>
    </div>
  );
}

export default function Home() {
  const featuresRef = useReveal();
  const ctaRef = useReveal();

  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-glow-secondary" />
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-eyebrow">
                <span className="hero-eyebrow-dot" />
                Voice Journal
              </div>
              <h1 className="hero-title">
                Reflect on your<br /><em>day in seconds</em>
              </h1>
              <p className="hero-subtitle">
                Debrief is a private, voice-first journal that asks you one question a day —
                and actually listens. Local-first, calendar-aware, always ready.
              </p>
              <div className="hero-actions">
                <a
                  href="#"
                  className="btn-primary"
                  onClick={e => e.preventDefault()}
                >
                  ↓ App Store
                </a>
                <a
                  href="#"
                  className="btn-secondary"
                  onClick={e => e.preventDefault()}
                >
                  ↓ Google Play
                </a>
              </div>
              <div className="hero-trust">
                <span className="hero-trust-item">Private by design</span>
                <span className="hero-trust-sep">·</span>
                <span className="hero-trust-item">On-device transcription</span>
                <span className="hero-trust-sep">·</span>
                <span className="hero-trust-item">Works offline</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="phone-wrap">
                <div className="phone-frame">
                  <div className="phone-notch" />
                  <div className="phone-screen">
                    <div className="phone-header">Today</div>

                    <div className="phone-prompt-card">
                      <div className="phone-prompt-label">Today's prompt</div>
                      <PromptRotator />
                    </div>

                    <div className="phone-entry">
                      <div className="phone-entry-time">Earlier · 9:14 AM</div>
                      <div className="phone-entry-text">
                        The standup was shorter than usual. Got into flow state around noon — rare.
                      </div>
                    </div>

                    <div className="phone-entry">
                      <div className="phone-entry-time">Yesterday · 10:52 PM</div>
                      <div className="phone-entry-text">
                        Finished the proposal. Felt good about it. Need to follow up Thursday.
                      </div>
                    </div>

                    <WaveformBars animate={true} />

                    <div className="phone-record-btn">
                      <div className="phone-record-icon" />
                    </div>
                    <div className="phone-home-bar" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="section" id="features">
        <div className="container">
          <div className="reveal" ref={featuresRef}>
            <div className="section-eyebrow">Why Debrief</div>
            <h2 className="section-title">
              Built around how<br />you actually think
            </h2>
            <p className="section-subtitle">
              No templates, no mood logs, no tags. Just a question and your voice — private by design.
            </p>
          </div>

          <div className="features-grid">
            <FeatureCard
              icon="🎙️"
              iconClass="lavender"
              title="Voice-first capture"
              desc="Just talk. Debrief captures every word instantly — right on your phone, with nothing uploaded and no waiting around."
              delay={0}
            />
            <FeatureCard
              icon="📴"
              iconClass="amber"
              title="Always there, even offline"
              desc="No signal? No problem. Entries save to your phone the moment you record them, then quietly sync to your account when you reconnect."
              delay={100}
            />
            <FeatureCard
              icon="📅"
              iconClass="green"
              title="Knows how your day went"
              desc="Debrief glances at your calendar and asks about what actually happened. Had a big meeting? It'll follow up. Private events stay private — Debrief never reads their names."
              delay={200}
            />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-glow" />
        <div className="container">
          <div className="reveal" ref={ctaRef}>
            <h2 className="cta-title">Your day deserves<br />two minutes.</h2>
            <p className="cta-subtitle">Download Debrief and start reflecting tonight.</p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <a href="#" className="btn-primary" onClick={e => e.preventDefault()}>
                ↓ App Store
              </a>
              <a href="#" className="btn-secondary" onClick={e => e.preventDefault()}>
                ↓ Google Play
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-logo">Debrief<span>.</span></div>
          <ul className="footer-links">
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/account-deletion">Account Deletion</Link></li>
          </ul>
          <p className="footer-copy">© {new Date().getFullYear()} John Pakson</p>
        </div>
      </footer>
    </>
  );
}
