import { Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Concerns from './Pages/Concerns/Concerns';
import Contact from './Pages/Contact/Contact';
import NoPages from './Pages/NoPages/NoPages';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import ScrollOnLoad from './Components/ScrollOnLoad/ScrollOnLoad';
import { useRouteLoading } from './Hooks/useRouteLoading/useRouteLoading';
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import CorporateProfile from './Pages/CorporateProfile/CorporateProfile';
import KawaiiGlobalVentures from './Pages/KawaiiGlobalVentures/KawaiiGlobalVentures';
import KawaiiJapanCareerHr from './Pages/KawaiiJapanCareerHr/KawaiiJapanCareerHr';
import Career from './Pages/Career/Career';
import Masterclass from './Pages/Masterclass/Masterclass';
import { LocaleProvider } from './i18n/LocaleContext';
import { isValidLocale } from './i18n/config';
import GeoLanguageBanner from './Components/GeoLanguageBanner/GeoLanguageBanner';
import LocaleRedirect from './Components/LocaleRedirect/LocaleRedirect';
import GeoAutoSync from './Components/GeoAutoSync/GeoAutoSync';

const AppRoutes = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="home" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="services" element={<Services />} />
    <Route path="concerns" element={<Concerns />} />
    <Route path="contact" element={<Contact />} />
    <Route path="corporateprofile" element={<CorporateProfile />} />
    <Route path="privacypolicy" element={<PrivacyPolicy />} />
    <Route path="kawaii-global-ventures" element={<KawaiiGlobalVentures />} />
    <Route path="kawaii-japan-career-hr" element={<KawaiiJapanCareerHr />} />
    <Route path="career" element={<Career />} />
    <Route path="masterclass" element={<Masterclass />} />
    <Route path="*" element={<NoPages />} />
  </Routes>
);

const LocalizedShell = () => {
  const { locale } = useParams();
  const isLoading = useRouteLoading();

  if (!isValidLocale(locale)) {
    return <LocaleRedirect />;
  }

  return (
    <LocaleProvider>
      <GeoAutoSync />
      <GeoLanguageBanner />
      <Navbar />
      <ScrollOnLoad />
      <ScrollToTop />
      {isLoading && <LoadingSpinner />}
      <div className="scaled-content main-wrapper">
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </LocaleProvider>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/:locale/*" element={<LocalizedShell />} />
      <Route path="*" element={<LocaleRedirect />} />
    </Routes>
  );
}

export default App;
