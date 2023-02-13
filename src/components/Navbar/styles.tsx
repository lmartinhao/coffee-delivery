import styled from 'styled-components'

export const NavbarContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10rem;

  nav {
    height: 6.5rem;
    align-items: center;

    display: flex;
    flex-direction: row;
    gap: 0.75rem;
  }
`

export const BaseBox = styled.div`
  display: flex;
  flex-direction: row;

  height: 2.375rem;
  border-radius: 6px;
  padding: 0.5rem;
`

export const CartBox = styled(BaseBox)`
  background: ${(props) => props.theme['yellow-100']};

  svg {
    color: ${(props) => props.theme['yellow-700']};
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    position: relative;

    width: 20px;
    height: 20px;
    left: 1.25rem;
    bottom: 2.75rem;

    letter-spacing: -0.06em;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 130%;

    background: #c47f17;
    color: white;
    border-radius: 50%;
  }
`

export const LocalizationBox = styled(BaseBox)`
  align-items: center;
  gap: 0.25rem;

  color: ${(props) => props.theme['purple-700']};
  background: ${(props) => props.theme['purple-100']};

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`
