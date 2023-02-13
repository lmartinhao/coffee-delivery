import styled from 'styled-components'

export const PaymentFormContainer = styled.div`
  box-sizing: border-box;
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-200']};

  width: 40rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
`

export const FormHeaderBoxPurple = styled.div`
  display: flex;
  flex-direction: row;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  align-items: center;
  margin-bottom: 2rem;

  svg {
    width: 1.375rem;
    height: 1.375rem;
    margin-right: 0.5rem;
    align-self: stretch;
    color: ${(props) => props.theme['purple-500']};
  }

  h4 {
    font-size: 1rem;
    color: ${(props) => props.theme['gray-800']};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-700']};
  }
`

export const InputFormContainer = styled.form`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`

export const PaymentMethodsContainer = styled.label`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 6px;
  align-items: center;

  gap: 0.75rem;
  width: 11.167rem;
  height: 3.188rem;
  background: ${(props) => props.theme['gray-400']};

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 160%;

  text-transform: uppercase;

  color: ${(props) => props.theme['gray-700']};

  flex: none;
  order: 1;
  flex-grow: 0;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  svg {
    width: 1rem;
    height: 1rem;
    margin-right: 0.75rem;

    color: ${(props) => props.theme['purple-500']};
  }
`
