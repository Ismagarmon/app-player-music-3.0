import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import HomeReact from './components/home/homeReact'
import AboutReact from './components/home/about/aboutReact'
import SignInReact from './components/home/signin/signinReact'
import HomePrincipalReact from './components/home/homePrincipal/HomePrincipalReact'
import SignUpReact from './components/home/signup/signupReact'
import AppReact from './components/app/appReact'
import AppHomeReact from './components/app/apphome/apphomeReact'
import RateSongReact from './components/app/ratesongs/rateSongsReact'
import ArtistReact from './components/app/artist/artistReact'
import ProfileReact from './components/app/profile/profileReact'
import FavouriteReact from './components/app/favourite/favouriteReact'
import RecentReact from './components/app/recents/recentsReact'


const Sizes = {
  Desktop: 844,
  Ipad: 430
}

function App() {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isIpad, setIsIpad] = useState(false)
  const [isPhone, setIsPhone] = useState(false)

  const [isHome, setIsHome] = useState(true)

  const location = useLocation()
  const navigate = useNavigate()

  const getSizes = () => {
    if (document.body.clientWidth >= Sizes.Desktop) {
      setIsDesktop(true)
      setIsIpad(false)
      setIsPhone(false)
    } else if (document.body.clientWidth >= Sizes.Ipad) {
      setIsDesktop(false)
      setIsIpad(true)
      setIsPhone(false)
    } else {
      setIsDesktop(false)
      setIsIpad(false)
      setIsPhone(true)
    }
  };

  useEffect(() => {
    getSizes()
    window.addEventListener('resize', getSizes)
    return () => window.removeEventListener('resize', getSizes)
  }, [])

  useEffect(() => {
    const isLogged = JSON.parse(localStorage.getItem('isLogged')) || false;
    if (location.pathname.startsWith('/app')) {



    }

    if (location.pathname.startsWith('/app')) {
      setIsHome(false)
    } else {
      setIsHome(true)
    }

    if (!isLogged && location.pathname.startsWith('/app')) {
      navigate('/home/')
    }

    
  }, [location.pathname,navigate])
  

  return (
    <Routes>
      <Route path='/home' element={<HomeReact isDesktop={isDesktop} isIpad={isIpad} isPhone={isPhone} isHome={isHome}/>}>
        <Route path='/home/' element={<HomePrincipalReact isDesktop={isDesktop} isIpad={isIpad} isPhone={isPhone} />} />
        <Route path='/home/aboutus' element={<AboutReact isDesktop={isDesktop} isIpad={isIpad} isPhone={isPhone} />} />
        <Route path='/home/signin' element={<SignInReact isDesktop={isDesktop} isIpad={isIpad} isPhone={isPhone} />} />
        <Route path='/home/signup' element={<SignUpReact isDesktop={isDesktop} isIpad={isIpad} isPhone={isPhone} />} />
      </Route>

      <Route path='/app' element={<AppReact isApp={isHome}/>}> 
        <Route path='/app/' element={<AppHomeReact />} />

        <Route path='/app/albums' element={<ArtistReact />} />
        <Route path='/app/artists' element={<ArtistReact />} />
        <Route path='/app/profile' element={<ProfileReact />} />
        <Route path='/app/favoritos' element={ <FavouriteReact/> } />
        <Route path='/app/recents' element={<RecentReact />} />
        <Route path='/app/ratesongs' element={<RateSongReact/>} />

      </Route>
      <Route path='*' element={<Navigate to='/home' />} />
    </Routes>
  );
}

export default function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}