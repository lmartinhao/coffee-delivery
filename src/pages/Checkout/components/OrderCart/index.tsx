import { Minus, Plus, Trash } from 'phosphor-react'
import { useCoffeeForm } from '../../../../contexts/FormContext'
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
  const { state } = useCoffeeForm()

  const coffeeQuantityPerType = state.cart.filter((coffee) => coffee === title)
  return (
    <ProductInfoDisplay>
      <img src={svg} alt={title} />
      <div>
        <span>{title}</span>
        <QuantityContainer>
          <AddAndRemoveContainer>
            <Plus /> {coffeeQuantityPerType.length} <Minus />
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
