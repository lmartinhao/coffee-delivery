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

  input {
    background: ${(props) => props.theme['gray-300']};
    padding: 12px;

    border: 1px solid #e6e5e5;
    border-radius: 4px;
  }

  input + input {
    margin-top: 1rem;
  }
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

  button[type='submit'] {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 8px;
    gap: 4px;

    width: 100%;
    height: 2.875rem;

    background: ${(props) => props.theme['yellow-500']};
    border-radius: 6px;

    align-self: stretch;
    font-stretch: 100;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 0.85rem;
    line-height: 160%;

    text-transform: uppercase;

    color: ${(props) => props.theme.white};

    &:hover {
      background: ${(props) => props.theme['yellow-700']};
    }
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

export const OrderProductsCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5rem 0;

  &:first-child {
    padding-top: 0rem;
  }

  border-bottom: 1px solid #e6e5e5;

  strong {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;
    margin-top: 0.5rem;

    display: flex;
    align-items: center;
    text-align: right;

    color: ${(props) => props.theme['gray-700']};

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`

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

export const OrderOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1.5rem 0;

  font-family: 'Roboto';
  font-style: normal;
  line-height: 130%;
  color: ${(props) => props.theme['gray-700']};

  text-align: right;

  h4,
  h3 {
    font-family: 'Roboto';
  }

  h4 {
    font-size: 0.875rem;
    font-weight: 400;
  }

  h3 {
    font-weight: 700;
    font-size: 1.25rem;
  }

  span {
    font-size: 1rem;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`
