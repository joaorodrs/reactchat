import styled from 'styled-components'
import { FiSend } from 'react-icons/fi'

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const ChatContainer = styled.div`
  height: 100%;
`

export const InputContainer = styled.div`
  background: rgb(60,56,66);
  width: 95%;
  height: 50px;
  margin: 10px;
  align-self: center;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > input {
    height: 100%;
    width: 100%;
    border-radius: 8px 0 0 8px;
    font-size: 20px;
    padding-left: 15px;
    color: white;
    transition: 0.2s;

    :focus {
      background: rgba(255,255,255,0.05);
    }
  }
`

export const SendMessageButton = styled.button`
  width: 55px;
  height: 100%;
  border-left: 1px solid rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s;
  border-radius: 0 8px 8px 0;

  :hover {
    background: rgba(255,255,255,0.1);
  }
`

export const SendMessageIcon = styled(FiSend)`
  width: 20px;
  height: 20px;
  color: white;
`
