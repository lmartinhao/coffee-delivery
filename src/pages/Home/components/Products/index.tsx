import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { coffeeList } from './CoffeList'
import {
  AddToCartButton,
  AddToCartContainer,
  CardContainer,
  ItemValueContainer,
  PriceContainer,
  ProductsArea,
  ProductsContainer,
  QuantityContainer,
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
              <img src={coffee.svg} alt={coffee.title} />

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
                    <h3>{coffee.price}0</h3>
                  </PriceContainer>

                  <AddToCartContainer>
                    <QuantityContainer>
                      <Plus />
                      <span>1</span>
                      <Minus />
                    </QuantityContainer>
                    <AddToCartButton>
                      <ShoppingCart size={22} weight="fill" />
                    </AddToCartButton>
                  </AddToCartContainer>
                </ItemValueContainer>
              </TextContainer>
            </CardContainer>
          )
        })}
      </ProductsArea>
    </ProductsContainer>
  )
}
