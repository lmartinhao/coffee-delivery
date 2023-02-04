import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 0 auto;
  gap: 4.75rem;
`

export const SuccessIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;
  margin-top: 2.5rem;
  position: relative;

  width: 32.875rem;
  border: 1px solid transparent;
  background-clip: padding-box;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px 36px;

  &::after {
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: -2px;
    right: -2px;
    background: linear-gradient(to left, #8047f8, #dbac2c);
    content: '';
    z-index: -1;
    border-radius: 6px 36px;
  }
`

export const SuccessIconBase = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  align-items: center;

  span,
  strong {
    font-family: 'Roboto';
    font-size: 1rem;
    line-height: 20.8px;

    color: ${(props) => props.theme['gray-700']};
  }

  svg {
    height: 32px;
    width: 32px;
    padding: 0.5rem;
    border-radius: 50%;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const SuccessIconBoxDarkYellow = styled(SuccessIconBase)`
  svg {
    background: ${(props) => props.theme['yellow-700']};
  }
`

export const SuccessIconBoxLightYellow = styled(SuccessIconBase)`
  svg {
    background: ${(props) => props.theme['yellow-500']};
  }
`

export const SuccessIconBoxPurple = styled(SuccessIconBase)`
  svg {
    background: ${(props) => props.theme['purple-500']};
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
