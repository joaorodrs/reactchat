import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  > header {
    background: rgb(30,26,36);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    position: sticky;

    @media (max-width: 800px) {
      width: 100vw;
    }

    > h1 {
      font-size: 25px;
    }
  }

  > main {
    .selected-chat-wrapper {
      display: none;
    }

    .chats-wrapper {
      overflow-y: scroll;
      height: calc(100vh - 60px);

      ::-webkit-scrollbar {
        width: 10px;
      }
      ::-webkit-scrollbar-track {
        border-radius: 15px;
      }
      ::-webkit-scrollbar-thumb {
        background: rgba(255,255,255,0.1);
        border-radius: 10px;

        :hover {
          background: rgba(255,255,255,0.15);
        }
      }
    }
  }

  @media (min-width: 800px) {
    > main {
      display: flex;

      .chats-wrapper {
        width: 350px;
      }

      .selected-chat-wrapper {
        display: flex;
        background: rgba(0,0,0,0.1);
        width: 100%;
      }
    }
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
  cursor: pointer;
  transition: background 0.3s;
  border-radius: 10px;

  > div.chat-informations-wrapper {
    margin-left: 15px;
  }

  :hover {
    background: rgba(255,255,255,0.04);
  }
`

export const ChatAvatar = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
`

export const ChatName = styled.h3``

export const ChatLastMessage = styled.p``
