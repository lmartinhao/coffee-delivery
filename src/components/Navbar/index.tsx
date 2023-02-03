import { CartBox, NavbarContainer, LocalizationBox } from './styles'

import Logo from '../../assets/coffee-logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'

export function Navbar() {
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
          <a href="/checkout">
            <ShoppingCart size={22} weight="fill" />
          </a>
        </CartBox>
      </nav>
    </NavbarContainer>
  )
}