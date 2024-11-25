import React, { useState } from 'react';
import FooterReact from './footer/footerReact';
import './homeStyle.css';
import { Link, Outlet } from 'react-router-dom';
import icon from '../../img/ASD_F.png' 
import useStore from '../../container/StoreZustand'


function HomeReact({isDesktop, isIpad, isPhone, isHome}) {

  const [isOpened, setIsOpened] = useState(false)

  const openmenu= (opened) => {
    setIsOpened(!opened)
  }

  const setRoutState = useStore((state) => state.setZoneHome)
  const routState = useStore((state) => state.zone)

  const changerout = (rout) => {
    setRoutState(rout)
  }


  return (
    <>
      {!isDesktop ? (
        <div className={isOpened ? 'responsive' : 'c-responsive'}>
          <ul>
            <Link to={'/home/'} className="flex flex-at flex-jccc" onClick={() => changerout('home')}>
              <p>Home</p>
            </Link>
            <Link to={'/home/aboutus'} className="flex flex-at flex-jccc" onClick={() => changerout('about')}>
              <p>About Us</p>
            </Link>
            <li className="flex flex-at flex-jccc">
              <button className="btn flex flex-at flex-jccc">
                <Link to={'/home/signin'} id="signin" onClick={() => changerout('signin')}>
                  SignIn
                </Link>
              </button>
            </li>
            <li className="flex flex-at flex-jccc">
              <button className="btn flex flex-at flex-jccc">
                <Link to={'/home/signinup'} id="signup" onClick={() => changerout('signup')}>
                  SignUp
                </Link>
              </button>
            </li>
          </ul>
        </div>
      ) : null}

      <nav className={`flex flex-at flex-jc ${isPhone ? '' : 'g'} ${routState.includes('home') ? '' : 'nav-c'}`}>
        {isDesktop ? (
          <div className="ctn1 flex flex-jcsb m-w">
            <Link 
              to={'/home/'}
              id="home"
              onClick={() => changerout('home')}
              className={`${routState.includes('home') ? 'fw' : ''} ${routState.includes('home') ? '' : 'a-c'}`}
            >
              Home
            </Link>
            <Link
              to={'/home/aboutus'}
              id="about"
              onClick={() => changerout('about')}
              className={`${routState.includes('about') ? 'fw' : ''} ${routState.includes('home') ? '' : 'a-c'}`}
            >
              About Us
            </Link>
          </div>
        ) : (
          <div className="hamb" onClick={() => openmenu(isOpened) }>
            <div className={`sec c-sec ${isOpened ? 'rotate b-w' : ''}`}></div>
            <div className={`sec c-sec ${isOpened ? 'none' : ''}`}></div>
            <div className={`sec ${isOpened ? 'rotate-inverse b-w' : ''}`}></div>
          </div>
        )}

        <div className="ctn2 flex flex-at flex-jc gap-l m-w">
          <img alt="appicon" src={icon} id="appicon" />
          <p className={`prueba ${routState.includes('home') ? 'ob' : ''}`}>BEAT WAVES</p>
        </div>

        {isDesktop && (
          <div className="ctn3 flex flex-at flex-jc m-w">
            {(routState.includes('home') || routState.includes('about') || routState.includes('signup')) && (
              <button className="btn flex flex-at">
                <Link to={'/home/signin'} id="signin" onClick={() => changerout('signin')}>
                  SignIn
                </Link>
              </button>
            )}
            {(routState.includes('home') || routState.includes('about') || routState.includes('signin')) && (
              <button className="btn flex flex-at">
                <Link to={'/home/signup'} id="signup" onClick={() => changerout('signup')}>
                  SignUp
                </Link>
              </button>
            )}
          </div>
        )}
      </nav>
    <div className="spacer"></div>
    <main style={isHome ? {height: 'calc(100vh - 7rem - 0.2rem - 8.438rem)', width: '100%', backgroundColor: 'var(--secondary)' } : {} }>
      <Outlet/>
    </main>
    <FooterReact isDesktop={isDesktop}/>
    </>
  )
}

export default HomeReact