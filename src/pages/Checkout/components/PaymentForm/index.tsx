import { useForm } from 'react-hook-form'

import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  FormHeaderBoxPurple,
  InputFormContainer,
  PaymentFormContainer,
  PaymentMethodsContainer,
} from './styles'
import { FormActions, useCoffeeForm } from '../../../../contexts/FormContext'
import { FormEvent } from 'react'

export function PaymentForm() {
  const { register } = useForm()
  const { dispatch } = useCoffeeForm()

  function handleChoosePaymentMethod(event: FormEvent) {
    dispatch({
      type: FormActions.setPayment,
      payload: (event.target as HTMLInputElement).value,
    })
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
        <InputFormContainer id="orderForm" action="">
          <div>
            <input
              type="radio"
              value="credit"
              id="field-credit"
              required
              onClick={handleChoosePaymentMethod}
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
              required
              onClick={handleChoosePaymentMethod}
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
              required
              onClick={handleChoosePaymentMethod}
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
