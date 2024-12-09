import React, { useEffect }  from 'react'
import { createComponent } from '@lit-labs/react'
import { HomeView as HomeViewWC} from './homeapp'
import { useNavigate } from 'react-router-dom'
import logo from '../../../img/Logo.png'

const AppHomeViewWebComponent = createComponent( // Esto es el nombre de la etiqueta del componente

    {
      react: React,
      elementClass: HomeViewWC,
      tagName: 'homeapp-view'
    }
  )

function AppHomeReact() {
  
  const navigate = useNavigate()
  const isLogged = localStorage.getItem('isLogged')

  useEffect(() => {
    if (isLogged === 'false' || isLogged === null) {
      navigate('/home/')
    }
  }, [isLogged, navigate])

  if (isLogged === 'false' || isLogged === null) {
    return null
  }

  return <AppHomeViewWebComponent srcImg={logo}/>;
}

export default AppHomeReact