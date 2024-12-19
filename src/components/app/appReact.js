import React, { useState, useEffect } from 'react'
import AppPlayerReact from './appplayer/appplayerReact'
import './appStyle.css'
import { Link, Outlet,useNavigate } from 'react-router-dom'
import { CreatePlaylists, GetPlaylists, UpdatePlaylist, DeletePlaylist } from '../../api/callapi'

function AppReact({isApp}) {

    const [rout, setRout] = useState(localStorage.getItem('appzone') || 'Home')
    const [isMain, setIsMain] = useState(true)
    const [isExpanded, setIsExpanded] = useState(true)
    const [isEnter, setIsEnter] = useState(false)
    const [isLeft, setIsLeft] = useState(false)
    const [playlistName, setPlaylistName] = useState([])
    const [arrayFull, setArrayFull] = useState(false)
    const [idplaylist, setIdPlaylist] = useState('')
    const isLogged = localStorage.getItem('isLogged')
    const navigate = useNavigate()
    const currentPath = window.location.pathname
  useEffect(() => {
    
    if ( (isLogged === 'false' || isLogged === null) && currentPath.includes('app')) {
      navigate('/home/')
    } else {
      obtenerPlaylists()
    }
  }, [isLogged, navigate,currentPath])
    
      const obtenerPlaylists = async () => {
        let array = await GetPlaylists(localStorage.getItem("userId"))
        setPlaylistName(array)
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
          const respuesta = await CreatePlaylists(name,localStorage.getItem("userId"))
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
      }

      const openPlaylists = () => {
        document.getElementById('pc').classList.remove('none')
      }

      const cancelEditPlaylists = () => {
        document.getElementById('editpc').classList.add('none')
        document.getElementById('editplaylistname').value = ''

      }

      const valorActualInput = (name,id) => {
        setIdPlaylist(id)
        document.getElementById('editpc').classList.remove('none')
        document.getElementById('editplaylistname').value = name
      }

      const editplaylist = async () => {
        const namechange = document.getElementById('editplaylistname').value
        const respuesta = await UpdatePlaylist(namechange,idplaylist)
        if (respuesta.Message) {
          alert('The playlist has been correctly updated')
          cancelPlaylists()
          obtenerPlaylists()
          document.getElementById('editpc').classList.add('none')
          setIdPlaylist('')
        } else {
          document.getElementById('editpc').classList.add('none')
          setIdPlaylist('')
        }
      }

      const deleteplaylist = async (id) => {
        const respuesta = await DeletePlaylist(id)
        if (respuesta.Message) {
          alert('The playlist has been correctly deleted')
          obtenerPlaylists()
        }
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

    if ((isLogged === 'false' || isLogged === null) && currentPath.includes('app')) {
      return null
    }

  return (
    <>
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
    <div className="playlistname none" id="editpc">

        <p>Name of the playlist</p>

        <input type="text" id="editplaylistname"/>

        <div className="flex flex-at flex-jc">
            <button className="flex flex-at flex-jc" id="create" onClick={() => editplaylist() }>
                <p>Edit</p>
                <svg width="18" height="18" viewBox="0 0 14 14">
                    <path fill="white" fillRule="evenodd" d="M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0M7 3.25a.75.75 0 0 1 .75.75v2.25H10a.75.75 0 0 1 0 1.5H7.75V10a.75.75 0 0 1-1.5 0V7.75H4a.75.75 0 0 1 0-1.5h2.25V4A.75.75 0 0 1 7 3.25" clipRule="evenodd"/>
                </svg>
            </button>
            <button className="flex flex-at flex-jc" id="cancel" onClick={() => cancelEditPlaylists() }>
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
                  <li style={{height: '4rem'}}>Implemented in a future</li>
                </ul>
                
            </div>
            <div className="playlist">
                <div className="flex flex-at">
                    <p className="p-title">Playlists</p>
                    <svg width="33" height="24" fill="none"  id="newplaylist" onClick={() => openPlaylists()}> 
                        <path d="M17.111 5.053H33v2.526H17.111V5.053ZM11 13.263h22v2.527H11v-2.527Zm0 8.21h22V24H11v-2.526Zm1.222-16.42H7.333V0H4.89v5.053H0v2.526h4.889v5.053h2.444V7.579h4.89V5.053Z" fill="#fff"/>
                    </svg>
                </div>
                <div className='flex namelist'>
                {playlistName.map( (name, index) => ( <div className='flex flex-at pn' key={index}> <p id="pn" key={index}> {name.name} </p>  <svg onClick={() => valorActualInput(name.name,name.id_playlist)} id="editPlaylist" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M1.999 22h3.623a3 3 0 0 0 2.12-.878l14.79-14.789l-4.866-4.865L2.878 16.256a3 3 0 0 0-.879 2.122zm2-2v-1.622a1 1 0 0 1 .293-.707l2.158-2.158l2.037 2.036l-2.158 2.158a1 1 0 0 1-.707.293zm5.902-3.865l-2.037-2.037l9.802-9.801l2.037 2.036z"/></svg>  <svg onClick={() => deleteplaylist(name.id_playlist)} id="deletePlaylist"  width="20" height="20" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="m10.25 5.75l-4.5 4.5m0-4.5l4.5 4.5"/><circle cx="8" cy="8" r="6.25"/></g></svg> </div>  ) )}
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