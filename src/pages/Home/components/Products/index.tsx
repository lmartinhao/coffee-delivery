import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CoffeeCard } from './CoffeeCard'
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
            <CoffeeCard
              key={coffee.id}
              id={coffee.id}
              svg={coffee.svg}
              title={coffee.title}
              tags={coffee.tags}
              content={coffee.content}
              price={coffee.price}
            />
          )
        })}
      </ProductsArea>
    </ProductsContainer>
  )
}
