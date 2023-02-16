import {
  CheckoutContainer,
  OrderContainer,
  OrderOverviewContainer,
  OrderProductsCard,
} from './styles'

import { coffeeList } from '../Home/components/Products/CoffeList'
import { AddressForm } from './components/AddressForm'
import { PaymentForm } from './components/PaymentForm'
import { OrderCart } from './components/OrderCart'
import { FormActions, useCoffeeForm } from '../../contexts/FormContext'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import { Coffee } from 'phosphor-react'

export function Checkout() {
  const { state, dispatch } = useCoffeeForm()
  const navigate = useNavigate()
  const toast = useToast()

  const uniqueCoffeesCartList = Array.from(
    new Set(state.cart.map((coffee) => coffee)),
  )

  const totalPrice = state.cart
    .map((coffeeName) => {
      return coffeeList.filter((coffee) => coffee.title === coffeeName)
    })
    .map((cartItem) => {
      return cartItem.map((selectedCoffee) => {
        return selectedCoffee.price
      })
    })
    .flatMap((value) => value)
    .reduce((accumulator, value) => accumulator + value, 0)

  const deliveryTax = 3.5

  function handleOrder() {
    if (state.address.street !== '' || state.address.number !== '') {
      navigate('/success')
      dispatch({
        type: FormActions.setCart,
        payload: [],
      })
    } else {
      toast({
        title: 'Oops..!',
        description: `Não esqueça de preencher com todos os dados para a entrega.`,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  }

  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <AddressForm />
        <PaymentForm />
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <OrderContainer>
          <div>
            {uniqueCoffeesCartList
              .map((coffeeName) => {
                return coffeeList.filter(
                  (coffee) => coffee.title === coffeeName,
                )
              })
              .map((cartItem) => {
                return cartItem.map((selectedCoffee) => {
                  return (
                    <OrderProductsCard key={selectedCoffee.id}>
                      <OrderCart
                        svg={selectedCoffee.svg}
                        title={selectedCoffee.title}
                      />
                      <div>
                        <strong>
                          R${' '}
                          {(
                            selectedCoffee.price *
                            state.cart.filter(
                              (coffee) => coffee === selectedCoffee.title,
                            ).length
                          ).toFixed(1)}
                          0
                        </strong>
                      </div>
                    </OrderProductsCard>
                  )
                })
              })}
          </div>

          <OrderOverviewContainer>
            <div>
              <h4>Total de itens</h4>
              <span>R$ {totalPrice.toFixed(1)}0</span>
            </div>
            <div>
              <h4>Entrega</h4>
              <span>R$ {deliveryTax}0</span>
            </div>
            <div>
              <h3>Total</h3>
              <h3>R$ {(totalPrice + deliveryTax).toFixed(1)}0</h3>
            </div>
          </OrderOverviewContainer>
          <button onClick={handleOrder} form="orderForm" type="submit">
            Confirmar Pedido
          </button>
        </OrderContainer>
      </div>
    </CheckoutContainer>
  )
}
