import React from 'react'

import firebase from 'firebase/app'

import {
  Container,
  ButtonsContainer,
  GoogleButton,
  GoogleIcon,
  FacebookButton,
  FacebookIcon
} from './styles'

interface Props {
  auth: firebase.auth.Auth,
  firestore: firebase.firestore.Firestore
}

const SignIn: React.FC<Props> = ({ firestore, auth }) => {
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
