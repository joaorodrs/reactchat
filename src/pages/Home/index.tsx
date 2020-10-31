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

  const [selectedChatName, setSelectedChatName] = useState('cool')
  const [selectedChatUserId, setSelectedChatUserId] = useState('')
  const [selectedChatPhotoUrl, setSelectedChatPhotoUrl] = useState('')
  // const [selectedChatLastMessage, setSelectedChatLastMessage] = useState('')

  const handleOpenChat = ({ name, userId, photoUrl, lastMessage }: Conversations) => {
    setSelectedChatName(name)
    setSelectedChatUserId(userId)
    setSelectedChatPhotoUrl(photoUrl)
    // setSelectedChatLastMessage(lastMessage)

    setShowSelectedChat(true)
  }

  return (
    <Container>
      <header style={{ justifyContent: showSelectedChat ? windowWidth < 800 ? 'flex-start' : 'space-between' : 'space-between' }}>
        {windowWidth < 800 ? (
          <>
            {!showSelectedChat ? (
              <>
                <h1>ReactChat</h1>
                <AvatarImage src="https://github.com/joaopaulo-ld.png" />
              </>
            ) : (
              <>
                <BackIcon onClick={() => setShowSelectedChat(false)} />
                <AvatarImage src={selectedChatPhotoUrl} />
                <h1>{selectedChatName}</h1>
              </>
            )}
          </>
        ) : (
          <>
            <h1><i>ReactChat</i></h1>
            <AvatarImage src="https://github.com/joaopaulo-ld.png" />
          </>
        )}
      </header>

      <main>
        {windowWidth < 800 ? (
          <>
            {!showSelectedChat && (
              <div className="chats-wrapper">
                {conversations.map((conversation) => (
                  <ChatContainer onClick={() => handleOpenChat(conversation)}>
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
                <ChatContainer onClick={() => handleOpenChat(conversation)}>
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

        <div className="selected-chat-wrapper">
          {showSelectedChat && (
            <Chat name={selectedChatName} userId={selectedChatUserId} photoUrl={selectedChatPhotoUrl} />
          )}
        </div>
      </main>
    </Container>
  )
}

export default Home
