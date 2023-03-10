import { useToast } from '@chakra-ui/react'
import { Coffee, Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()
  const toast = useToast()

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

  function handleOverviewOrder() {
    if (state.cart.length > 0) {
      navigate('/checkout')
    } else {
      toast({
        title: 'Oops..!',
        description: 'Parece que você ainda não tem nenhum café no carrinho.',
        status: 'warning',
        duration: 9000,
        isClosable: true,
      })
    }
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
            <AddToCartButton onClick={handleOverviewOrder}>
              <ShoppingCart size={22} weight="fill" />
            </AddToCartButton>
          </AddToCartContainer>
        </ItemValueContainer>
      </TextContainer>
    </CardContainer>
  )
}
