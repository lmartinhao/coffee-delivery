import { MapPinLine } from 'phosphor-react'
import {
  AddressFormContainer,
  CheckoutContainer,
  FormHeaderBox,
  OrderContainer,
  PaymentFormContainer,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <AddressFormContainer>
          <FormHeaderBox>
            <MapPinLine />
            <div>
              <h4>Endereço de Entrega</h4>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </FormHeaderBox>
        </AddressFormContainer>
        <PaymentFormContainer>
          Selecionar forma de pagamento
        </PaymentFormContainer>
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <OrderContainer>Quadro de café</OrderContainer>
      </div>
    </CheckoutContainer>
  )
}
