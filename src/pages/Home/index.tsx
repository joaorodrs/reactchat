import React from 'react'

import {
  Container,
  AvatarImage,
  ChatContainer,
  ChatAvatar,
  ChatName,
  ChatLastMessage
} from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <header>
        <h1>Reactchat</h1>
        <AvatarImage src="https://github.com/joaopaulo-ld.png" />
      </header>

      {[1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(number => (
        <ChatContainer>
          <ChatAvatar src="https://github.com/joaopaulo-ld.png" />
          <div className="chat-informations-wrapper">
            <ChatName>João Paulo</ChatName>
            <ChatLastMessage>Tô chegando aí {';)'}</ChatLastMessage>
          </div>
        </ChatContainer>
      ))}
    </Container>
  )
}

export default Home
