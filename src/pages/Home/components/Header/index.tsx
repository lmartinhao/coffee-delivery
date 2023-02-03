import {
  HeaderContainer,
  HeaderContentContainer,
  HeaderIconArea,
  HeaderIconBoxDarkYellow,
  HeaderIconBoxes,
  HeaderIconBoxGray,
  HeaderIconBoxLightYellow,
  HeaderIconBoxPurple,
  HeaderTextContainer,
} from './styles'

import ImageHeader from '../../../../assets/Imagem.svg'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContentContainer>
        <HeaderTextContainer>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com a Coffee Delivery você recebe o seu café onde estiver, a
              qualquer hora
            </span>
          </div>
          <HeaderIconArea>
            <HeaderIconBoxes>
              <HeaderIconBoxDarkYellow>
                <ShoppingCart size={16} weight="fill" />
                <span>Compra simples e segura</span>
              </HeaderIconBoxDarkYellow>

              <HeaderIconBoxLightYellow>
                <Timer size={16} weight="fill" />
                <span>Entrega rápida e rastreada</span>
              </HeaderIconBoxLightYellow>
            </HeaderIconBoxes>
            <HeaderIconBoxes>
              <HeaderIconBoxPurple>
                <Coffee size={16} weight="fill" />
                <span>O café chega fresquinho até você</span>
              </HeaderIconBoxPurple>

              <HeaderIconBoxGray>
                <Package size={16} weight="fill" />
                <span>Embalagem mantém o café intacto</span>
              </HeaderIconBoxGray>
            </HeaderIconBoxes>
          </HeaderIconArea>
        </HeaderTextContainer>
        <img src={ImageHeader} alt="" />
      </HeaderContentContainer>
    </HeaderContainer>
  )
}
