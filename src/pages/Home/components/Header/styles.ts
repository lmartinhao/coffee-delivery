import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-image: url('/src/assets/Background.svg');
`

export const HeaderContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  gap: 3.5rem;

  height: 34rem;
  margin: 0 10rem;

  img {
    height: 22.5;
    width: auto;
  }

  h1 {
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    padding-bottom: 1rem;
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
  }
`

export const HeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`

export const HeaderIconArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
`

export const HeaderIconBoxes = styled.div`
  display: flex;
  flex-direction: column;

  div + div {
    margin-top: 1.25rem;
  }
`

export const HeaderIconBase = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  align-items: center;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;

    color: #574f4d;

    flex: none;
    order: 1;
    flex-grow: 1;
  }

  svg {
    height: 32px;
    width: 32px;
    padding: 0.5rem;
    border-radius: 50%;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const HeaderIconBoxDarkYellow = styled(HeaderIconBase)`
  svg {
    background: ${(props) => props.theme['yellow-700']};
  }
`

export const HeaderIconBoxLightYellow = styled(HeaderIconBase)`
  svg {
    background: ${(props) => props.theme['yellow-500']};
  }
`

export const HeaderIconBoxPurple = styled(HeaderIconBase)`
  svg {
    background: ${(props) => props.theme['purple-500']};
  }
`

export const HeaderIconBoxGray = styled(HeaderIconBase)`
  svg {
    background: ${(props) => props.theme['gray-700']};
  }
`
