import React from 'react'
import { createComponent } from '@lit-labs/react'
import { SignUpView as SignUpViewWC} from './signup'
import { useNavigate } from 'react-router-dom'
import useStore from '../../../container/StoreZustand'

const SignUpViewWebComponent = createComponent( // Esto es el nombre de la etiqueta del componente

    {
      react: React,
      elementClass: SignUpViewWC,
      tagName: 'signup-view',
      events: { onRegister: 'togglesignin' }
    }
  )

function SignUpReact({isDesktop, isIpad, isPhone}) {

  const navigate = useNavigate()

  const setRoutState = useStore((state) => state.setZoneHome)

  const handleIsRegistered = () => {

    setRoutState('signin')
    navigate('/home/signin')

  }

  return (
    <SignUpViewWebComponent isIpad={isIpad} isPhone={isPhone} isDesktop={isDesktop} onRegister={handleIsRegistered}/>
  );
}

export default SignUpReact