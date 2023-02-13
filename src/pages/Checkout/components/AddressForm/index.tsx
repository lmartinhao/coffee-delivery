import { MapPinLine } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { AddressFormContainer, FormHeaderBoxYellow } from './styles'

export function AddressForm() {
  const { register, handleSubmit } = useForm()

  function handleCreateOrder(data: any) {
    console.log(data)
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

      <form id="orderForm" onSubmit={handleSubmit(handleCreateOrder)} action="">
        <input placeholder="CEP" type="number" required {...register('cep')} />
        <input placeholder="Rua" required {...register('street')} />
        <input placeholder="Número" required {...register('number')} />
        <input placeholder="Complemento" {...register('complement')} />
        <input placeholder="Bairro" required {...register('neighborhood')} />
        <input placeholder="Cidade" required {...register('city')} />
        <input placeholder="UF" required {...register('district')} />
      </form>
    </AddressFormContainer>
  )
}
