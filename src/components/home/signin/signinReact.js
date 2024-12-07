import React from 'react'
import { useNavigate } from 'react-router-dom'
import { createComponent } from '@lit-labs/react'
import { SignInView as SignInViewWC} from './signin'


const SignInViewWebComponent = createComponent( // Esto es el nombre de la etiqueta del componente

    {
      react: React,
      elementClass: SignInViewWC,
      tagName: 'signin-view',
      events: { onSignInSuccess: 'signin-success' }
    }
  )

function SignInReact({isDesktop, isIpad, isPhone}) {
  const navigate = useNavigate()

  const handleSignInSuccess = () => {
    navigate('/app/')
  }

  return (
    <SignInViewWebComponent isIpad={isIpad} isPhone={isPhone} isDesktop={isDesktop} onSignInSuccess={handleSignInSuccess}/>
  );
}

export default SignInReact