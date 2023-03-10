import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { MapPinLine } from 'phosphor-react'
import {
  AddressFormContainer,
  AddressInputArea,
  FormHeaderBoxYellow,
} from './styles'
import { FormActions, useCoffeeForm } from '../../../../contexts/FormContext'

const newAddressFormSchema = zod.object({
  cep: zod.string().length(9, 'Informe seu CEP'),
  street: zod.string().min(1, 'Informe o nome da rua'),
  number: zod.string().min(1, 'Informe o número ou SN'),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  district: zod.string().min(2, 'Informe um Estado válido'),
})

type NewAdressFormData = zod.infer<typeof newAddressFormSchema>

export function AddressForm() {
  const { state, dispatch } = useCoffeeForm()
  const { register, handleSubmit } = useForm<NewAdressFormData>({
    resolver: zodResolver(newAddressFormSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      district: '',
    },
  })

  function handleCompleteAddress(data: NewAdressFormData) {
    dispatch({
      type: FormActions.setAddress,
      payload: data,
    })
  }

  return (
    <AddressFormContainer>
      <FormHeaderBoxYellow>
        <MapPinLine />
        <div>
          <h4>Endereço de Entrega</h4>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </FormHeaderBoxYellow>

      <AddressInputArea>
        <form
          id="orderForm"
          onSubmit={handleSubmit(handleCompleteAddress)}
          action=""
        >
          <input
            className="col-4 line"
            placeholder="CEP"
            type="text"
            {...register('cep')}
          />
          <input
            className="col-12 line"
            placeholder="Rua"
            {...register('street')}
          />

          <div className="line">
            <input
              className="col-4"
              placeholder="Número"
              {...register('number')}
            />
            <input
              className="col-8"
              placeholder="Complemento"
              {...register('complement')}
            />
          </div>

          <div className="line">
            <input
              className="col-4"
              placeholder="Bairro"
              {...register('neighborhood')}
            />
            <input
              className="col-6"
              placeholder="Cidade"
              {...register('city')}
            />
            <input
              className="col-2"
              placeholder="UF"
              {...register('district')}
            />
          </div>
        </form>
      </AddressInputArea>
    </AddressFormContainer>
  )
}
