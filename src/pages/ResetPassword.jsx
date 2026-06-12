import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Nav from '../components/Nav';
import { supabase } from '../lib/supabase';

const MIN_PASSWORD_LENGTH = 6;

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const tokenHash = searchParams.get('token_hash');
  const type = searchParams.get('type');

  const [status, setStatus] = useState('verifying');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      if (!tokenHash || type !== 'recovery') {
        if (!cancelled) setStatus('expired');
        return;
      }
      const { error: verifyError } = await supabase.auth.verifyOtp({
        token_hash: tokenHash,
        type: 'recovery',
      });
      if (cancelled) return;
      setStatus(verifyError ? 'expired' : 'ready');
    })();

    return () => { cancelled = true; };
  }, [tokenHash, type]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (password.length < MIN_PASSWORD_LENGTH) {
      setError(`Password must be at least ${MIN_PASSWORD_LENGTH} characters.`);
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setStatus('submitting');
    setError(null);
    const { error: updateError } = await supabase.auth.updateUser({ password });

    if (updateError) {
      setError(updateError.message);
      setStatus('error');
      return;
    }
    setStatus('success');
  }

  return (
    <>
      <Nav />
      <main className="inner-page">
        <div className="container">
          <Link to="/" className="back-link">← Back to home</Link>
          <h1>Reset your password</h1>

          <div className="auth-card">
            {status === 'verifying' && (
              <p className="auth-card-text">Verifying your reset link…</p>
            )}

            {status === 'expired' && (
              <p className="auth-card-text">
                This link has expired, has already been used, or is invalid. Open the
                Debrief app and request a new reset link to continue.
              </p>
            )}

            {status === 'success' && (
              <>
                <p className="auth-card-text">
                  Your password has been updated. You can now return to the Debrief app
                  and sign in with your new password.
                </p>
                <a href="debrief://login" className="btn-primary">Open Debrief app</a>
              </>
            )}

            {(status === 'ready' || status === 'submitting' || status === 'error') && (
              <form onSubmit={handleSubmit} className="auth-form">
                <p className="auth-card-text">Choose a new password for your account.</p>

                <label className="auth-field">
                  <span className="auth-label">New password</span>
                  <input
                    className="auth-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                    required
                  />
                </label>

                <label className="auth-field">
                  <span className="auth-label">Confirm new password</span>
                  <input
                    className="auth-input"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    autoComplete="new-password"
                    required
                  />
                </label>

                {error && <p className="auth-error">{error}</p>}

                <button type="submit" className="btn-primary" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Updating…' : 'Update password'}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
