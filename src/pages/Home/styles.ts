import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
  max-width: 90rem;
  margin-top: 5.875rem;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Intro = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 3.5rem;
  justify-content: space-between;
`

export const Banner = styled.img``

export const Title = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 1.3;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    color: ${p => p.theme.title};
  }

  p {
    color: ${p => p.theme.subtitle};
    font-size: 1.25rem;
  }
`