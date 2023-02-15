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
