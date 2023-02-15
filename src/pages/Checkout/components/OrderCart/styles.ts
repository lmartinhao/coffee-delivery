import styled from 'styled-components'

export const ProductInfoDisplay = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;

  padding: 0.5rem 0 0.5rem 0.25rem;
  box-sizing: border-box;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;

    display: flex;
    align-items: center;

    color: #403937;
  }

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const AddAndRemoveContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  align-items: center;

  width: fit-content;
  background: ${(props) => props.theme['gray-400']};
  padding: 0.344rem 0.5rem;
  border-radius: 6px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;

  text-align: center;

  color: ${(props) => props.theme['gray-900']};

  svg {
    width: 0.875rem;
    height: 0.875rem;
    color: ${(props) => props.theme['purple-500']};
  }

  button {
    display: flex;
    flex-direction: row;
    gap: 0.25rem;

    align-items: center;
    font-size: 0.75rem;
    line-height: 160%;
    text-transform: uppercase;
    background: ${(props) => props.theme['gray-400']};
  }
`

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;

  gap: 0.5rem;
`
