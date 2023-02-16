import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCoffeeForm, FormActions } from '../../../../contexts/FormContext'
import {
  AddToCartButton,
  AddToCartContainer,
  CardContainer,
  ItemValueContainer,
  PriceContainer,
  QuantityContainer,
  TagArea,
  TagContainer,
  TextContainer,
} from './styles'

type CoffeeCardProps = {
  id: number
  svg: string
  title: string
  tags: string[]
  content: string
  price: number
}

export function CoffeeCard({
  id,
  svg,
  title,
  tags,
  content,
  price,
}: CoffeeCardProps) {
  const { state, dispatch } = useCoffeeForm()

  function handleAddToCart(title: string) {
    const newCart = [...state.cart, title]
    dispatch({
      type: FormActions.setCart,
      payload: newCart,
    })
  }

  function handleRemoveFromCart(title: string) {
    const array = [...state.cart]
    const index = state.cart.indexOf(title)

    const cartWithoutRemovedCoffees = [
      ...array.slice(0, index),
      ...array.slice(index + 1),
    ]
    dispatch({
      type: FormActions.setCart,
      payload: cartWithoutRemovedCoffees,
    })
  }

  return (
    <CardContainer key={id}>
      <img src={svg} alt={title} />

      <TagArea>
        {tags.map((tag) => {
          return (
            <TagContainer key={`${id} - ${tag}`}>
              <span>{tag}</span>
            </TagContainer>
          )
        })}
      </TagArea>

      <TextContainer>
        <h3>{title}</h3>
        <span>{content}</span>
        <ItemValueContainer>
          <PriceContainer>
            <span>R$</span>
            <h3>{price}0</h3>
          </PriceContainer>

          <AddToCartContainer>
            <QuantityContainer>
              <Minus onClick={() => handleRemoveFromCart(title)} />
              <span>
                {state.cart.filter((coffee) => coffee === title).length}
              </span>
              <Plus onClick={() => handleAddToCart(title)} />
            </QuantityContainer>
            <AddToCartButton>
              <Link to="/checkout">
                <ShoppingCart size={22} weight="fill" />
              </Link>
            </AddToCartButton>
          </AddToCartContainer>
        </ItemValueContainer>
      </TextContainer>
    </CardContainer>
  )
}
