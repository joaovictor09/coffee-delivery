import { CartButton, HeaderContainer, LocaleButton } from "./styles";

import Logo from '../../assets/coffee-delivery-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <a href="">
        <img src={Logo} alt="" />
      </a>
      <div>
        <LocaleButton>
          Porto Alegre, RS
        </LocaleButton>
        <CartButton>
          Carrinho
        </CartButton>
      </div>
    </HeaderContainer>
  )
}