import styled from 'styled-components'

export const AddressFormContainer = styled.div`
  box-sizing: border-box;
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-200']};

  width: 40rem;
  border-radius: 6px;
  margin-top: 0.938rem;
  margin-bottom: 0.75rem;
`

export const AddressInputArea = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  input {
    background: ${(props) => props.theme['gray-300']};
    padding: 12px;

    border: 1px solid #e6e5e5;
    border-radius: 4px;
    display: block;
  }

  div {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    gap: 0.75rem;
  }

  .line + .line {
    margin-top: 1rem;
  }

  .col-12 {
    width: 100%;
  }

  .col-8 {
    width: 66.66%;
  }

  .col-6 {
    width: 50%;
  }

  .col-4 {
    width: 33.33%;
  }

  .col-2 {
    width: 14%;
  }
`

export const FormHeaderBoxYellow = styled.div`
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
    color: ${(props) => props.theme['yellow-700']};
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
