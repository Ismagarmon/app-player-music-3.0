import React from 'react'
import { createComponent } from '@lit-labs/react'
import { FavouriteView as FavouriteViewWC} from './favourite'


const FavouriteViewWCWebComponent = createComponent( // Esto es el nombre de la etiqueta del componente

    {
      react: React,
      elementClass: FavouriteViewWC,
      tagName: 'favourite-view'
    }
  )

function FavouriteReact() {


  return (
    <FavouriteViewWCWebComponent />
  )
}

export default FavouriteReact