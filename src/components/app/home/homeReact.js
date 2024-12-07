import React from 'react'
import { createComponent } from '@lit-labs/react'
import { HomeView as HomeViewWC} from './home'


const HomeViewWCWebComponent = createComponent( // Esto es el nombre de la etiqueta del componente

    {
      react: React,
      elementClass: HomeViewWC,
      tagName: 'homeapp-view'
    }
  )

function HomeReact() {


  return (
    <HomeViewWCWebComponent />
  )
}

export default HomeReact