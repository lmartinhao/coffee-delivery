import { ShoppingCart } from 'phosphor-react'
import { coffeeList } from './CoffeList'
import {
  CardContainer,
  ItemValueContainer,
  PriceContainer,
  ProductsArea,
  ProductsContainer,
  TagArea,
  TagContainer,
  TextContainer,
} from './styles'

export function Products() {
  return (
    <ProductsContainer>
      <h2>Nossos cafés</h2>

      <ProductsArea>
        {coffeeList.map((coffee) => {
          return (
            <CardContainer key={coffee.id}>
              <img src={coffee.svg} alt="Café tipo americano" />

              <TagArea>
                {coffee.tags.map((tag) => {
                  return (
                    <TagContainer key={`${coffee.id} - ${tag}`}>
                      <span>{tag}</span>
                    </TagContainer>
                  )
                })}
              </TagArea>

              <TextContainer>
                <h3>{coffee.title}</h3>
                <span>{coffee.content}</span>
                <ItemValueContainer>
                  <PriceContainer>
                    <span>R$</span>
                    <h3>{coffee.price}</h3>
                  </PriceContainer>

                  <div>
                    <span>Quantity</span>
                    <ShoppingCart weight="fill" />
                  </div>
                </ItemValueContainer>
              </TextContainer>
            </CardContainer>
          )
        })}
      </ProductsArea>
    </ProductsContainer>
  )
}
