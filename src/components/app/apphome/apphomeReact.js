import React  from 'react'
import { createComponent } from '@lit-labs/react'
import { HomeView as HomeViewWC} from './homeapp'
import { useNavigate } from 'react-router-dom'
import logo from '../../../img/Logo.png'

const AppHomeViewWebComponent = createComponent( // Esto es el nombre de la etiqueta del componente

    {
      react: React,
      elementClass: HomeViewWC,
      tagName: 'homeapp-view',
      events: { onProfile: 'toggleperfil' }
    }
  )

function AppHomeReact() {
  
  const navigate = useNavigate()

  const handleGoProfile = () => {
    navigate('/app/profile')
  }

  return <AppHomeViewWebComponent srcImg={logo} onProfile={handleGoProfile}/>
}

export default AppHomeReact