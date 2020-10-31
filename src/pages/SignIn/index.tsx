import React from 'react'

import {
  Container,
  ButtonsContainer,
  GoogleButton,
  GoogleIcon,
  FacebookButton,
  FacebookIcon
} from './styles'

const SignIn: React.FC = () => {
  return (
    <Container>
      <h1>Reactchat</h1>
      <ButtonsContainer>
        <GoogleButton>
          <p>Entrar com</p>
          <GoogleIcon />
        </GoogleButton>
        <FacebookButton>
          <p>Entrar com</p>
          <FacebookIcon />
        </FacebookButton>
      </ButtonsContainer>
    </Container>
  )
}

export default SignIn
