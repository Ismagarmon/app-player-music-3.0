import React, { useState, useEffect } from 'react'
import AppPlayerReact from './appplayer/appplayerReact'
import './appStyle.css'
import { Link, Outlet } from 'react-router-dom'
import { CreatePlaylists } from '../../api/callapi'

function AppReact({isApp}) {

    const [rout, setRout] = useState(localStorage.getItem('appzone') || 'Home')
    const [isMain, setIsMain] = useState(true)
    const [isExpanded, setIsExpanded] = useState(true)
    const [isEnter, setIsEnter] = useState(false)
    const [isLeft, setIsLeft] = useState(false)
    const [playlistName, setPlaylistName] = useState([])
    const [arrayFull, setArrayFull] = useState(false)

    useEffect(() => {
        obtenerPlaylists()
      }, [])
    
      const obtenerPlaylists = async () => {
        
        setArrayFull(true)
      }
    
      const changeRoute = (route) => {
        setRout(route)
        localStorage.setItem('appzone', route)
        if (route === 'Home') {
          setIsMain(true)
          setIsExpanded(true)
        } else {
          setIsMain(false)
        }
      }
    
      const regexName = (name) => /^[A-Za-z0-9\s]+$/.test(name)
    
      const createPlaylist = async () => {
        const name = document.getElementById('playlistname').value
        if (regexName(name)) {
          const respuesta = await CreatePlaylists(name)
          if (respuesta.Message) {
            alert('The playlist has been correctly created')
            cancelPlaylists()
            obtenerPlaylists()
          }
        } else {
          alert('The name can only contain words and spaces')
        }
      }
    
      const cancelPlaylists = () => {
        document.getElementById('pc').classList.add('none')
        document.getElementById('changebg').classList.add('none')
      }

      

      useEffect(() => {

        const handleToggleEvent = () => {
            setIsEnter(false)
            setIsExpanded(!isExpanded)
        }
        
        const handleProfile = () => {
            setIsMain(false)
        }

        window.addEventListener('toggleplayer', handleToggleEvent)
        window.addEventListener('toggleprofile', handleProfile)
        window.addEventListener('togglemain', handleProfile)
    
        return () => {
          window.removeEventListener('toggleplayer', handleToggleEvent)
          window.removeEventListener('toggleprofile', handleProfile)
          window.removeEventListener('togglemain', handleProfile)
        }
      }, )

      const hideshow = (event) => {
        if (event.type === 'mouseenter' && !isExpanded) {
            setIsEnter(true)
        }

        if (event.type === 'mouseout' && !isExpanded) {
            setIsEnter(false)
        }
    }

  return (
    <>
    <div className="changebg none" id="changebg">

    </div>
    <div className="playlistname none" id="pc">

        <p>Name of the playlist</p>

        <input type="text" id="playlistname"/>

        <div className="flex flex-at flex-jc">
            <button className="flex flex-at flex-jc" id="create" onClick={() => createPlaylist() }>
                <p>Create</p>
                <svg width="18" height="18" viewBox="0 0 14 14">
                    <path fill="white" fillRule="evenodd" d="M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0M7 3.25a.75.75 0 0 1 .75.75v2.25H10a.75.75 0 0 1 0 1.5H7.75V10a.75.75 0 0 1-1.5 0V7.75H4a.75.75 0 0 1 0-1.5h2.25V4A.75.75 0 0 1 7 3.25" clipRule="evenodd"/>
                </svg>
            </button>
            <button className="flex flex-at flex-jc" id="cancel" onClick={() => cancelPlaylists() }>
                <p>Cancel</p>
                <svg width="20" height="20" viewBox="0 0 14 14">
                    <g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9.12 4.88L4.88 9.12m0-4.24l4.24 4.24"/>
                        <circle cx="7" cy="7" r="6.5"/>
                    </g>
                </svg>
            </button>
        </div>
        
    </div>
      <main className="grid" style={isApp ? {} : {minHeight: '100svh', minWidth: '100svh', backgroundColor: 'var(--primary)', padding: '0.5rem' } }>
        <div className="menu">
            <div className="primero">
                <p className="title">Menu</p>

                <ul>
                    <li className="flex flex-at" onClick={() => changeRoute('Home')}>
                        <svg width="24" height="24" fill="white">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.726 3.29A9.008 9.008 0 0 0 3.055 11H7.05a16.3 16.3 0 0 1 2.676-7.71Zm4.548 0A16.3 16.3 0 0 1 16.95 11h3.995a9.008 9.008 0 0 0-6.67-7.71Zm.668 7.71A14.3 14.3 0 0 0 12 3.55 14.3 14.3 0 0 0 9.058 11h5.884Zm-5.884 2h5.884A14.3 14.3 0 0 1 12 20.45 14.3 14.3 0 0 1 9.058 13ZM7.05 13H3.055a9.008 9.008 0 0 0 6.67 7.71A16.3 16.3 0 0 1 7.05 13Zm7.224 7.71A16.3 16.3 0 0 0 16.95 13h3.995a9.008 9.008 0 0 1-6.67 7.71ZM12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Z" fill="#fff"/>
                        </svg>
                        <Link to={'/app/'} onClick={() => setIsMain(true)}>Explore</Link>
                    </li>
                    <li className="flex flex-at" onClick={() => changeRoute('Genres')}>
                        <svg width="24" height="24" fill="white">
                            <path fillRule="evenodd" clipRule="evenodd" d="M21.646 2.237A1 1 0 0 1 22 3v13a4 4 0 1 1-2-3.465V4.18L10 5.847v12.156a4 4 0 1 1-2-3.468V5a1 1 0 0 1 .836-.986l12-2a1 1 0 0 1 .81.223ZM20 16a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM6 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" fill="#fff"/>
                        </svg>
                        <Link to={'/app/genres'}>Genres</Link>
                    </li>
                    <li className="flex flex-at" onClick={() => changeRoute('Artist')}>
                        <svg width="24" height="24" fill="white">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 0a9 9 0 0 1 9 9h-5a4 4 0 0 0-8 0H3a9 9 0 0 1 9-9Zm2 9a2 2 0 1 0-4 0h4Z" fill="#fff"/><path d="M1 11h22v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V11Z" fill="#fff"/>
                        </svg>
                        <Link to={'/app/albums'} id="album">Albums</Link>
                    </li>
                    <li className="flex flex-at" onClick={() => changeRoute('Artist')}>
                        <svg width="24" height="24" fill="none" id="artista">
                            <path d="M8 11A5 5 0 1 0 8 1a5 5 0 0 0 0 10ZM0 21a8 8 0 1 1 16 0 2 2 0 0 1-2 2H2a2 2 0 0 1-2-2Zm17-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="#fff"/><path d="M19 10V2l3 1" stroke="#fff" strokewidthdth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <Link to={'/app/artists'}>Artists</Link>
                    </li>
                    <li className="flex flex-at" onClick={() => changeRoute('profile')}>
                        <svg width="24" height="24" fill="white">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-5a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM8 14a5 5 0 0 0-5 5v2a1 1 0 1 0 2 0v-2a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2a1 1 0 1 0 2 0v-2a5 5 0 0 0-5-5H8Z" fill="white"/>
                        </svg>
                        <Link to={'/app/profile'}>Profile</Link>
                    </li>
                </ul>
            </div>
            <div className="secundario">
                <p className="title">Library</p>

                <ul>
                    <li className="flex flex-at" onClick={() => changeRoute('Favourite')}>
                        <svg width="24" height="24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M13.913 2.493a6.031 6.031 0 0 1 4.78 0 6.234 6.234 0 0 1 2.026 1.41c.58.603 1.04 1.32 1.354 2.109a6.733 6.733 0 0 1 0 4.976 6.526 6.526 0 0 1-1.354 2.11l-8.491 8.84a.934.934 0 0 1-1.359 0l-8.491-8.84A6.639 6.639 0 0 1 .548 8.5a6.64 6.64 0 0 1 1.83-4.597 6.123 6.123 0 0 1 4.416-1.904c1.656 0 3.244.685 4.416 1.904l.339.353.338-.353a6.235 6.235 0 0 1 2.026-1.41Zm2.39 1.505c-.567 0-1.13.117-1.654.343a4.316 4.316 0 0 0-1.403.976l-1.018 1.06a.934.934 0 0 1-1.359 0l-1.018-1.06A4.24 4.24 0 0 0 6.794 4a4.24 4.24 0 0 0-3.058 1.318A4.597 4.597 0 0 0 2.47 8.5a4.6 4.6 0 0 0 1.266 3.183l7.813 8.133 7.812-8.133a4.54 4.54 0 0 0 .938-1.46 4.662 4.662 0 0 0 0-3.445 4.517 4.517 0 0 0-.938-1.46 4.317 4.317 0 0 0-1.403-.977 4.175 4.175 0 0 0-1.655-.343Z" fill="#fff"/>
                        </svg>
                        <Link to={'/app/favoritos'}>Favourites</Link>
                    </li>
                    <li className="flex flex-at" onClick={() => changeRoute('rs')}>
                        <svg width="24" height="24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Zm9-11C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1Zm1 5a1 1 0 1 0-2 0v6a1 1 0 0 0 .553.894l4 2a1 1 0 1 0 .894-1.788L13 11.382V6Z" fill="#fff"/>
                        </svg>
                        <Link to={'/app/recents'}>Recents</Link>
                    </li>
                    <li className="flex flex-at" onClick={() => changeRoute('rate')}>
                        <svg width="24" height="24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M17.594 4.357c.224-.234.52-.357.82-.357.149 0 .297.03.437.091.14.06.27.15.382.266.112.117.202.257.265.414a1.353 1.353 0 0 1 0 .999 1.277 1.277 0 0 1-.265.413L6.587 19.358l-2.223.578.575-2.396L17.594 4.357ZM18.414 2c-.857 0-1.67.355-2.263.972L3.309 16.351a1 1 0 0 0-.251.459L2.03 21.09a1 1 0 0 0 1.224 1.201l4.11-1.07a1 1 0 0 0 .469-.275L20.676 7.568c.293-.305.524-.666.68-1.06a3.352 3.352 0 0 0 0-2.476 3.277 3.277 0 0 0-.68-1.06 3.177 3.177 0 0 0-1.032-.717A3.104 3.104 0 0 0 18.414 2Zm-6.165 17.824a1.5 1.5 0 0 0 0 3h9.247a1.5 1.5 0 1 0 0-3h-9.247Z" fill="#fff"/>
                        </svg>
                        <Link to={'/app/ratesongs'}>Rate Songs</Link>
                    </li>
                </ul>
            </div>
            <div className="playlist">
                <div className="flex flex-at">
                    <p className="p-title">Playlists</p>
                    <svg width="33" height="24" fill="none" id="newplaylist">
                        <path d="M17.111 5.053H33v2.526H17.111V5.053ZM11 13.263h22v2.527H11v-2.527Zm0 8.21h22V24H11v-2.526Zm1.222-16.42H7.333V0H4.89v5.053H0v2.526h4.889v5.053h2.444V7.579h4.89V5.053Z" fill="#fff"/>
                    </svg>
                </div>
            </div>
        </div>
        <div className="componente">
            <Outlet/>
        </div>
        <div
        className={`player ${isExpanded ? '' : 'new-position'} ${isLeft && !isMain ? 'leftposition' : 'rightposition'} ${isEnter ? 'npm' : ''}`}
        onMouseEnter={(event) => hideshow(event)} onMouseOut={(event) => hideshow(event)}>

            <AppPlayerReact isExpanded={isExpanded} isMain={isMain} isLeft={isLeft}/>
        </div>
    </main> 
    </>
  )
}

export default AppReact