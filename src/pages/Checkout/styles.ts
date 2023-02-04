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

    color: #403937;
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
`

export const OrderContainer = styled(BaseFormContainer)`
  display: flex;
  margin-top: 0.938rem;
  width: 28rem;
  border-radius: 6px 44px;
`

export const FormHeaderBox = styled.div`
  display: flex;
  flex-direction: row;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  align-items: center;

  svg {
    width: 1.375rem;
    height: 1.375rem;
    color: ${(props) => props.theme['yellow-700']};
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
