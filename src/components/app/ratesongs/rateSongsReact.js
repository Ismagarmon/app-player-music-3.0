import React from 'react'
import { createComponent } from '@lit-labs/react'
import { RateSongView as RateSongViewWC} from './ratesongs'


const RateSongViewWCWebComponent = createComponent( // Esto es el nombre de la etiqueta del componente

    {
      react: React,
      elementClass: RateSongViewWC,
      tagName: 'ratesong-view'
    }
  )

function RateSongReact() {


  return (
    <RateSongViewWCWebComponent />
  )
}

export default RateSongReact