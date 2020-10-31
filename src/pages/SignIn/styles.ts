import styled, { css } from 'styled-components'
import { IoLogoFacebook, IoLogoGoogle } from 'react-icons/io'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const ButtonsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const buttonCss = css`
  width: 230px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    border: 1px solid white;
    color: white;
    background: transparent;
  }
`

export const GoogleButton = styled.div`
  ${buttonCss}
  background: #ea4335;
  color: white;
`

const iconCss = css`
  width: 28px;
  height: 28px;
  margin-left: 10px;
`

export const GoogleIcon = styled(IoLogoGoogle)`
  ${iconCss}
  color: white;
`

export const FacebookButton = styled.div`
  ${buttonCss}
  margin-top: 15px;
  background: #1778f2;
`

export const FacebookIcon = styled(IoLogoFacebook)`
  ${iconCss}
`
