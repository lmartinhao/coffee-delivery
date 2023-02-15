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
  return (
    <ProductInfoDisplay>
      <img src={svg} alt={title} />
      <div>
        <span>{title}</span>
        <QuantityContainer>
          <AddAndRemoveContainer>
            <Plus onClick={() => handleAddToCart(title)} />{' '}
            {coffeeQuantityPerType.length}{' '}
            <Minus onClick={() => handleRemoveFromCart(title)} />
          </AddAndRemoveContainer>
          <AddAndRemoveContainer>
            <button type="reset">
              <Trash /> Remover
            </button>
          </AddAndRemoveContainer>
        </QuantityContainer>
      </div>
    </ProductInfoDisplay>
  )
}
