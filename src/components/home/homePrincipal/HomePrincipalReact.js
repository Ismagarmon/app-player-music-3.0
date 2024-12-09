import React from 'react'
import { createComponent } from '@lit-labs/react'
import { HomeComponentView as HomeComponentViewWC} from './home'
import imagen from '../../../img/Logo.png'
import { useNavigate } from 'react-router-dom'
import useStore from '../../../container/StoreZustand'

const HomeViewWebComponent = createComponent( // Esto es el nombre de la etiqueta del componente

    {
      react: React,
      elementClass: HomeComponentViewWC,
      tagName: 'homecomponent-view',
      events: { onLoggedMain: 'isLoggedMain' }
    }
  )

function HomePrincipalReact({isDesktop, isIpad, isPhone}) {

  const navigate = useNavigate()

  const setRoutState = useStore((state) => state.setZoneHome)

  const handleIsLoggedMain = (event) => {
    const { isLogged } = event.detail

    if (isLogged === 'true') {
      setRoutState('home')
      navigate('/app/')
    } else {
      setRoutState('signin')
      navigate('/home/signin')
    }
  }

  return (
    <HomeViewWebComponent isIpad={isIpad} isPhone={isPhone} isDesktop={isDesktop} srcImagen={imagen} onLoggedMain={handleIsLoggedMain}/>
  );
}

export default HomePrincipalReact