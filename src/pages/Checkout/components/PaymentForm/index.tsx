import { useForm } from 'react-hook-form'

import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  FormHeaderBoxPurple,
  InputFormContainer,
  PaymentFormContainer,
  PaymentMethodsContainer,
} from './styles'

export function PaymentForm() {
  const { register, handleSubmit } = useForm()

  function handleCreateOrder(data: any) {
    console.log(data)
  }

  return (
    <PaymentFormContainer>
      <FormHeaderBoxPurple>
        <CurrencyDollar />
        <div>
          <h4>Pagamento</h4>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </FormHeaderBoxPurple>
      <div>
        <InputFormContainer
          id="orderForm"
          onSubmit={handleSubmit(handleCreateOrder)}
          action=""
        >
          <div>
            <input
              type="radio"
              value="credit"
              id="field-credit"
              {...register('payment')}
            />
            <PaymentMethodsContainer htmlFor="field-credit">
              <div>
                <CreditCard /> Cartão de crédito
              </div>
            </PaymentMethodsContainer>
          </div>

          <div>
            <input
              type="radio"
              value="debit"
              id="field-debit"
              {...register('payment')}
            />
            <PaymentMethodsContainer htmlFor="field-debit">
              <div>
                <Bank /> Cartão de débito
              </div>
            </PaymentMethodsContainer>
          </div>

          <div>
            <input
              type="radio"
              value="money"
              id="field-money"
              {...register('payment')}
            />
            <PaymentMethodsContainer htmlFor="field-money">
              <div>
                <Money /> Dinheiro
              </div>
            </PaymentMethodsContainer>
          </div>
        </InputFormContainer>
      </div>
    </PaymentFormContainer>
  )
}
