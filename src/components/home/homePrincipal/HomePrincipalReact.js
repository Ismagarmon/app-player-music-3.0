import React from 'react'
import { createComponent } from '@lit-labs/react'
import { HomeComponentView as HomeComponentViewWC} from './home'
import imagen from '../../../img/Logo.png'

const HomeViewWebComponent = createComponent( // Esto es el nombre de la etiqueta del componente

    {
      react: React,
      elementClass: HomeComponentViewWC,
      tagName: 'homecomponent-view'
    }
  )

function HomePrincipalReact({isDesktop, isIpad, isPhone}) {


  return (
    <HomeViewWebComponent isIpad={isIpad} isPhone={isPhone} isDesktop={isDesktop} srcImagen={imagen}/>
  );
}

export default HomePrincipalReact