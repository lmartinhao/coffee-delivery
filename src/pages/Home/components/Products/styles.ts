import styled from 'styled-components'

export const ProductsContainer = styled.div`
  margin: 0 10rem 10rem;

  h2 {
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;

    display: flex;
    align-items: center;

    color: ${(props) => props.theme['gray-800']};

    margin-bottom: 3.375rem;
  }
`

export const ProductsArea = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;

  max-width: 70rem;

  div + div {
    margin-bottom: 2.5rem;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 6px 36px;

  width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme['gray-200']};

  img {
    height: 7.5rem;
    width: 7.5rem;
    margin-top: -10%;
    margin-bottom: 1rem;
  }
`

export const TextContainer = styled.span`
  padding: 0 1.25rem;
  text-align: center;

  h3 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    text-align: center;

    margin-bottom: 0.5rem;

    color: ${(props) => props.theme['gray-800']};
  }

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;

    text-align: center;

    color: ${(props) => props.theme['gray-600']};
  }
`

export const TagArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  margin-bottom: 1rem;
  gap: 0.25rem;
`

export const TagContainer = styled.span`
  background: ${(props) => props.theme['yellow-100']};
  border-radius: 100px;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;
    padding: 4px 8px;

    text-transform: uppercase;

    color: ${(props) => props.theme['yellow-700']};
  }
`

export const ItemValueContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  gap: 1.438rem;
  margin-top: 2.063rem;
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;

  gap: 0.2rem;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;

    color: #574f4d;
  }

  h3 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 130%;

    color: #574f4d;
  }
`
