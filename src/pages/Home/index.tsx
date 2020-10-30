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
        <h1><i>ReactChat</i></h1>
        <AvatarImage src="https://github.com/joaopaulo-ld.png" />
      </header>

      <main>
        <div className="chats-wrapper">
          {[1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(() => (
            <ChatContainer>
              <ChatAvatar src="https://github.com/joaopaulo-ld.png" />
              <div className="chat-informations-wrapper">
                <ChatName>João Paulo</ChatName>
                <ChatLastMessage>Tô chegando aí {';)'}</ChatLastMessage>
              </div>
            </ChatContainer>
          ))}
        </div>
        <div className="selected-chat-wrapper">
          <h1>Something</h1>
        </div>
      </main>
    </Container>
  )
}

export default Home
