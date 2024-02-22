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

    try {
      const data = {
        text: message,
        createdAt: new Date(),
        sender: userEmail,
        senderPhoto: photoUrl
      }

      console.log({ data })

      await messagesRef.add(data)

      if (dummyRef === null) return
      // @ts-ignore
      dummyRef.current.scrollIntoView({ behavior: 'smooth' })
    } catch (err) {
      console.log(err)
    }
  }

  const censures = process.env.REACT_APP_SENSORED_WORDS?.split(',')
  console.log({ messages })

  return (
    <Container>
      <ChatContainer>
        {messages?.map(message => (
          <MessageContainer received={message.sender !== userEmail}>
            <Message>
              <img src={message.senderPhoto} alt="user" />
              {censures?.find(element => element === message.text.toLowerCase()) ? <i>Mensagem censurada</i> : <p>{message.text}</p>}
            </Message>
          </MessageContainer>
        ))}
        <div ref={dummyRef}></div>
      </ChatContainer>
      <InputContainer onSubmit={sendMessage} blankMessage={blankMessage}>
        <textarea
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
