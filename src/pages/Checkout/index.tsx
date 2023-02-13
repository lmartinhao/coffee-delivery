import { Minus, Plus, Trash } from 'phosphor-react'
import {
  AddAndRemoveContainer,
  CheckoutContainer,
  OrderContainer,
  OrderOverviewContainer,
  OrderProductsCard,
  ProductInfoDisplay,
  QuantityContainer,
} from './styles'

import { coffeeList } from '../Home/components/Products/CoffeList'
import { AddressForm } from './components/AddressForm'
import { PaymentForm } from './components/PaymentForm'

export function Checkout() {
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
            {coffeeList
              .filter((coffee) => coffee.title.includes('Expresso'))
              .map((selectedCoffee) => {
                return (
                  <OrderProductsCard key={selectedCoffee.id}>
                    <ProductInfoDisplay>
                      <img
                        src={selectedCoffee.svg}
                        alt={selectedCoffee.title}
                      />
                      <div>
                        <span>{selectedCoffee.title}</span>
                        <QuantityContainer>
                          <AddAndRemoveContainer>
                            <Plus /> 2 <Minus />
                          </AddAndRemoveContainer>
                          <AddAndRemoveContainer>
                            <button type="reset">
                              <Trash /> Remover
                            </button>
                          </AddAndRemoveContainer>
                        </QuantityContainer>
                      </div>
                    </ProductInfoDisplay>
                    <div>
                      <strong>R$ {selectedCoffee.price * 2}0</strong>
                    </div>
                  </OrderProductsCard>
                )
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
