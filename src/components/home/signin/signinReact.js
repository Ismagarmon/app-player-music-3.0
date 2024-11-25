import React from 'react'
import { createComponent } from '@lit-labs/react'
import { SignInView as SignInViewWC} from './signin'


const SignInViewWebComponent = createComponent( // Esto es el nombre de la etiqueta del componente

    {
      react: React,
      elementClass: SignInViewWC,
      tagName: 'signin-view'
    }
  )

function SignInReact({isDesktop, isIpad, isPhone}) {


  return (
    <SignInViewWebComponent isIpad={isIpad} isPhone={isPhone} isDesktop={isDesktop} />
  );
}

export default SignInReact