import { MapPin, ShoppingCart } from 'phosphor-react'
import { CartButton, HeaderContainer, LocaleButton } from "./styles";

import Logo from '../../assets/coffee-delivery-logo.svg';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="" />
      </NavLink>
      <div>
        <LocaleButton>
          <MapPin weight='fill' size={22}/>
          Porto Alegre, RS
        </LocaleButton>
        <CartButton to="/checkout">
          <ShoppingCart weight='fill' size={22}/>
        </CartButton>
      </div>
    </HeaderContainer>
  )
}