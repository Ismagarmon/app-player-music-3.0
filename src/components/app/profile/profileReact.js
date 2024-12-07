import React from 'react'
import { createComponent } from '@lit-labs/react'
import { ProfileView as ProfileViewWC} from './profile'


const ProfileViewWCWebComponent = createComponent( // Esto es el nombre de la etiqueta del componente

    {
      react: React,
      elementClass: ProfileViewWC,
      tagName: 'profile-view'
    }
  )

function ProfileReact() {


  return (
    <ProfileViewWCWebComponent />
  )
}

export default ProfileReact