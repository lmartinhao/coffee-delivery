import { CartBox, NavbarContainer, LocalizationBox } from './styles'
import { useForm, FormActions } from '../../contexts/FormContext'

import Logo from '../../assets/coffee-logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { Link } from 'react-router-dom'

export function Navbar() {
  const { state } = useForm()

  function handleOverviewOrder() {
    console.log(state.cart)
  }

  return (
    <NavbarContainer>
      <a href="/">
        <img src={Logo} alt="" />
      </a>
      <nav>
        <LocalizationBox>
          <MapPin size={22} />
          <span>Porto Alegre, RS</span>
        </LocalizationBox>
        <CartBox>
          <Link to="/checkout">
            <ShoppingCart
              onClick={handleOverviewOrder}
              size={22}
              weight="fill"
            />
            {state.cart.length}
          </Link>
        </CartBox>
      </nav>
    </NavbarContainer>
  )
}
