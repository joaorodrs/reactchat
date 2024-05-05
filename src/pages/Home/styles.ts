import styled from 'styled-components'
import { FiArrowLeft, FiPower } from 'react-icons/fi'
import { IoLogoGithub } from 'react-icons/io'

export const Container = styled.div`
  height: 100vh;
  user-select: none;

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

    > img {
      width: 40px;
      height: 40px;
    }

    > h1 {
      font-size: 25px;
    }

    @media (max-width: 800px) {
      > h1 {
        margin-left: 8px;
      }
    }

    .general-chatting-profile {
      background: rgb(50,46,56);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      padding: 3px;
      border: 1px solid white;

      @media (max-width: 800px) {
        margin-left: 10px;
      }
    }

    .logout-wrapper {
      background: rgba(0,0,0,0.5);
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      position: absolute;
      right: 20px;
      opacity: 0;
      transition: 0.2s;
      cursor: pointer;
      z-index: 2;

      :hover {
        opacity: 1;

        > svg {
          opacity: 1
        }
      }
    }
  }

  > main {
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

  main {
    .chats-wrapper {
      a.github {
        position: absolute;
        bottom: 10px;
        left: 10px;
        transition: all 0.2s;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 5px;
        color: white;

        :hover {
          background-color: #FFFFFF20;
        }
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

  @media (max-width: 800px) {
    margin-left: 10px;
  }
`

export const ChatContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background 0.3s;
  border-radius: 10px;
  margin: 10px 0 0 10px;

  > div.chat-informations-wrapper {
    margin-left: 15px;
  }

  :hover {
    background: rgba(255,255,255,0.04);
  }
`

export const ChatName = styled.h3``

export const ChatLastMessage = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
`

export const BackIcon = styled(FiArrowLeft)`
  width: 30px;
  height: 30px;
`

export const LogoutIcon = styled(FiPower)`
  width: 30px;
  height: 30px;
  opacity: 0;
  transition: 0.2s;
`

export const GithubIcon = styled(IoLogoGithub)`
  width: 25px;
  height: 25px;
`
