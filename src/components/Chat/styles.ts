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
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const InputContainer = styled.form`
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

    @media (min-width: 800px) {
      font-size: 17px;
    }

    :focus {
      background: rgba(255,255,255,0.05);
    }
  }
`

export const SendMessageButton = styled.a`
  width: 55px;
  height: 100%;
  border-left: 1px solid rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s;
  border-radius: 0 8px 8px 0;
`

export const SendMessageIcon = styled(FiSend)`
  width: 20px;
  height: 20px;
  color: white;
`

export const MessageContainer = styled.div<{ received?: boolean }>`
  display: flex;
  justify-content: ${props => props.received ? 'flex-start' : 'flex-end'};

  img {
    display: ${props => props.received ? 'unset' : 'none'};
  }
`

export const Message = styled.div`
  background: rgba(110,0,200,0.5);
  padding: 0 10px;
  border-radius: 5px;
  height: 50px;
  max-width: 275px;
  margin: 10px 10px 10px;
  display: flex;
  align-items: center;

  > img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
`