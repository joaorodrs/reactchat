import React from 'react'

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
  messages: [any]
}

const Chat: React.FC<Props> = ({ messages }) => {
  return (
    <Container>
      <ChatContainer>
        <MessageContainer received>
          <Message>
            <img src="https://github.com/joaopaulo-ld.png" alt="user" />
            <p>It wurks!</p>
          </Message>
        </MessageContainer>
        <MessageContainer>
          <Message>
            <img src="https://github.com/joaopaulo-ld.png" />
            <p>It wurks!</p>
          </Message>
        </MessageContainer>
        <MessageContainer received>
          <Message>
            <img src="https://github.com/joaopaulo-ld.png" />
            <p>It wurks!</p>
          </Message>
        </MessageContainer>
        <MessageContainer>
          <Message>
            <img src="https://github.com/joaopaulo-ld.png" />
            <p>It wurks!</p>
          </Message>
        </MessageContainer>
      </ChatContainer>
      <InputContainer>
        <input
          placeholder="Digite uma mensagem"
        />
        <SendMessageButton>
          <SendMessageIcon />
        </SendMessageButton>
      </InputContainer>
    </Container>
  )
}

export default Chat
