import { Minus, Plus, Trash } from 'phosphor-react'
import { FormActions, useCoffeeForm } from '../../../../contexts/FormContext'
import {
  AddAndRemoveContainer,
  ProductInfoDisplay,
  QuantityContainer,
} from './styles'

type OrderCardProps = {
  svg: string
  title: string
}

export function OrderCart({ svg, title }: OrderCardProps) {
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

  const coffeeQuantityPerType = state.cart.filter((coffee) => coffee === title)

  function handleRemoveAllCoffeesFromCart(title: string) {
    const coffeeCartWithoutRemovedOnes = state.cart.filter(
      (coffee) => coffee !== title,
    )
    console.log(coffeeCartWithoutRemovedOnes)
    dispatch({
      type: FormActions.setCart,
      payload: coffeeCartWithoutRemovedOnes,
    })
  }

  return (
    <ProductInfoDisplay>
      <img src={svg} alt={title} />
      <div>
        <span>{title}</span>
        <QuantityContainer>
          <AddAndRemoveContainer>
            <Minus onClick={() => handleRemoveFromCart(title)} />
            {coffeeQuantityPerType.length}
            <Plus onClick={() => handleAddToCart(title)} />
          </AddAndRemoveContainer>
          <AddAndRemoveContainer>
            <button
              onClick={() => handleRemoveAllCoffeesFromCart(title)}
              type="reset"
            >
              <Trash /> Remover
            </button>
          </AddAndRemoveContainer>
        </QuantityContainer>
      </div>
    </ProductInfoDisplay>
  )
}
