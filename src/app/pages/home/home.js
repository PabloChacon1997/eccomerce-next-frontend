import { Home } from "@/app/components/Home";
import { Container } from "semantic-ui-react";

import { Separator, BarTrust, BannerAd } from "@/app/components/Shared";
import { BasicLayout } from "@/app/layouts/BasicLayout";
import { useCart } from "@/hooks";

const platformsId = {
  playstation: 'playstation',
  xbox: 'xbox',
  nintendo: 'nintendo',
  pc: 'pc',
}

export default function HomePage() {
  return (
    <>
      <BasicLayout>
        <Home.BannerLastGamePublished />
        <Separator height={100} />
        <Container>
          <Home.LatestGames title='Ultimos lanzamientos'/>
        </Container>

        <Separator height={100} />
        <BarTrust />
        <Separator height={100} />
        <Container>
          <Home.LatestGames title='PlayStation' limit={3} platformId={platformsId.playstation}/>
        </Container>
        <Separator height={100} />
        <BannerAd 
          title="Registrate y obten los mejores precios"
          subtitle='¡Compara con otros juegos y elige el tuyo!'
          btnTitle="Entrar ahora"
          btnLink="/pages/account"
          image="/images/img01.png"
        />  
        <Separator height={50} />

        <Container>
          <Home.LatestGames title='Xbox' limit={3} platformId={platformsId.xbox}/>
        </Container>

        <Separator height={100} />
      </BasicLayout>
    </>
  )
}
