import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import TermsOfService from './pages/TermsOfService';
import AccountDeletion from './pages/AccountDeletion';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import ResetPassword from './pages/ResetPassword';
import ScrollToTop from './components/ScrollToTop.jsx';

export default function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/account-deletion" element={<AccountDeletion />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
    </>
  );
}
