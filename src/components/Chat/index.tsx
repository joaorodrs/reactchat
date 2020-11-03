import React, { FormEvent, useRef, useState } from 'react'

import firebase from 'firebase/app'

import {
  Container,
  ChatContainer,
  InputContainer,
  SendMessageButton,
  SendMessageIcon,
  MessageContainer,
  Message,
} from './styles'

interface Props {
  messages: Array<{
    text: string,
    sender: string,
    senderPhoto: string,
  }> | undefined,
  auth: firebase.auth.Auth,
  messagesRef: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>
}

const Chat: React.FC<Props> = ({ messages, auth, messagesRef }) => {
  const [message, setMessage] = useState<string>('')
  const [blankMessage, setBlankMessage] = useState(false)

  const userEmail = auth.currentUser?.email

  const dummyRef = useRef<HTMLDivElement>(null)

  async function sendMessage(event: FormEvent) {
    event.preventDefault()

    if (message?.length < 1) {
      setBlankMessage(true)

      const timer = setTimeout(() => setBlankMessage(false), 100)

      return () => clearTimeout(timer)
    }

    const photoUrl = auth.currentUser?.photoURL
    setMessage('')

    await messagesRef.add({
      text: message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      sender: userEmail,
      senderPhoto: photoUrl
    })

    if (dummyRef === null) return
    // @ts-ignore
    dummyRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Container>
      <ChatContainer>
        {messages?.map(message => (
          <MessageContainer received={message.sender !== userEmail}>
            <Message>
              <img src={message.senderPhoto} alt="user" />
              <p>{message.text}</p>
            </Message>
          </MessageContainer>
        ))}
        <div ref={dummyRef}></div>
      </ChatContainer>
      <InputContainer onSubmit={sendMessage} blankMessage={blankMessage}>
        <input
          placeholder="Digite uma mensagem"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <SendMessageButton type="submit">
          <SendMessageIcon />
        </SendMessageButton>
      </InputContainer>
    </Container>
  )
}

export default Chat
