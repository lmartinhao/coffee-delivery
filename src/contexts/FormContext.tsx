// 1. Context (a caixinha que vai armazenar os dados)
// 2. Reducer (agrupamento de ações específicas)
// 3. Provider (o ambiente)
// 4. Hook (vai simplificar o processo de acesso ao provider)

import { createContext, ReactNode, useContext, useReducer } from 'react'

type State = {
  cart: Array<string>
  address: {
    cep: string
    street: string
    number: string
    complement: string
    neighborhood: string
    city: string
    district: string
  }
  payment: string
}

export enum FormActions {
  setCart,
  setAddress,
  setPayment,
}

type FormProviderProps = {
  children: ReactNode
}

type Action = {
  type: FormActions
  payload: any
}

type ContextType = {
  state: State
  dispatch: (action: Action) => void
}

const initialData: State = {
  cart: [],
  address: {
    cep: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    district: '',
  },
  payment: '',
}

// 1.Context
const FormContext = createContext<ContextType | undefined>(undefined)

// 2. Reducer
function formReducer(state: State, action: Action) {
  switch (action.type) {
    case FormActions.setCart:
      return { ...state, cart: action.payload }
    case FormActions.setAddress:
      return { ...state, address: action.payload }
    case FormActions.setPayment:
      return { ...state, payment: action.payload }
    default:
      return state
  }
}

// 3. provider
export function FormProvider({ children }: FormProviderProps) {
  const [state, dispatch] = useReducer(formReducer, initialData)
  const value = { state, dispatch }

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

// 4. context hook
export function useCoffeeForm() {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error('useForm precisa ser usado dentro do FormProvider')
  }
  return context
}
