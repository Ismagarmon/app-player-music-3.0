import React from 'react'
import { createComponent } from '@lit-labs/react'
import { RecentView as RecentViewWC} from './recent'


const RecentViewWCWebComponent = createComponent( // Esto es el nombre de la etiqueta del componente

    {
      react: React,
      elementClass: RecentViewWC,
      tagName: 'recent-view'
    }
  )

function RecentReact() {


  return (
    <RecentViewWCWebComponent />
  )
}

export default RecentReact