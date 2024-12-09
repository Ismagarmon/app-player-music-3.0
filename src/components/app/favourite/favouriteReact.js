import React from 'react'
import { createComponent } from '@lit-labs/react'
import { FavouriteView as FavouriteViewWC} from './favourite'
import logo from '../../../img/Heart.jpg'

const FavouriteViewWCWebComponent = createComponent( // Esto es el nombre de la etiqueta del componente

    {
      react: React,
      elementClass: FavouriteViewWC,
      tagName: 'favourite-view'
    }
  )

function FavouriteReact() {


  return (
    <FavouriteViewWCWebComponent srcImg={logo} />
  )
}

export default FavouriteReact