import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import AccountDeletion from './pages/AccountDeletion';
import ScrollToTop from './components/ScrollToTop.jsx';

export default function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/account-deletion" element={<AccountDeletion />} />
    </Routes>
    </>
  );
}
