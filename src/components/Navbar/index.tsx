import { CartBox, NavbarContainer, LocalizationBox } from './styles'
import { useCoffeeForm } from '../../contexts/FormContext'

import Logo from '../../assets/coffee-logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { Link, useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'

export function Navbar() {
  const { state } = useCoffeeForm()
  const navigate = useNavigate()
  const toast = useToast()

  function handleOverviewOrder() {
    if (state.cart.length > 0) {
      navigate('/checkout')
    } else {
      toast({
        title: 'Oops..!',
        description: 'Parece que você ainda não tem nenhum café no carrinho.',
        status: 'warning',
        duration: 9000,
        isClosable: true,
      })
    }
  }

  return (
    <NavbarContainer>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <nav>
        <LocalizationBox>
          <MapPin size={22} />
          <span>São Paulo, SP</span>
        </LocalizationBox>
        <CartBox onClick={handleOverviewOrder}>
          <button>
            <ShoppingCart size={22} weight="fill" />
            <div>{state.cart.length}</div>
          </button>
        </CartBox>
      </nav>
    </NavbarContainer>
  )
}
