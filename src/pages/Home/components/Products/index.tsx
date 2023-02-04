import { ShoppingCart } from 'phosphor-react'
import {
  CardContainer,
  ItemValueContainer,
  PriceContainer,
  ProductsContainer,
  TagContainer,
  TextContainer,
} from './styles'
import Americano from '../../../../assets/coffees/Type=Americano.svg'

export function Products() {
  return (
    <ProductsContainer>
      <h2>Nossos cafés</h2>

      <CardContainer>
        <img src={Americano} alt="Café tipo americano" />

        <TagContainer>
          <span>Tradicional</span>
        </TagContainer>
        <TextContainer>
          <h3>Expresso Tradicional</h3>
          <span>O tradicional café feito com água quente e grãos moídos</span>
          <ItemValueContainer>
            <PriceContainer>
              <span>R$</span>
              <h3>9,90</h3>
            </PriceContainer>

            <div>
              <span>Quantity</span>
              <ShoppingCart weight="fill" />
            </div>
          </ItemValueContainer>
        </TextContainer>
      </CardContainer>
    </ProductsContainer>
  )
}
