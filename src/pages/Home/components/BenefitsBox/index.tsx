import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import { BenefitsGrid, BenefitsItems } from "./styles"

export function BenefitsBox(){
  return (
    <BenefitsGrid>
      <BenefitsItems backgroundColor="yellow-dark">
        <div>
          <ShoppingCart weight='fill' size={16}/>
        </div>
        <span >
          Compra simples e segura
        </span>
      </BenefitsItems>

      <BenefitsItems backgroundColor="gray">
        <div>
          <Package weight='fill' size={16}/>
        </div>
        <span >
          Embalagem mantém o café intacto
        </span>
      </BenefitsItems>
      
      <BenefitsItems backgroundColor="yellow">
        <div>
          <Timer weight='fill' size={16}/>
        </div>
        <span >
          Entrega rápida e rastreada
        </span>
      </BenefitsItems>

      <BenefitsItems backgroundColor="purple">
        <div>
          <Coffee weight='fill' size={16}/>
        </div>
        <span >
          O café chega fresquinho até você
        </span>
      </BenefitsItems>
    </BenefitsGrid>
  )
}