import React from 'react'
import { createComponent } from '@lit-labs/react'
import { HomeView as HomeViewWC} from './homeapp'


const AppHomeViewWebComponent = createComponent( // Esto es el nombre de la etiqueta del componente

    {
      react: React,
      elementClass: HomeViewWC,
      tagName: 'homeapp-view'
    }
  )

function AppHomeReact() {


  return (
    <AppHomeViewWebComponent />
  )
}

export default AppHomeReact