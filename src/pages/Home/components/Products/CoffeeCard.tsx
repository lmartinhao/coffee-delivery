import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm, FormActions } from '../../../../contexts/FormContext'
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
  const [quantityOfCoffees, setQuantityOfCoffees] = useState<number[]>([])
  const { state, dispatch } = useForm()

  function handleAddToCart(id: number) {
    dispatch({
      type: FormActions.setCart,
      payload: id,
    })
    setQuantityOfCoffees([...quantityOfCoffees, id])
  }

  function handleOrder(data: string) {
    console.log(`${quantityOfCoffees.length} - ${data}`)
    console.log(state.cart)
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
              <Plus onClick={() => handleAddToCart(id)} />
              <span>{quantityOfCoffees.length}</span>
              <Minus />
            </QuantityContainer>
            <AddToCartButton>
              <Link to="/checkout">
                <ShoppingCart
                  onClick={() => handleOrder(title)}
                  size={22}
                  weight="fill"
                />
              </Link>
            </AddToCartButton>
          </AddToCartContainer>
        </ItemValueContainer>
      </TextContainer>
    </CardContainer>
  )
}
