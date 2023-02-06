import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  AddressFormContainer,
  CheckoutContainer,
  FormHeaderBoxPurple,
  FormHeaderBoxYellow,
  InputFormContainer,
  PaymentFormContainer,
  PaymentMethodsContainer,
} from './styles'

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

            <input placeholder="CEP" />
            <input placeholder="Rua" />
            <input placeholder="Número" />
            <input placeholder="Complemento" required={false} />
            <input placeholder="Bairro" />
            <input placeholder="Cidade" />
            <input placeholder="UF" />
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
      </div>
    </CheckoutContainer>
  )
}
