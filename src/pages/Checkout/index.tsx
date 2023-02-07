import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'
import {
  AddAndRemoveContainer,
  AddressFormContainer,
  CheckoutContainer,
  FormHeaderBoxPurple,
  FormHeaderBoxYellow,
  InputFormContainer,
  OrderContainer,
  OrderOverviewContainer,
  OrderProductsCard,
  PaymentFormContainer,
  PaymentMethodsContainer,
  ProductInfoDisplay,
  QuantityContainer,
} from './styles'

import { coffeeList } from '../Home/components/Products/CoffeList'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <form>
          <AddressFormContainer>
            <FormHeaderBoxYellow>
              <MapPinLine />
              <div>
                <h4>Endereço de Entrega</h4>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </FormHeaderBoxYellow>

            <input placeholder="CEP" type="number" size={8} required />
            <input placeholder="Rua" required />
            <input placeholder="Número" required />
            <input placeholder="Complemento" />
            <input placeholder="Bairro" required />
            <input placeholder="Cidade" required />
            <input placeholder="UF" size={2} required />
          </AddressFormContainer>

          <PaymentFormContainer>
            <FormHeaderBoxPurple>
              <CurrencyDollar />
              <div>
                <h4>Pagamento</h4>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </FormHeaderBoxPurple>
            <InputFormContainer>
              <div>
                <input type="radio" id="credit" name="payment" />
                <PaymentMethodsContainer htmlFor="credit">
                  <div>
                    <CreditCard /> Cartão de crédito
                  </div>
                </PaymentMethodsContainer>
              </div>

              <div>
                <input type="radio" id="debit" name="payment" />
                <PaymentMethodsContainer htmlFor="debit">
                  <div>
                    <Bank /> Cartão de débito
                  </div>
                </PaymentMethodsContainer>
              </div>

              <div>
                <input type="radio" id="money" name="payment" />
                <PaymentMethodsContainer htmlFor="money">
                  <div>
                    <Money /> Dinheiro
                  </div>
                </PaymentMethodsContainer>
              </div>
            </InputFormContainer>
          </PaymentFormContainer>
        </form>
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
          <button type="submit">Confirmar Pedido</button>
        </OrderContainer>
      </div>
    </CheckoutContainer>
  )
}
