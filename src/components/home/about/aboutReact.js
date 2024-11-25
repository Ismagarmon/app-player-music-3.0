import React from 'react'
import { createComponent } from '@lit-labs/react'
import { AboutView as AboutViewWC} from './about'
import personal from '../../../img/Personal.jpg'
import p from '../../../img/P.png'


const AboutViewWebComponent = createComponent( // Esto es el nombre de la etiqueta del componente

  {
    react: React,
    elementClass: AboutViewWC,
    tagName: 'about-view'
  }
)

function AboutReact({isDesktop, isIpad, isPhone}) {


  return (
    <AboutViewWebComponent isIpad={isIpad} isPhone={isPhone} isDesktop={isDesktop} srcImg1={personal} srcImg2={p}/>
  );
}

export default AboutReact