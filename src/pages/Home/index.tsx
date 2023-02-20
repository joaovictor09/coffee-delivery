

import banner from "../../assets/coffee-banner.png"
import { BenefitsBox } from "./components/BenefitsBox";
import { Banner, HomeContainer, Intro, Title } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Intro>
        <Title>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

          <BenefitsBox />
        </Title>

        <Banner src={banner} alt="" />
      </Intro>
    </HomeContainer>
  )
}