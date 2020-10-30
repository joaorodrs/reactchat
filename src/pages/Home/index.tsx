import React, { useState } from 'react'

import Chat from '../../components/Chat'

import {
  Container,
  AvatarImage,
  ChatContainer,
  ChatAvatar,
  ChatName,
  ChatLastMessage,
  BackIcon
} from './styles'

interface Conversations {
  name: string,
  userId: string,
  photoUrl: string,
  lastMessage: string
}

const windowWidth = window.innerWidth
console.log(windowWidth)

const Home: React.FC = () => {
  const conversations: Conversations[] = [
    {
      name: 'João Paulo',
      userId: 'joaopaulo-ld',
      photoUrl: 'https://github.com/joaopaulo-ld.png',
      lastMessage: 'Tô chegando aí hein!'
    },
    {
      name: 'Marcio Camello',
      userId: 'marciocamello',
      photoUrl: 'https://github.com/marciocamello.png',
      lastMessage: 'Ok certo!'
    },
    {
      name: 'Diego Fernandes',
      userId: 'diego3g',
      photoUrl: 'https://github.com/diego3g.png',
      lastMessage: 'Faaala Dev'
    },
    {
      name: 'Guilherme Rodz',
      userId: 'guilhermerodz',
      photoUrl: 'https://github.com/guilhermerodz.png',
      lastMessage: 'Tá blz'
    },
    {
      name: 'Allan Melo',
      userId: 'allanmelo',
      photoUrl: 'https://github.com/allanmelo.png',
      lastMessage: 'Oi?'
    },
    {
      name: 'Julia Finassi',
      userId: 'julia-finassi',
      photoUrl: 'https://github.com/julia-finassi.png',
      lastMessage: 'Lorem ipsulum dolor sia amet sonimblades crelvis bla bla'
    },
  ]

  const [showSelectedChat, setShowSelectedChat] = useState(false)

  return (
    <Container>
      <header>
        {windowWidth < 800 ? (
          <>
            {!showSelectedChat ? (
              <h1><i>ReactChat</i></h1>
            ) : <BackIcon onClick={() => setShowSelectedChat(false)} />}
          </>
        ) : (
          <h1><i>ReactChat</i></h1>
        )}
        
        <AvatarImage src="https://github.com/joaopaulo-ld.png" />
      </header>

      <main>
        {windowWidth < 800 ? (
          <>
            {!showSelectedChat && (
              <div className="chats-wrapper">
                {conversations.map(conversation => (
                  <ChatContainer onClick={() => setShowSelectedChat(true)}>
                    <ChatAvatar src={conversation.photoUrl} />
                    <div className="chat-informations-wrapper">
                      <ChatName>{conversation.name}</ChatName>
                      <ChatLastMessage>{conversation.lastMessage}</ChatLastMessage>
                    </div>
                  </ChatContainer>
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            <div className="chats-wrapper">
              {conversations.map(conversation => (
                <ChatContainer onClick={() => setShowSelectedChat(true)}>
                  <ChatAvatar src={conversation.photoUrl} />
                  <div className="chat-informations-wrapper">
                    <ChatName>{conversation.name}</ChatName>
                    <ChatLastMessage>{conversation.lastMessage}</ChatLastMessage>
                  </div>
                </ChatContainer>
              ))}
            </div>
          </>
        )}
        
        {showSelectedChat && (
          <div className="selected-chat-wrapper">
            <Chat name="João Paulo" userId="joaopaulo-ld" photoUrl="https://github.com/joaopaulo-ld.png" />
          </div>
        )}
      </main>
    </Container>
  )
}

export default Home
