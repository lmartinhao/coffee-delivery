import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  padding: 2.5rem 10rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: flex-start;

  h2 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;

    display: flex;
    align-items: center;

    color: ${(props) => props.theme['gray-800']};
  }
`

export const BaseFormContainer = styled.div`
  box-sizing: border-box;
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-200']};
`

export const AddressFormContainer = styled(BaseFormContainer)`
  width: 40rem;
  border-radius: 6px;
  margin-top: 0.938rem;
  margin-bottom: 0.75rem;
`

export const PaymentFormContainer = styled(BaseFormContainer)`
  width: 40rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
`

export const InputFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`

export const OrderContainer = styled(BaseFormContainer)`
  display: flex;
  flex-direction: column;
  margin-top: 0.938rem;
  width: 28rem;
  border-radius: 6px 44px;

  hr {
    color: #e6e5e5;
    padding: 1.563rem 0;
  }
`

export const FormHeaderBox = styled.div`
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

export const FormHeaderBoxPurple = styled(FormHeaderBox)`
  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`

export const FormHeaderBoxYellow = styled(FormHeaderBox)`
  svg {
    color: ${(props) => props.theme['yellow-700']};
  }
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
