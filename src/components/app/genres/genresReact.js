import React from 'react'
import { createComponent } from '@lit-labs/react'
import { GenresView as GenresViewWC} from './genres'


const GenresViewWCWebComponent = createComponent( // Esto es el nombre de la etiqueta del componente

    {
      react: React,
      elementClass: GenresViewWC,
      tagName: 'genres-view'
    }
  )

function GenresReact() {


  return (
    <GenresViewWCWebComponent />
  )
}

export default GenresReact