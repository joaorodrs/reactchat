import React from 'react'

import firebase from 'firebase/app'
import 'firebase/auth'

import {
  Container,
  ButtonsContainer,
  GoogleButton,
  GoogleIcon,
  FacebookButton,
  FacebookIcon
} from './styles'

const auth = firebase.auth()

const SignIn: React.FC = () => {
  function handleSignInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()

    auth.signInWithPopup(provider)
  }
  
  function handleSignInWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider()

    auth.signInWithPopup(provider)
  }

  return (
    <Container>
      <h1>Reactchat</h1>
      <ButtonsContainer>
        <GoogleButton onClick={handleSignInWithGoogle}>
          <p>Entrar com</p>
          <GoogleIcon />
        </GoogleButton>
        <FacebookButton onClick={handleSignInWithFacebook}>
          <p>Entrar com</p>
          <FacebookIcon />
        </FacebookButton>
      </ButtonsContainer>
    </Container>
  )
}

export default SignIn
