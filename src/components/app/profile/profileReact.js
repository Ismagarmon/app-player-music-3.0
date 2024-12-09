import React from 'react'
import { createComponent } from '@lit-labs/react'
import { ProfileView as ProfileViewWC} from './profile'
import { useNavigate } from 'react-router-dom'

const ProfileViewWCWebComponent = createComponent( // Esto es el nombre de la etiqueta del componente

    {
      react: React,
      elementClass: ProfileViewWC,
      tagName: 'profile-view',
      events: { onLogOut: 'logout' }
    }
  )

function ProfileReact() {

  const navigate = useNavigate()

  const handleLogOut = () => {
    navigate('/home/')
  }

  return (
    <ProfileViewWCWebComponent onLogOut={handleLogOut}/>
  )
}

export default ProfileReact