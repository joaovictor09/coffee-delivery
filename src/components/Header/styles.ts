import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  max-width: 1440px;
  padding: 2rem 0rem;
  align-items: center;
  justify-content: space-between;

  img {
    height: 2.5rem;
    width: auto;
  }

  div {
    display: flex;
    gap: 0.75rem
  }
`

export const LocaleButton = styled.button`
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.625rem 0.5rem;
  font-size: 0,875rem;

  background: #EBE5F9;
  color: #4B2995;
  border: 0;
`

export const CartButton = styled(NavLink)`
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 0.625rem 0.5rem;

  background: #F1E9C9;
  color: #C47F17;
  border: 0;
`