import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  max-width: 1440px;
  padding: 2rem 10rem;
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
  padding: 0.5rem;

  background: #EBE5F9;
  color: #4B2995;
  border: 0;
`

export const CartButton = styled.button`
border-radius: 6px;
  display: flex;
  padding: 0.5rem;

  background: #F1E9C9;
  color: #C47F17;
  border: 0;
`