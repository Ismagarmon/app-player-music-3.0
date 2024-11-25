import React from 'react'
import { createComponent } from '@lit-labs/react'
import { SignUpView as SignUpViewWC} from './signup'


const SignUpViewWebComponent = createComponent( // Esto es el nombre de la etiqueta del componente

    {
      react: React,
      elementClass: SignUpViewWC,
      tagName: 'signup-view'
    }
  )

function SignUpReact({isDesktop, isIpad, isPhone}) {


  return (
    <SignUpViewWebComponent isIpad={isIpad} isPhone={isPhone} isDesktop={isDesktop} />
  );
}

export default SignUpReact