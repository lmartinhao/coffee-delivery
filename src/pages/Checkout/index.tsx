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
import { useCoffeeForm } from '../../contexts/FormContext'

export function Checkout() {
  const { state } = useCoffeeForm()
  const uniqueCoffeesCartList = Array.from(
    new Set(state.cart.map((coffee) => coffee)),
  )
  console.log(uniqueCoffeesCartList)

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
                        <strong>R$ {selectedCoffee.price * 2}0</strong>
                      </div>
                    </OrderProductsCard>
                  )
                })
              })}
          </div>

          <OrderOverviewContainer>
            <div>
              <h4>Total de itens</h4>
              <span>R$ 29,90</span>
            </div>
            <div>
              <h4>Entrega</h4>
              <span>R$ 3,50</span>
            </div>
            <div>
              <h3>Total</h3>
              <h3>R$ 50,00</h3>
            </div>
          </OrderOverviewContainer>
          <button form="orderForm" type="submit">
            Confirmar Pedido
          </button>
        </OrderContainer>
      </div>
    </CheckoutContainer>
  )
}
