import styled from 'styled-components'

export const Container = styled.div`
  > header {
    background: rgb(30,26,36);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    position: fixed;
    width: 100vw;

    > h1 {
      font-size: 25px;
    }
  }

  > main {
    padding-top: 60px;
  }
`

export const AvatarImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 3px;
  border: 1px solid white;
`

export const ChatContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  > div.chat-informations-wrapper {
    margin-left: 15px;
  }
`

export const ChatAvatar = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
`

export const ChatName = styled.h3``

export const ChatLastMessage = styled.p``
