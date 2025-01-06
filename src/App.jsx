import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'; 
import Section from './Components/Section/section';
import Loading from './Components/Loading/loading';
import Home from './Pages/home';
import RegisterPage from './Pages/registerPage';
import LoginPage from './Pages/loginPage';
import HelpPage from './Pages/helpPage';
import { LanguageProvider } from './Context/language';
import BasketPage from './Pages/basketPage';
import { DarkModeProvider } from './Context/darkmode';
import SubscribersPage from './Pages/subscribersPage';
import PhoneServicePage from './Pages/phoneSevicePage';
import TelephonyPage from './Pages/telephonyPage';
import VacanciesPage from './Pages/vacanciesPage';
import VacanciesItemPage from './Pages/vacanciesItemPage';
import HappyWeekendPage from './Pages/happyWeekend';

function App() {
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000)

    return () => clearTimeout(timer)
  }, [location])

  return (
    <>
      <LanguageProvider>
        <DarkModeProvider>
          {loading ? 
              <Loading />  
            : 
              <Routes>

                <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
                <Route path='/login' element={<LoginPage login={isLoggedIn} setLogin={setIsLoggedIn} />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path="/section" element={isLoggedIn ? <Section /> : <Navigate to="/login" />} />
                <Route path="/help" element={isLoggedIn ? <HelpPage /> : <Navigate to="/login" />} />
                <Route path="/basket" element={isLoggedIn ? <BasketPage /> : <Navigate to="/login" />} />
                <Route path="/subscribers" element={isLoggedIn ? <SubscribersPage /> : <Navigate to="/login" />} />
                <Route path="/phoneService" element={isLoggedIn ? <PhoneServicePage /> : <Navigate to="/login" />} />
                <Route path="/telephony" element={isLoggedIn ? <TelephonyPage /> : <Navigate to="/login" />} />
                <Route path="/vacancies" element={isLoggedIn ? <VacanciesPage /> : <Navigate to="/login" />} />
                <Route path="/vacancies/:category" element={isLoggedIn ? <VacanciesItemPage /> : <Navigate to="/login" /> } />
                <Route path="/happyWeekend" element={isLoggedIn ? <HappyWeekendPage /> : <Navigate to="/login" /> } />
              </Routes> 
            }
          </DarkModeProvider>
      </LanguageProvider>
    </>
  );
}

export default App;
