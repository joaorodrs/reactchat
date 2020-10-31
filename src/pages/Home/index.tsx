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

interface Contact {
  displayName: string,
  email: string,
  messages: Array<{
    content: string,
    time: { nanoseconds: number, seconds: number },
    type: "send" | "recieve"
  }>
}

interface Props {
  auth: firebase.auth.Auth,
  firestore: firebase.firestore.Firestore
}

const windowWidth = window.innerWidth

const Home: React.FC<Props> = ({ firestore, auth }) => {
  const contactsRef = firestore.collection('userContacts')
    
  const [contacts]: any = useCollectionData(contactsRef.orderBy('email'))

  const [showSelectedChat, setShowSelectedChat] = useState(false)

  const [userPhotoUrl, setUserPhotoUrl] = useState('')

  const [selectedChatName, setSelectedChatName] = useState('cool')
  const [selectedChatUserId, setSelectedChatUserId] = useState('')
  const [selectedChatPhotoUrl, setSelectedChatPhotoUrl] = useState('')

  const handleOpenChat = ({ displayName, email }: Contact) => {
    setSelectedChatName(displayName)
    setSelectedChatUserId(email)

    setShowSelectedChat(true)
  }

  useEffect(() => {
    setUserPhotoUrl(String(auth.currentUser?.photoURL))
  }, [])

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
                <AvatarImage src={selectedChatPhotoUrl} />
                <h1>{selectedChatName}</h1>
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
                {contacts?.map((conversation: Contact) => (
                  <ChatContainer onClick={() => handleOpenChat(conversation)}>
                    <ChatAvatar src={conversation.displayName} />
                    <div className="chat-informations-wrapper">
                      <ChatName>{conversation.displayName}</ChatName>
                      <ChatLastMessage>{conversation.messages[0].content}</ChatLastMessage>
                    </div>
                  </ChatContainer>
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            <div className="chats-wrapper">
              {contacts?.map((conversation: Contact) => (
                <ChatContainer onClick={() => handleOpenChat(conversation)}>
                  <ChatAvatar src={conversation.displayName} />
                  <div className="chat-informations-wrapper">
                    <ChatName>{conversation.displayName}</ChatName>
                    <ChatLastMessage>{conversation.messages[0].content}</ChatLastMessage>
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
