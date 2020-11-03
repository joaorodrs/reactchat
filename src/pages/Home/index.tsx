import React, { useEffect, useState } from 'react'

import Chat from '../../components/Chat'

import firebase from 'firebase/app'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import {
  Container,
  AvatarImage,
  ChatContainer,
  ChatAvatar,
  ChatName,
  ChatLastMessage,
  BackIcon
} from './styles'

interface Props {
  auth: firebase.auth.Auth,
  firestore: firebase.firestore.Firestore
}

interface Message {
  text: string,
  sender: string,
  senderPhoto: string,
}

const windowWidth = window.innerWidth

const Home: React.FC<Props> = ({ firestore, auth }) => {
  const messagesRef = firestore.collection('messages')
  const query = messagesRef.orderBy('createdAt').limit(25)
    
  const [messages]: [Message[] | undefined, boolean, Error | undefined] = useCollectionData(query, { idField: 'id' })

  const [showSelectedChat, setShowSelectedChat] = useState(false)

  const [userPhotoUrl, setUserPhotoUrl] = useState('')

  const handleOpenChat = () => {
    setShowSelectedChat(true)
  }

  useEffect(() => {
    setUserPhotoUrl(String(auth.currentUser?.photoURL))
  }, [auth.currentUser?.photoURL])

  return (
    <Container>
      <header style={{ justifyContent: showSelectedChat ? windowWidth < 800 ? 'flex-start' : 'space-between' : 'space-between' }}>
        {windowWidth < 800 ? (
          <>
            {!showSelectedChat ? (
              <>
                <h1>ReactChat</h1>
                <AvatarImage src={userPhotoUrl} />
              </>
            ) : (
              <>
                <BackIcon onClick={() => setShowSelectedChat(false)} />
                <div className="general-chatting-profile" />
                <h1>General Chatting</h1>
              </>
            )}
          </>
        ) : (
          <>
            <h1><i>ReactChat</i></h1>
            <AvatarImage src={userPhotoUrl} />
          </>
        )}
      </header>

      <main>
        {windowWidth < 800 ? (
          <>
            {!showSelectedChat && (
              <div className="chats-wrapper">
                  <ChatContainer onClick={handleOpenChat}>
                    <ChatAvatar />
                    <div className="chat-informations-wrapper">
                      <ChatName>General Chatting</ChatName>
                      <ChatLastMessage>{messages && messages[0]?.text}</ChatLastMessage>
                    </div>
                  </ChatContainer>
              </div>
            )}
          </>
        ) : (
          <div className="chats-wrapper">
            <ChatContainer onClick={handleOpenChat}>
              <ChatAvatar />
              <div className="chat-informations-wrapper">
                <ChatName>General Group</ChatName>
                <ChatLastMessage>{messages && messages[0]?.text}</ChatLastMessage>
              </div>
            </ChatContainer>
          </div>
        )}

        <div className="selected-chat-wrapper">
          {showSelectedChat && (
            <Chat messages={messages} auth={auth} messagesRef={messagesRef} />
          )}
        </div>
      </main>
    </Container>
  )
}

export default Home
