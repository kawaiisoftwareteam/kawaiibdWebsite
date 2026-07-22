import { Route, Routes } from 'react-router-dom';
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
import { useState } from 'react';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import CorporateProfile from './Pages/CorporateProfile/CorporateProfile';
import KawaiiGlobalVentures from './Pages/KawaiiGlobalVentures/KawaiiGlobalVentures';
import KawaiiJapanCareerHr from './Pages/KawaiiJapanCareerHr/KawaiiJapanCareerHr';
function App() {
  const [currentLang, setCurrentLang] = useState('English');
  const isLoading = useRouteLoading();

  return (
    <>
      <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang}/>
      <ScrollOnLoad/>
      <ScrollToTop/>
      {isLoading && <LoadingSpinner />}
      <div className="scaled-content main-wrapper">
        <main>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/concerns' element={<Concerns/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/corporateprofile' element={<CorporateProfile/>}/>
            <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
            <Route path='/kawaii-global-ventures' element={<KawaiiGlobalVentures/>}/>
            <Route path='/kawaii-japan-career-hr' element={<KawaiiJapanCareerHr/>}/>
            <Route path='*' element={<NoPages/>}/>
          </Routes>
        </main>
        <Footer currentLang={currentLang} setCurrentLang={setCurrentLang}/>
      </div>
    </>
  );
}

export default App;