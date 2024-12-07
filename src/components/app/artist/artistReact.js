import React from 'react'
import { createComponent } from '@lit-labs/react'
import { ArtistView as ArtistViewWC} from './artist'


const ArtistViewWCWebComponent = createComponent( // Esto es el nombre de la etiqueta del componente

    {
      react: React,
      elementClass: ArtistViewWC,
      tagName: 'artist-view'
    }
  )

function ArtistReact() {


  return (
    <ArtistViewWCWebComponent />
  )
}

export default ArtistReact