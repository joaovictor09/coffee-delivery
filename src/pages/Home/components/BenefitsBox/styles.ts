import styled from "styled-components"

export const BenefitsGrid = styled.div`
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-row: 1fr 1fr;

  grid-auto-flow: row;
  gap: 1.25rem;
`

const STATUS_COLORS = {
  "yellow-dark": 'yellow-900',
  yellow: 'yellow-500',
  gray: 'text',
  purple: 'purple-500',
} as const

interface StatusProps {
  backgroundColor: keyof typeof STATUS_COLORS
}

export const BenefitsItems = styled.div<StatusProps>`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: flex;
    border-radius: 100%;
    padding: 0.5rem;
    background-color: ${p => p.theme[STATUS_COLORS[p.backgroundColor]]};
    color: ${p => p.theme.background};
  }

  span {
    line-height: 1.3;
  }
`