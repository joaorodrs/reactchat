import React from 'react'

import { Container } from './styles'

interface Props {
  name: string,
  userId: string,
  photoUrl: string,
}

const Chat: React.FC<Props> = ({ name, userId, photoUrl }) => {
  return (
    <Container>
      <h1>{name}</h1>
      <h1>{userId}</h1>
      <img src={photoUrl} alt={name} />
    </Container>
  )
}

export default Chat
