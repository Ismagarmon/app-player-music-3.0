import React from 'react'
import { createComponent } from '@lit-labs/react'
import { PlayerComponent as AppPlayerViewWC} from './appplayer'
import logo from '../../../img/Logo.png'

const AppPlayerViewWebComponent = createComponent( // Esto es el nombre de la etiqueta del componente

    {
      react: React,
      elementClass: AppPlayerViewWC,
      tagName: 'player-component'
    }
)

function AppPlayerReact({isMain, isExpanded, isLeft }) {


  return (
    <AppPlayerViewWebComponent isMain={isMain} isExpanded={isExpanded} isLeft={isLeft} srcImg={logo}/>
  )
}

export default AppPlayerReact