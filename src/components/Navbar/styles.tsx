import styled from 'styled-components'

export const NavbarContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    height: 6.5rem;
    align-items: center;

    display: flex;
    flex-direction: row;
    gap: 0.75rem;
  }
`

export const BaseBox = styled.a`
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
