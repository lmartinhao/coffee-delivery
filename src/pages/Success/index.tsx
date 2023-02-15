import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  SuccessContainer,
  SuccessIconBoxDarkYellow,
  SuccessIconBoxLightYellow,
  SuccessIconBoxPurple,
  SuccessIconContainer,
  TextContainer,
} from './styles'
import Illustration from '../../assets/Illustration.svg'
import { useCoffeeForm } from '../../contexts/FormContext'

export function Success() {
  const { state } = useCoffeeForm()
  const deliveryAddress = state.address
  const paymentMethod = state.payment

  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>

        <SuccessIconContainer>
          <SuccessIconBoxPurple>
            <MapPin size={16} weight="fill" />
            <TextContainer>
              <span>
                Entrega em{' '}
                <strong>{`${deliveryAddress.street}, ${deliveryAddress.number}`}</strong>
              </span>
              <span>{`${deliveryAddress.neighborhood} - ${deliveryAddress.city}, ${deliveryAddress.district}`}</span>
            </TextContainer>
          </SuccessIconBoxPurple>
          <SuccessIconBoxLightYellow>
            <Timer size={16} weight="fill" />
            <TextContainer>
              <span>Previsão de entrega</span>
              <span>
                <strong>20 min - 30 min </strong>
              </span>
            </TextContainer>
          </SuccessIconBoxLightYellow>
          <SuccessIconBoxDarkYellow>
            <CurrencyDollar size={16} weight="fill" />
            <TextContainer>
              <span>Pagamento na entrega</span>
              <span>
                {paymentMethod === 'credit' && (
                  <strong>Cartão de Crédito</strong>
                )}
                {paymentMethod === 'debit' && <strong>Cartão de Débito</strong>}
                {paymentMethod === 'money' && <strong>Dinheiro</strong>}
              </span>
            </TextContainer>
          </SuccessIconBoxDarkYellow>
        </SuccessIconContainer>
      </div>
      <img
        src={Illustration}
        alt="Ilustração de homem numa motocicleta fazendo uma entrega"
      />
    </SuccessContainer>
  )
}
