import React from 'react'

import {
  Container,
  ChatContainer,
  InputContainer,
  SendMessageButton,
  SendMessageIcon
} from './styles'

interface Props {
  name: string,
  userId: string,
  photoUrl: string,
}

const Chat: React.FC<Props> = ({ name, userId, photoUrl }) => {
  const handleSendMessage = () => console.log('Pressed!')

  return (
    <Container>
      <ChatContainer>

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
